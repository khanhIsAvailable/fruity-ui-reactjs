import styles from './Contact.module.scss'
import contactIllustration from '../../../assets/images/contact-illustration.png'

import {useRef, useEffect, forwardRef, useState} from 'react'
import Popup from 'reactjs-popup'

import Button from '../../Button'


const InputField = forwardRef((props,ref)=>{
	let Tag = 'input'
	if(props.tag) { Tag = props.tag}
	const handleOnchange = (event)=>{
		let prev = [...props.data]
		prev[props.idx].value = event.target.value
		props.setData([...prev])
	}
	return(
		<div className = {styles.inputField}>
			<label htmlFor = {props.id}>{props.title}</label>
			<Tag onChange = {(event)=>handleOnchange(event)} ref = {ref} id = {props.id} type = 'text'/>
		</div>
	)
})

function Infor({title, details}){
	return(
		<div className = {styles.infor} >
			<h2>{title}</h2>
			<p>{details}</p>
		</div>
	)
}

function Modal({close, required}){
	const barRef = useRef() 
	function move(){
		const timerId = setInterval(frame,10)
		let width = 0;
		function frame(){
			if (width>=200){
				clearInterval(timerId)
				window.location.href = '/'
			} else{
				width++
				barRef.current.style.width = width/2 +'%'
			}
		}
	}

	useEffect(()=>{
		if(required){
			move()
		}
	},[required])
	return(
			<div onLoad = {move} className = {styles.modal}>
				<div className = {styles.progress}>
					{required &&<div ref = {barRef} className = {styles.bar} ></div>}
				</div>
				<div className = {styles.content}>
					{required && 
						<>
							<h2>Your form has been successfully submitted!</h2>
							<p>Thanks for your response!</p>
							<span>You will return Home Page in 2s</span>
						</>
						|| <h2>Please fill in all of the fields</h2>
					}
				</div>
				{!required && <Button onClick = {close} content = "Cancel" type = 'primary' />}
			</div>
		)
} 

function SubmitButton({data}){
	function check(){
		for(let i = 0 ; i < data.length ; i++){
			if(data[i].value==""){
				return false
			}
		}
		return true
	}

	return (
		<>
			<Popup
				trigger = {<Button type = "primary" size = "S" height = "h40px" fz = "fz17px" content = {'Submit'}/>}
				modal
			>
			{close=> <Modal required = {check()} close = {close}/>	}
				
			</Popup>
		</>		
	)
}

export function Form({data, setData}){
	const formRef = useRef()
	useEffect(()=>{
		formRef.current.addEventListener('submit',(event)=>{
			event.preventDefault()
		})
	},[])
	return(
		<form ref = {formRef}>
			<div className = {styles.pair}>
				<InputField value = {data[0].value} idx = {0} data = {data} setData ={setData} id = 'name' title = "Name" />
				<InputField value = {data[1].value} idx = {1} data = {data} setData ={setData} id = 'email' title = "Email" />							
			</div>
			<InputField value = {data[2].value} idx = {2} data = {data} setData ={setData} id = 'subject' title = "Subject" />
			<InputField value = {data[3].value} idx = {3} data = {data} setData ={setData} tag = "textarea" id = 'description' title = "Description" />
			<SubmitButton data = {data} />
		</form>
	)
}


const Contact = () =>{
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
	return(
		<div className = 'wrapper'>
			<div className = {styles.contact}>
				<div className = {styles.contactDetails}>
					<div className = {styles.contactIllustration}>
						<img src ={contactIllustration}/>
					</div>
					<div className =  {styles.details}>
						<Infor title = "Address" details ="Hanoi, Vietnam" />
						<Infor title = "Phone" details ="+84 123 456 789" />
						<Infor title = "Website" details ="https://abcde.com" />
						<div className = {styles.logo}>
							<h2>Follow Us</h2>
							<a target = '_blank' href = 'https://facebook.com' className="fa-brands fa-square-facebook"/>
							<a target = '_blank' href = 'https://twitter.com' className="fa-brands fa-twitter"/>
							<a target = '_blank' href = 'https://instagram.com' className="fa-brands fa-instagram"/>
						</div>
					</div>
				</div>
				<div className = {styles.form}>
					<h2>Questions, Comments, Or Concerns?</h2>
					<Form data ={data}  setData = {setData}/>
				</div>
			</div>
		</div>
		
	)	
}
export default Contact