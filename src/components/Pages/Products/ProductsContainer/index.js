import styles from "./ProductsContainer.module.scss"

import {useContext, useState, useEffect} from "react"

import ProductCard from "../ProductCard"
import Button from "../../../Button"

import {CurrentTypeIdContext} from "../"

import {products} from '../../../../assets/data/products'

function importAll(r) {
	let images = [];
	r.keys().map((item, index) => { 
		images[item.replace('./', '')] = r(item); 
	});
	return images;
}


export function thumbnailImage(thumb,images){
	let res = (images[`${thumb}/${thumb}.png`]) ? images[`${thumb}/${thumb}.png`] : images[`${thumb}/${thumb}-1.png`]
	return res
}

export function productImages(thumb, images){
	let res = []
	let i = 1;
	while (true){
		if(images[`${thumb}/${thumb}.png`]){
			res.push(images[`${thumb}/${thumb}.png`])
			break;
		} else if (images[`${thumb}/${thumb}-${i}.png`]){
			res.push(images[`${thumb}/${thumb}-${i}.png`])			
		} else break;
		i+=1
	}
	return res
}
export const images = importAll(require.context("../../../../assets/data/products/thumb/", true, /\.(png|jpe?g|svg)$/));


function ProductsContainer(){
	const context = useContext(CurrentTypeIdContext)
	const [limit, setLimit] = useState(8)
	

	useEffect(()=>{
		setLimit(8)
	},[context.currentTypeId])

	function listProductOfTargetType(products, id){
		let list = []	

		for(let i = 0 ; i < products.length ; i ++){
			if(products[i].id === id){
				for(let j = 0 ; j < products[i].children.length; j++){
					list = [...list, ...products[i].children[j].items ]
				}
				break
			} else{
				for(let j = 0 ; j < products[i].children.length; j++){
					if(products[i].children[j].id === id){
						list = [...list, ...products[i].children[j].items ]
						break						
					}
				}
			}

		}

		return list

	}



	

	const list = listProductOfTargetType(products, context.currentTypeId )

	const handleSeeMoreClick = () =>{
		setLimit(limit+8)
	}

	return (
		<>
			<div  className = {styles.productsContainer}>
				<div className = {styles.grid}>
					{
						list.slice(0, limit).map(item=>(
							<ProductCard
								key = {item.id}
								data = {item}
								thumbnail = {thumbnailImage(item.thumb, images)}
								
								/>
							))
					}

					{(limit <= list.length) && 
						<div className = {styles.seemore}>
							<Button onClick = {handleSeeMoreClick} content = "See more" size = "L" type = "secondary" />
						</div>
					}
					
				</div>
			</div>
		</>
	)
}

export default ProductsContainer