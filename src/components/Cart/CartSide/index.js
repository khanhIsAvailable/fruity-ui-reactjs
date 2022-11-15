import Popup from "reactjs-popup"
import styles from './CartSide.module.scss'

import {useContext, useRef, useEffect} from 'react'
import {CurrentTypeIdContext} from '../../Pages/Products'
import Button from "../../Button"
import BillForm from './BillForm'

import emptyCartIcon from '../../../assets/images/empty-cart-icon.png'

import {images, thumbnailImage} from '../../Pages/Products/ProductsContainer'


const imgPath = '../../../assets/data/products/thumb/'

function check(val){
	if(typeof val === typeof "hjhj"){
		return 1 
	}
	return 0
}

function total(item){
	return item.quantity * item.price * (100-item.saleOff)/100
}

function sum(list){
	let res = list.reduce((sum, item)=>(sum+(100-item.saleOff)*item.price*item.quantity/100),0)
	res = Math.ceil(res*100)/100
	return res
}	

function addAProduct(item, chosenItems,setChosenItems){
	let idx = chosenItems.indexOf(item)
	let new_items = [...chosenItems]
	new_items[idx].quantity+=1
	setChosenItems([...new_items])
}

function subtractAProduct(item, chosenItems,setChosenItems){
	let idx = chosenItems.indexOf(item)
	let new_items = [...chosenItems]
	if(new_items[idx].quantity === 1){
		throw new Error("INVALID ACTION")
	} else {
		new_items[idx].quantity-=1
		setChosenItems([...new_items])		
	}
}

function removeProduct(item, chosenItems,setChosenItems){
	let idx = chosenItems.indexOf(item)
	let new_items = [...chosenItems]
	new_items.splice(idx,1)
	setChosenItems([...new_items])
}

function EmptyCart(){
	return(
		<div className = {styles.emptyCart}>
			<img src = {emptyCartIcon}/>
			<h2>No Products Found</h2>
		</div>
	)
}

function RemoveProduct({item, chosenItems,setChosenItems}){

	return(
		<Popup 
			trigger = {<span className="fa-solid fa-xmark"/>}
			modal
			nested
			closeOnDocumentClick
		>
			{
				close =>(
					<div className = {styles.modal}>
						<div className = {styles.description}>
							<h2>{`Do you want to remove ${item.title}?`}</h2>
							<p onClick = {close} className = {styles.close}>&times;</p>
						</div>
						<div className = {styles.actions}>
							<Button onClick = {()=>{removeProduct(item, chosenItems,setChosenItems)}} border = 'green' type = 'primary' size = "M" content = "YES" />
							<Button onClick = {close} border = 'green' type = 'primary' size = "M" content = "NO" />
						</div>
					</div>
				)
			}
		</Popup>
	)
}

function ItemInList({item, chosenItems,setChosenItems}){
	const minusRef = useRef()
	useEffect(()=>{
		minusRef.current.classList.toggle( "disable" ,item.quantity === 1)
	},[chosenItems])
	return (
		<>
			<div className = {styles.ItemInList}>
				<div className = {styles.actions}>
					<i onClick = {()=>addAProduct(item, chosenItems,setChosenItems)} className="fa-solid fa-plus"/>
					<h2 className = {styles.quantity}>{item.quantity}</h2>
					<i ref={minusRef} onClick = {()=>subtractAProduct(item, chosenItems,setChosenItems)} className="fa-solid fa-minus"/>
				</div>

				<div className = {styles.details}>
					<div className = {styles.thumb}>
						<img src = {thumbnailImage(item.thumb, images)} />
					</div>

					<div className = {styles.description}>
						<h2 >{item.title}</h2>
						<p >$ {Math.ceil(item.price*(100-item.saleOff)/100*100)/100}</p>
						<span>{item.quantity} X {check(item.weight)?item.weight: `${item.weight}lb`}</span>
					</div>

					
				</div>

				<div className= {styles.total}>
					<h2>$ {total(item)}</h2>
					<RemoveProduct item = {item} chosenItems= {chosenItems} setChosenItems={setChosenItems} />
				</div>
			</div>
		</>
	)
}


function ListOfChosenItems({chosenItems,setChosenItems}){
	let target = []
	for (let x of chosenItems){
		target.push(<ItemInList chosenItems = {chosenItems} setChosenItems = {setChosenItems} key = {x.id} item = {x} />)
	}

	return(
		<>
			{
				[...target]
			}
		</>
	)
}


function CartSide({setMount}){
	const { currentTypeId, setCurrentTypeId, chosenItems,setChosenItems } = useContext(CurrentTypeIdContext)
	const d = new Date()
	const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
	return(
		<div className = {styles.CartSide}>
			<div className = {styles.CartSideTitle}>
				<h2><i className="fa-solid fa-cart-shopping"/>{chosenItems.length} {chosenItems.length >1? "Items": "Item"}</h2>
				<span onClick = {()=>setMount(false)} className="fa-solid fa-xmark"/>
			</div>
			<div className = {styles.List}>
				{ chosenItems.length ==0 ? <EmptyCart/>  :  < ListOfChosenItems chosenItems = {chosenItems} setChosenItems = {setChosenItems} />}
			</div>
			<div className = {styles.checkoutSection}>
				<Popup
					trigger = {
						<div className = {styles.checkout}>
							<h2>Checkout</h2>
							<Button op= 'op1' size = 'M' radius = "r40px" height="h80" fz= "fz17px" content = {`$ ${sum(chosenItems)}`} type = "secondary"></Button>
						</div>}
					modal
					nested
				>
				{close=>(
					<BillForm invoiceno ={1168} date = {date} tax = {2} name = "Peter Parker" address = "700 Jackson Pl., NW, Washington, D.C." close = {close}/>
				)}

				</Popup>
				
			</div>
		</div>

	)
}

export default CartSide