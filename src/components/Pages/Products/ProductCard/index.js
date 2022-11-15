import styles from "./ProductCard.module.scss"
import Popup from "reactjs-popup"

import ProductDetails from '../ProductDetails'

import AddButton from "../../../Button/AddButton.js"

function RenderPrice({data}){
	let currentPrice = data.price
	let oldPrice 
	if(data.saleOff !==0){
		oldPrice = currentPrice
		currentPrice = currentPrice*(100-data.saleOff)/100;
	}
	return (
		<>
			<p>$ {(Math.ceil(currentPrice*10)/10).toFixed(2)}</p>
			{ !!data.saleOff &&  <del>$ { (Math.round(oldPrice*100)/100).toFixed(2)}</del>}
		</>
	)
}


const  ProductCard = (props)=>{
	const {data, thumbnail, quantity = 0} = props
	return(
		<div  className = {styles.productCard}  >
			<div className = {styles.thumbnail}>
				<TriggerPopup thumbnail = {thumbnail} data = {data} quantity = {quantity} />	
			</div>
			{!!data.saleOff && <span className = {styles.saleOff}>-{data.saleOff}%</span>}
			<div className = {styles.details}>
				<div className = {styles.price}>
					<RenderPrice data =  {data} />
				</div>
				<div className = {styles.name}>
					<TriggerPopup title = {data.title} data = {data} quantity = {quantity} />
				</div>
			</div>

			<div className= {styles.button}>
				<AddButton data = {data} >Add</AddButton>
			</div>
		</div>
	)
}




function TriggerPopup(props){
	let tag
	if (props.thumbnail){
		tag = <img   src = {props.thumbnail}/>
	} else if (props.title){
		tag = <h2>{props.title}</h2>
	}
	return (
		<Popup
			trigger={tag}
			closeOnDocumentClick
			modal
		>
		  {
		  	close=>(
		  		<>	
		  			<button className = {styles.close} onClick = {close}>&times;</button>
		  			<ProductDetails {...props} />
		  		</>
		  		)
		  }
		</Popup>

	)
}


export default ProductCard


