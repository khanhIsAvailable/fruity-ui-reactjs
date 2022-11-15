import styles from "./Sidebar.module.scss"

import {useRef, useEffect} from "react"

import Menu from "./Menu"

import {products} from "../../../../assets/data/products"

function Sidebar(){

	const sidebarRef = useRef(null)

	useEffect(()=>{
		window.addEventListener("scroll", ()=>{
			sidebarRef.current.classList.toggle(styles.fixed, window.pageYOffset >=865)
		})
	},[])


	return (
		<div ref = {sidebarRef} className = {styles.sidebar} >
			<Menu data={products} />
		</div>
	)
}


export default Sidebar