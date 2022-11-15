import styles from "./Banner.module.scss"
import Button from "../Button"

function Banner({title, description, buttonContent, onClick, href, img, color}){
	return(
		<div className ={`${styles.banner} ${styles[color]}`}>
			<div className={styles.bannerContentContainer}>
				<div className = {styles.bannerContent}>
					<h2 className ={styles.title}>{title}</h2>
					<span className ={styles.description}>{description}</span>					
				</div>
				<Button onClick =  {onClick} size = "M" type = "secondary"  content = {buttonContent} href = {href}/>
			</div>
			<img src = {img} alt = {title}/>
		</div>
	)
}


export default Banner