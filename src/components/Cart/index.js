import {useContext, useState} from "react"

import styles from "./Cart.module.scss"
import CartSide from './CartSide'
import {CurrentTypeIdContext} from "../Pages/Products"

import {products} from "../../assets/data/products"


export default function Cart({onClick = () =>{}}){

	const context = useContext(CurrentTypeIdContext)

	const [ mountCartSide, setMountCartSide ] = useState(false) // false 

	const { currentTypeId, setCurrentTypeId, chosenItems,setChosenItems} = context

	const total = chosenItems.reduce((prev, curr)=>{
		return prev+curr.quantity*curr.price*(100-curr.saleOff)/100
	}, 0.0)

	return(
		<>
			<div className = {styles.Cart} onClick = {()=>{setMountCartSide(!mountCartSide)}}>
				<h2><i className="fa-solid fa-cart-shopping"/>{chosenItems.length} { chosenItems.length >1? 'Items' : "Item"}</h2>
				<div className = {styles.price}>
					<p>$ {Math.ceil(total*100)/100}</p>
				</div>
			</div>	

			{ mountCartSide &&  <CartSide setMount = {setMountCartSide} />}		
		</>
	)
}