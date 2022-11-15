import styles from './Shops.module.scss'

import furniture from '../../../assets/images/furniture.png'
import clothing from '../../../assets/images/clothing.png'
import decoration from '../../../assets/images/decoration.png'
import makeup from '../../../assets/images/makeup.png'
import photographer from '../../../assets/images/furniture.png'

function Shop({imgSrc, name, location}){
	return(
		<div className = {styles.shop}> 
			<div className = {styles.img}>
				<img src = {imgSrc}/>
			</div>
			<div className  = {styles.shopDetails}>
				<h2>{name}</h2>
				<p><i className="fa-solid fa-location-dot"/>{location}</p>
			</div>
		</div>
	)
}

const Shops = ()=>{

	return(
		<div className  = {styles.wrapper}>
			<div className= {styles.title}>
				<h2>All Shops</h2>
			</div>
			<div className= {styles.grid}>
				<Shop imgSrc = {furniture} name = 'Tunx Furniture' location  = "226 Le Trong Tan Street, Hanoi, Vietnam" />
				<Shop imgSrc = {clothing} name = 'Tunx Clothing Store' location  = "34B Duong Noi, Ha Dong, Hanoi, Vietnam" />
				<Shop imgSrc = {decoration} name = 'Tunx Decoration' location  = "122 Tran Khat Chan, Hai Ba Trung Street, Hanoi, Vietnam" />
				<Shop imgSrc = {makeup} name = 'Tunx Makeup Artist' location  = "3 Nguyen Xien, Thanh Xuan, Hanoi, Vietnam" />
				<Shop imgSrc = {photographer} name = 'Tunx photographer' location  = "21 Thanh Nien Street, Ba Dinh, Hanoi, Vietnam" />
			</div>
		</div>
	)
}

export default Shops