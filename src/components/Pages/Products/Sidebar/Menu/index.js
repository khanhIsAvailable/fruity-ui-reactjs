import styles from "./Menu.module.scss"

import {useState, useRef, useEffect , useContext } from "react"

import {CurrentTypeIdContext} from "../../index.js"

import Button from "../../../../Button"

export default function Menu({data}){

	const context = useContext(CurrentTypeIdContext)
	const currentTypeId = context.currentTypeId
	const setCurrentTypeId = context.setCurrentTypeId

	const menuRef = useRef()


	const parentMenuItemClicked = (e,id) =>{
		const currentNode = e.target
		const parentsNode = currentNode.parentNode
		const children = parentsNode.childNodes
		

		children[[...children].indexOf(currentNode)+1].classList.toggle(styles.hide)

		if(id!== currentTypeId ){
			setCurrentTypeId(id)			
		}

	}

	const childrenMenuItemClicked = (e,id) =>{
		const currentNode = e.target

		const children = currentNode.parentNode.childNodes

		children.forEach(item=>{
			item.classList.toggle(styles.noActive, item !== currentNode )
		})


		if(id!== currentTypeId ){
			setCurrentTypeId(id)
		}

	}
	

	return(
		<div 
			ref = {menuRef} 
			className = {styles.menu}
			>
			{
				data.map((item,i)=>(
					<div key = {i}>
						<Button 
							// status = ""
							// currentTypeId
							// setCurrentTypeId = {(value)=>{setCurrentTypeId(value)}}				
							onClick = {(e)=>parentMenuItemClicked(e,item.id)}
							key = {item.id}  
							content = {item.category} 
							leftIcon = {item.icon}
							type = "basic"
							size = "XL"
							hasChild = {!!item.children}
							rightIcon = <i key = {item.id+1000} className="fa-solid fa-chevron-up"/>
							hiddenIcon = <i key = {item.id+2000} className="fa-solid fa-chevron-down"/>
						/>

						{
							item.children &&
								<div key = {3000+item.id } className = {`${styles.childrenMenu} ${styles.hide}`}>
									{
										item.children.map(productType =>
											(
												<Button 
													// status= ""				
													// currentTypeId 
													// setCurrentTypeId = {(value)=>{setCurrentTypeId(value)}}	
						
													onClick = {(e)=>childrenMenuItemClicked(e,productType.id)}			
													key = {productType.id}  
													content = {productType.category} 
													leftIcon = {productType.icon}
													type = "basic"
													size = "XL"
													hasChild = {!!productType.children}
													rightIcon = <i key = {4000+productType.id } className="fa-solid fa-chevron-up"/>
													hiddenIcon = <i  key = {5000+productType.id } className="fa-solid fa-chevron-down"/>
												/>								
											)
										)
									}
								</div>
						}

					</div>
				))		
			}
		</div>
	)
}