import styles from "./ProductDetails.module.scss"

import {useState, useRef, useContext} from 'react'

import {images, productImages} from "../ProductsContainer"
import {CurrentTypeIdContext} from '../'
import {products} from '../../../../assets/data/products'

import Button from "../../../Button"
import AddButton from "../../../Button/AddButton.js"

import {gsap} from 'gsap'


function ProductDetails(props){
	const {data, quantity = 0} = props
	const switcherImages = productImages(data.thumb, images)
	const [thumbIdx, setThumbIdx] = useState(0)
	const switcherRef = useRef()
	const context = useContext(CurrentTypeIdContext)

	let checkBtn = true


	for (let i = 0 ; i < context.chosenItems.length ; i++){
		if(context.chosenItems[i].id == data.id){
			checkBtn = false 
			break
		}
	}


	function setThumbIdxFunc(val){
		if(val < 0 || val > switcherImages.length - 1){
			return;
		} else{
			setThumbIdx(val)
		}
	}

	function handleSwitch(targetIdx, switcherRef){
		const switcher = switcherRef.current
		if(targetIdx >= 0 || targetIdx <= switcherImages.length){
			let val
			if(targetIdx > thumbIdx){
				val = `-=${(targetIdx-thumbIdx)*446}px`
			}else {
				val = `+=${(thumbIdx - targetIdx)*446}px`
			}
			gsap.to(switcher, {x: val, ease : 'back.out', duration : .7})
			setThumbIdxFunc(targetIdx)
		}
	}


	function check(val){
		if(typeof val === typeof "hjhj"){
			return 1 
		}
		return 0
	}


	let renderImages = []
	for(let i = 0 ; i < switcherImages.length; i++){
		renderImages.push(<img src = {switcherImages[i]} key = {i} />)
	}

	function RenderPrice({data}){
		let oldPrice = data.price
		let newPrice = data.price
		if(data.saleOff != 0){
			newPrice = Math.ceil(oldPrice*(100-data.saleOff)/10)/10
		}
		return (
			<>
				
				<h2>${Math.round(newPrice).toFixed(2)}</h2>			
				{data.saleOff!=0 && <del>${(Math.round(oldPrice*100)/100).toFixed(2)}</del>}
			</>
		)
	}


	function parentTag(data){
		let returnArr = []

		for (let i = 0 ; i < products.length; i++){
			let field =  products[i]
			for(let j = 0 ; j < field.children.length ; j++){
				let subField = field.children[j]
				for(let z = 0 ; z < subField.items.length; z++){
					if(subField.items[z].id === data.id){
						returnArr = [data.title, subField.category, field.category]
					}
				}
			}
		}

		return returnArr

	}

	function RenderDesc({desc}){
		const [para, setPara] = useState(desc.substring(0,100))
		function check(para,desc){
			return para!=desc
		}
		return (
			<div className = {styles.desc}>
				<p>{para} {check(para,desc)?'...':''}</p>
				{check(para,desc)? <span onClick = {()=>{setPara(desc)}} >Read more</span> :  <span onClick = {()=>{setPara(desc.substring(0,100))}}>Less</span>}
			</div>

		)

	}

	const parentTags = parentTag(data)

	return(
		<div className = {styles.modal}>
			
			<div className = {styles.DESC}>
				<div className = {styles.image}>
					<div className = {styles.SWITCHERWRAPPER} >
						<div ref = {switcherRef} className={styles.switcher}>
							{renderImages.map((item,i)=>(
								<div key = {i} className = {styles.bigImg}>
									{item}
								</div>
							))}
						</div>
						{thumbIdx >=1 &&<i onClick = {()=>handleSwitch(thumbIdx-1, switcherRef)} className = {`fa-solid fa-chevron-left ${styles.left}`}/>}
						{thumbIdx < switcherImages.length-1 && <i onClick = {()=>handleSwitch(thumbIdx+1, switcherRef)} className = {`fa-solid fa-chevron-left ${styles.right}`}/>}
					</div>

					<div className = {styles.IMAGENAVIGATOR}>
						{renderImages.map((item, i)=>{
							if (i === thumbIdx){
								return(
									<div onClick = {()=>handleSwitch(i, switcherRef)} key = {i} className = {`${styles.img} ${styles.active}`}>
										{item}
									</div>
									)
							} else{
								return (
									<div onClick = {()=>handleSwitch(i, switcherRef)} key = {i} className = {styles.img}>
										{item}
									</div>
								)
							}
						})}
					</div>

					{data.saleOff!=0 &&<div className = {styles.tag}>
											<span>{data.saleOff}%</span>
										</div>}
				</div>

				<div className = {styles.productDesc}>
					<div className  = {styles.title}><h2>{data.title}</h2></div>
					<div className =  {styles.unit}><p>{check(data.weight)?data.weight: `${data.weight}lb`}</p></div>
					<RenderDesc desc = {data.description} />
					<div className = {styles.price}>
						<RenderPrice data = {data}/>
					</div>

					<div className = {styles.action}>
{						<AddButton className = {styles.AddBtn} checkPlus = {!checkBtn}  data = {data} >Add to Shoping Cart</AddButton>}
						<p>{data.availability}  {data.availability > 1 ? 'pieces' : 'piece'} available</p>
					</div>
					<div className = {styles.keyWords}>
						<h2>Tags: </h2> 
						{parentTags.map((item,i)=>(
							<span key = {i}>{item}</span>
							))} 
					</div>			
				</div>	

			</div>

			<div className ={styles.DESCDETAILS}>
				<h2>Details</h2>
				<p>{data.description}</p>
			</div>
			
			

		</div>
	)
}
export default ProductDetails

