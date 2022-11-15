import styles from "./FAQ.module.scss"
import {useState} from "react"

function Box(props){
	const [open, setOpen] = useState(false)
	return(
		<div  onClick = {()=>{setOpen(!open)}} className = {styles.box}>
			<div className = {styles.boxTitle}>
				<h2>{props.title}</h2>
				{!open&&<i className="fa-solid fa-plus"/>}
				{open&&<i className="fa-solid fa-minus"/>}

			</div>

			{open && <div className = {styles.boxDetails}>
				<p>{props.details}</p>
			</div>}

		</div>
	)
}

const FAQ = () =>{

	const data = [
		{
			title: 'How to contact with Customer Service?',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		},
		{
			title: 'Website response taking time, how to improve?',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			title: 'How to contact with Customer Service?',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
	]

	return (
		<div className = {styles.FAQ}>
			<div className = 'title'>
				<h2>FAQ</h2>
			</div>

			<div className = {styles.boxContainer}>
				{data.map((item,i)=>(
					<Box title = {item.title} details = {item.details} key = {i} />
				))}
			</div>
		</div>
	)
}

export default FAQ