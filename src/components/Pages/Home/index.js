import styles from "./Home.module.scss"

import Search from "../../Layout/Header/Search"

function Home(){
	return(
		<div className = {styles.home}>
			<div className = {styles.content}>
				<h2>Groceries Delivered in 90 Minute</h2>
				<h5>Get your healthy foods & snacks delivered at your doorsteps all day everyday</h5>
			</div>

			<Search place = "HOMEPAGE" hide = {false} size = "L"/>
		</div>
	)
}

export default Home