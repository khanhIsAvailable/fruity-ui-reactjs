import styles from './Products.module.scss'

import {useState, useEffect, createContext} from "react"

import Sidebar from "./Sidebar"

import ProductsContainer from "./ProductsContainer"

import Button from "../../Button"

import  Cart from "../../Cart"

const CurrentTypeIdContext = createContext()



function Products(){

	const [currentTypeId, setCurrentTypeId] = useState(1)

	let init = []
	if(window.localStorage.getItem('data')){
		init = [...JSON.parse(window.localStorage.getItem('data'))]
	}
	
	const [chosenItems, setChosenItems]  = useState ([...init])

	useEffect(()=>{
		window.localStorage.clear()
		window.localStorage.setItem('data', JSON.stringify(chosenItems))
	},[chosenItems])

	const context = { currentTypeId, setCurrentTypeId, chosenItems,setChosenItems}

	


	return (

		<CurrentTypeIdContext.Provider value = {context}>
			<div className = {styles.products}>
				<Sidebar/>
				<ProductsContainer  />
			</div>
			<Cart />
		</CurrentTypeIdContext.Provider>

	)
}

export {CurrentTypeIdContext}

export default Products
