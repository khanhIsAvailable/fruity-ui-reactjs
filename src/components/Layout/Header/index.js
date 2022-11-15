import {Link} from 'react-router-dom'
import {useRef, useEffect, useState} from "react"
import Popup from 'reactjs-popup'
import styles from "./Header.module.scss"
import logo from "../../../assets/images/logo.png"

import Button from "../../Button"
import Search from "./Search"
import {Form} from '../../Pages/Contact'

export default function Header(){

	const headerRef = useRef(null)
	const searchRef = useRef(null)
	const init = [
		{
			title: 'name',
			value: ''
		},
		{
			title: 'email',
			value: ''
		},
		{
			title: 'subject',
			value: ''
		},
		{
			title: 'description',
			value: ''
		}
	]
	const [data, setData] = useState([...init])
	const formRef = useRef()

	useEffect(()=>{
		window.addEventListener("scroll", ()=>{
			headerRef.current.classList.toggle(styles.fixed, window.pageYOffset >=550)
		})
	},[])

	return(
		<div ref = {headerRef} className = {styles.header}>
			<a href = "/">
				<img src = {logo} className = {styles.logo} alt = "Fruity"/>
			</a>

			<Search place = "NAVBAR" hide = {true} size = "M"/>

			<div className = {styles.nav}>
				<nav>
					<ul>
						<li>
							<Link to='/shops'>Shops</Link>
						</li>

						<li>
							<Link to='/offers'>Offers</Link>
						</li>

						<li>
							<Link to='/FAQ'>FAQ</Link>
						</li>

						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>
				<Popup
					trigger = {<Button type = "primary" size = "L" content = "Become A Seller" />}
					closeOnDocumentClick
					modal
					nested
				>
				{close=>
					(
						<div className = {styles.wrapper}>
							<h2> Registration Form </h2>
							<Form data = {data} setData = {setData} formRef = {formRef}/>
							<span onClick =  {close}>&times;</span>
						</div>
					)
				}
					
				</Popup>
				
				

			</div>


		</div>

	)
}