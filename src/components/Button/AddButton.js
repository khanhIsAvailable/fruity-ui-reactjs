import styles from "./AddButton.module.scss"

import {useState, useContext} from "react"

import {CurrentTypeIdContext} from "../Pages/Products"


function AddButton({className,checkPlus = true, data, children, onClick =  ()=>{}}){

	const context = useContext(CurrentTypeIdContext)
	const { currentTypeId, setCurrentTypeId, chosenItems,setChosenItems} = context

	function checkIncluding(id){
		for (let i=0 ; i<  chosenItems.length; i++){
			if (chosenItems[i].id == id){
				return i
			}
		}
		return -1
	}

	const id = checkIncluding(data.id)

	

	function handleButtonClick(){
		let new_list = [...chosenItems]
		new_list.push({...data, quantity :1})
		setChosenItems([...new_list])
		onClick()
	}

	function handleSubtractClick(){
		let new_list = [...chosenItems]
		if(chosenItems[id].quantity === 1){
			new_list.splice(id,1)
		} else {
			new_list[id].quantity -=1
		}
		setChosenItems([...new_list])
	}

	function handleAddClick(){
		if (id === -1) handleButtonClick()
		else{
			let new_list = [...chosenItems]
			new_list[id].quantity +=1
			setChosenItems([...new_list])
		}
	}


	return(
		<button className = {`${styles.button} ${id!=-1 && styles.active} ${className} `} onClick = { id ==-1 ?handleButtonClick: ()=>{} }>
			<i  onClick = {handleSubtractClick} className={`fa-solid fa-minus ${styles.minus} ${id===-1&&styles.hide}`}></i>
			<p>{id==-1 ? children : chosenItems[id].quantity}</p>
			{checkPlus &&<i onClick = {handleAddClick} className={`fa-solid fa-plus ${styles.plus}`}></i>}
		</button>
	)

}

export default AddButton