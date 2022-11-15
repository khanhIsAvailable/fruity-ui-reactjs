import styles from "./Banners.module.scss"
import Banner from "../../Banner"
import {useRef,useEffect, useState} from "react"
import gsap from "gsap"

import deliveryBanner from "../../../assets/images/banner/deliveryBanner.png"
import cashOnDeliveryBanner from "../../../assets/images/banner/cashOnDeliveryBanner.png"
import couponSavingBanner from "../../../assets/images/banner/couponSavingBanner.png"
import giftVoucherBanner from "../../../assets/images/banner/giftVoucherBanner.png"


const maxOfBanners = 5 -3;
const NEXT ="NEXT", PREVIOUS = "PREVIOUS"

function Banners(){
	const [bannersStatus, setBannersStatus] = useState({	
															index: 0,
															next: true,
															previous: false
														})
	const previousButtonRef = useRef()
	const nextButtonRef = useRef()
	const layerRef = useRef()

	function simplify(type){
		let tempObj;
		if(type === NEXT) tempObj = {index: bannersStatus.index +1, next: true, previous: true}
		else if(type === PREVIOUS) tempObj = {index: bannersStatus.index -1, next: true, previous: true}
		if(tempObj.index === 0) tempObj = {...tempObj, next: true, previous: false }
		else if(tempObj.index === maxOfBanners) tempObj = {...tempObj, next: false , previous : true}
		setBannersStatus(tempObj)
	}

	useEffect(()=>{
		previousButtonRef.current.classList.toggle(styles.hide, bannersStatus.previous === false)
		nextButtonRef.current.classList.toggle(styles.hide, bannersStatus.next === false)
	},[bannersStatus])

	const handleClickPrevious = () => {
		gsap.to(layerRef.current, {x: "+=435" , duration : 0.3})
		simplify(PREVIOUS)
	}

	const handleClickNext = () => {
		gsap.to(layerRef.current, {x: "-=435" , duration : 0.3})
		simplify(NEXT)
	}

	return(
		<div  className = {styles.bannersContainer}>

			<div className = {styles.layer} ref = {layerRef} >
				<Banner color = "blue" title = "Express Delivery" description = "With selected items" buttonContent = "Save Now" href = "\offers" img = {deliveryBanner} />
				<Banner color = "green" title = "Cash On Delivery" description = "With selected items" buttonContent = "Save Now" href = "\offers" img = {cashOnDeliveryBanner} />
				<Banner color = "pink" title = "Gift Voucher" description = "With personal care items" buttonContent = "Shop Coupons" href = "\offers" img = {giftVoucherBanner} />
				<Banner color = "orange" title = "Coupon Saving" description = "Up to 40% off everyday essentials" buttonContent = "Shop Coupons" href = "\offers" img = {couponSavingBanner} />
				<Banner color = "green" title = "Cash On Delivery" description = "With selected items" buttonContent = "Save Now" href = "\offers" img = {cashOnDeliveryBanner} />
			</div>
				
			<button ref = {previousButtonRef} onClick = {handleClickPrevious} className = {`${styles.previous}`}><i className="fa-solid fa-angle-left"></i></button>
			<button ref = {nextButtonRef} onClick = {handleClickNext} className = {`${styles.next}`}><i className="fa-solid fa-angle-right"></i></button>			

		</div>
	)

}

export default Banners