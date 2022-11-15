import styles from './BillForm.module.scss'
import {forwardRef, useContext} from 'react'
import {CurrentTypeIdContext} from '../../../Pages/Products'
import logo from '../../../../assets/images/logo.png'

const BillForm = forwardRef((props,ref) =>{
	const { currentTypeId, setCurrentTypeId, chosenItems,setChosenItems } = useContext(CurrentTypeIdContext)
	const total = Math.round(((100+props.tax)*(chosenItems.reduce((sum, item)=>(sum+(100-item.saleOff)*item.price*item.quantity/100),0))/100)*100)/100
	const calcPrice =(price,saleOff)=>{
		return Math.ceil(price*(100-saleOff)*100/100)/100
	}
	return(
		<div className = {styles.BillForm} ref = {ref} {...props}>
			<span className = {styles.close} onClick  = {props.close}>&times;</span>
			<div className = {styles.title}>
				<div className = {styles.invoice}><h2>INVOICE</h2></div>
				<div className = {styles.logo}>
					<img src = {logo}/>
				</div>
			</div>

			<div className = {styles.invoiceInfor}>
				<p>Invoice: <span>No.{props.invoiceno}</span></p>
				<p>Date: <span>{props.date}</span></p>
			</div>

			<div className = {styles.customer}>
				<div className = {styles.invoiceTo}>
					<h2>Invoice to:</h2>
				</div>
				<div className = {styles.details}>
					<h2>{props.name}</h2>
					<p><i className="fa-solid fa-location-dot"/> {props.address}</p>
				</div>
			</div>

			<div className = {styles.table}>
				<table>
					<thead>
						<tr>
							<th>ITEM NAME</th>
							<th>UNIT</th>
							<th>QTY</th>
							<th>PRICE</th>
							<th>TOTAL</th>
						</tr>						
					</thead>
					<tbody>
						{chosenItems.map((item,i)=>(
							<tr key = {i}>
								<td key = {i*1000+1}>{item.title}</td>
								<td key = {i*1000+2}>{(typeof item.weight == String) ? item.weight : `${item.weight}lb`}</td>
								<td key = {i*1000+3}>{item.quantity}</td>
								<td key = {i*1000+4}>${calcPrice(item.price,item.saleOff)}</td>
								<td key = {i*1000+5}>${Math.round(((calcPrice(item.price,item.saleOff))*item.quantity)*100)/100}</td>
							</tr>
							))}						
					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td>TAX: {props.tax}%</td>
							<td>${total}</td>
						</tr>
					</tfoot>
				</table>
			</div>

			<div className = {styles.infor}>
				
				<div className = {styles.payment}>
					<div className = {styles.paymentMethod}>
						<h2>Payment Method:</h2>
					</div>
					<div className = {styles.details}>
						<div className = {styles.method}>
							<h2>Paypal</h2>
							<p>fruity@tunx.com</p>						
						</div>

						<div className = {styles.method}>
							<h2>Bank Account</h2>
							<p>12 345 678 96</p>						
						</div>

					</div>
					
					<div className = {styles.thanks}>
						<p>Thanks you for your trust with us!</p>
					</div>
				</div>

				<div className = {styles.signature}>
					<div className = {styles.total}>
						<h2>TOTAL:</h2>
						<h2>${total}</h2>
					</div>

					<div className = {styles.sign}>
						<h1>Fruity Group</h1>
					</div>
				</div>
			</div>


			<footer>
				<div className = {styles.term}>
					<h2>TERMS:</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				<div className = {styles.companyAddress}>
					<h2>Fruity</h2>
					<p><i className="fa-solid fa-location-dot"/> 123 Lorem Ipsum, Dolor, Consectetur.</p>
				</div>
			</footer>
		</div>
		
	)
})

export default BillForm