import {useState,useRef, useEffect} from "react"
import styles from "./Search.module.scss"



function Search({hide, size, ref, place}){

	const cancelRef = useRef()
	const inputRef = useRef()

	const searchRef = useRef()

	const [searchText, setSearchText] = useState("")

	useEffect(()=>{
		(place!=="HOMEPAGE")&&window.addEventListener("scroll", ()=>{
			searchRef.current.classList.toggle(styles.hide, window.pageYOffset <550)
		})
	},[])


	const handleCancel = ()=>{
		setSearchText("")
		cancelRef.current.classList.add(styles.hide)
		inputRef.current.focus()
	}
	
	const handleOnChangeInput = (e)=>{
		setSearchText(e.target.value)
		cancelRef.current.classList.toggle(styles.hide,  e.target.value === "")
	}

	const classes =  styles.search +" "+ (hide && styles.hide) + " " + (size && styles[size])

	const handleSubmit = ()=>{
		console.log(searchText)
	}


	return(
		<div ref = {searchRef} className = {classes}>
			<div className = {styles.searchBar}>
				<input 
					ref = {inputRef} 
					value = {searchText} 
					onChange = {handleOnChangeInput} 
					className= {styles.input} 
					type = 'text' 
					placeholder = "Search your products from here"/>
				<i ref = {cancelRef} onClick = {handleCancel} className= {`fa-solid fa-xmark ${styles.cancel} ${styles.hide}`}></i>
			</div>
			<button onClick = {handleSubmit} className = {styles.button}>
				<i className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
				<p className = {styles.searchContent}>Search</p>
			</button>
		</div>
	)
}

export default Search