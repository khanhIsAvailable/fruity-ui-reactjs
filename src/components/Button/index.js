import styles from './Button.module.scss'
import {Link} from 'react-router-dom'
import {useRef, forwardRef} from "react"

const Button = forwardRef((
	{	
		radius,
		border,
		height,
		op,
		fz,
		leftIcon : LeftIcon, 
		rightIcon: RightIcon,
		hiddenIcon: HiddenIcon,
		hasChild = false,
		type,
		content,
		size,
		onClick =()=>{},
		href,
		to,
		className,
		...passProps
		}, ref) =>{
	const rightIconRef = useRef()
	const hiddenIconRef = useRef()
	const cpnRef = useRef()
	ref = cpnRef


	let Component = 'button'

	let classes = ` ${styles.button} ${styles[size]} ${styles[type]} ${styles[radius]} ${styles[height]} ${styles[op]}  ${styles[fz]} ${className}`



	let props = {
		...passProps
	}

	if(to){
		props.to = to;
		Component = Link
	} else if (href) {
		props.href = href;
		Component = 'a'
	} 

	const handleClick =  (e) =>{
		if (hasChild) {
			rightIconRef.current.classList.toggle(styles.hide)
			hiddenIconRef.current.classList.toggle(styles.hide)
		}
		cpnRef.current.classList.toggle(styles.active, Component  !== 'button')
		onClick(e)
	}


	return(
			
			<Component 
				ref = {cpnRef}
				className = {classes} 
				onClick = {(e)=>handleClick(e)} 
			> 
				{!!LeftIcon && LeftIcon} 
				{content} 
				{RightIcon && hasChild && 
					<>
						<span ref =  {rightIconRef} className = {styles.rightIcon}>{RightIcon}</span> 
						<span ref =  {hiddenIconRef} className = {`${styles.hiddenIcon} ${styles.hide}` }>{HiddenIcon}</span>
					</>
				} 
			</Component>
			
	)
})

export default Button