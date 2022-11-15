import styles from './Offers.module.scss'
import Button from '../../Button'
import {useRef, useState} from 'react'


function Offer({backgroundColor,saleOff ,code}){
	const codeRef = useRef()
	const [content, setContent] = useState('Copy')

	return(
		<div className = {styles.offerWrapper}>
			<div style={{backgroundColor: `${backgroundColor}`, outlineColor: `${backgroundColor}`}}  className = {styles.ticket}>
				<h2 >{saleOff} OFF</h2>
			</div>
			<div className = {styles.code}>
				<h2 ref = {codeRef} >{code.toUpperCase()}</h2>
				<Button 
					onClick = {
						()=>{
							if(content !== 'Copied'){
								setContent('Copied')
								navigator.clipboard.writeText(codeRef.current.innerText)
							}
							return ;
						}
					} 
					size = "S" 
					type = "secondary" 
					content = {content}
					/>
			</div>
		</div>
	)
}

const Offers = () =>{


	const offers = 
	[
		{backgroundColor :"#f3c430", saleOff : "$2", code : "frt12"},
		{backgroundColor :"#f16393", saleOff : "$4", code : "ERT9"},
		{backgroundColor :"purple", saleOff : "2%", code : "Tuxn42"},
		{backgroundColor :"#ee6952", saleOff : "5%", code : "FRS23"},
		{backgroundColor :"red", saleOff : "$3", code : "Hnan1"},
		{backgroundColor :"#fc9f9a", saleOff : "3%", code : "QWER1"},
		{backgroundColor :"#8d71fe", saleOff : "5%", code : "2off"},
		{backgroundColor :"skyblue", saleOff : "$5", code : "Fresh1"},
		{backgroundColor :"#faa96e", saleOff : "$2", code : "clbr94"}
	]

	return(
		<div className = 'wrapper'>
			<div className = "title">
				<h2>Offers for you</h2>
			</div>
			<div className = {styles.offersGrid}>
			{
				offers.map((item,i)=>(
					<Offer backgroundColor ={item.backgroundColor} key = {i} saleOff = {item.saleOff} code = {item.code}/>
					))
			}
				
			}
				
			</div>
		</div>
	)
}


export default Offers