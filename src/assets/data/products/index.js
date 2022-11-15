import {beverage,fruitAndVegestable,meatAndFish} from "./thumb/svgs"




export const 
	  FRUITANDVEGESTABLE = "FRUIT & VEGESTABLE",
	  FRUIT = "FRUIT",
	  VEGESTABLE = "VEGESTABLE",
	  MEATANDFISH = "MEAT & FISH",
	  FRESHFISH = "FRESH FISH",
	  MEAT = "MEAT",
	  BEVERAGE = "BEVERAGE",
	  COFFEE = "COFFEE",
	  ENERGYDRINKS = "ENERGYDRINKS"
	  // JUICE = "JUICE",
	  // FIZZYDRINKS = "FIZZYDRINKS",
	  // TEA = "TEA"




export const products = [
	{
		id : 1,
		category : FRUITANDVEGESTABLE,
		icon: <svg    xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 20.347 24.101"    fill="currentColor"  >    <g id="Grocery" transform="translate(-39.481 0.052)">      <path        id="Path_17386"        data-name="Path 17386"        d="M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z"        transform="translate(-294.289 -380.346)"        fill="currentColor"        stroke="currentColor"        strokeWidth={0.1}      />      <path        id="Path_17387"        data-name="Path 17387"        d="M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z"        transform="translate(-0.5)"        fill="currentColor"        stroke="currentColor"        strokeWidth={0.1}      /></g> </svg>,
		children: [
			{
				id : 2,
				category: FRUIT,
				items: [
					{	
						id : 3,
						title: "Apples",
						price: 2,
						saleOff: 20,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 28,
						thumb: "apple"
					},
					{	
						id : 61,
						title: "Watermelon",
						price: 2,
						saleOff: 20,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 18,
						thumb: "watermelon"
					}
					,
					{	
						id : 4,
						title: "Blue Berries",
						price: 3,
						saleOff: 0,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 58,
						thumb: "blueberries"

					},
					{	
						id : 5,
						title: "Clementines",
						price: 3,
						saleOff: 17,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 18,
						thumb: "clementines"
					},
					{	
						id : 8,
						title: "Mango",
						price: 2.5,
						saleOff: 0,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 23,
						thumb: "mangoes"
					},
					{	
						id : 9,
						title: "Pears",
						price: 4,
						saleOff: 13,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 11,
						thumb: "pears"
					},
					{	
						id : 10,
						title: "Cherry",
						price: 2,
						saleOff: 10,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 30,
						thumb: "cherries"
					},
					{	
						id : 11,
						title: "Strawberry",
						price: 10,
						saleOff: 20,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 42,
						thumb: "strawberry"
					}
				]
			},
			{
				id: 13,
				category: VEGESTABLE,
				items: [
					{	
						id : 14,
						title: "Mix Vegetable Platter",
						price: 2,
						saleOff: 20,
						weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 30,
						thumb: "mixVegestablePlatter"
					},
					{	
						id : 6,
						title: "Cucumber",
						price: 2.5,
						saleOff: 0,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 63,
						thumb: "cucumber"
					},
					{	
						id : 7,
						title: "Lime",
						price: 2,
						saleOff: 25,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 47,
						thumb: "lime"
					},
					{	
						id : 15,
						title: "Baby Spinach",
						price: 0.6,
						saleOff: 0,
						weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 52,
						thumb: "babySpinach"
					},
					{	
						id : 16,
						title: "Brussels Sprout",
						price: 5,
						saleOff: 40,
						weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 49,
						thumb:  "brusselsSprout"
					},
					{	
						id : 17,
						title: "Sweet Corn",
						price: 5,
						saleOff: 20,
						weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 42,
						thumb: "corn"
					},
					{	
						id : 18,
						title: "Green Beans",
						price: 5,
						saleOff: 20,
						weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 94,
						thumb:  "greenBeans"
					},
					{	
						id : 19,
						title: "Pepper",
						price: 6,
						saleOff: 17,
						weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 80,
						thumb: "peppers"
					},
					{	
						id : 20,
						title: "Peeled Baby Carrot",
						price: 2.5,
						saleOff: 12,
						weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 41,
						thumb: "peeledCarrots"
					},
					{	
						id : 21,
						title: "Celery Stick",
						price: 6,
						saleOff: 17,
						weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 44,
						thumb: "celeryStick"
					},
					{	
						id : 12,
						title: "Lemon",
						price: 1.5,
						saleOff: 20,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 8,
						thumb: "lemon"
 					},
					{	
						id : 22,
						title: "White Radish",
						price: 2.99,
						saleOff: 0,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 50,
						thumb:  "whiteRadish"
					},
					{	
						id : 23,
						title: "Root of Bomax",
						price: 2.49,
						saleOff: 0,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 78,
						thumb: "rootOfBomax"
					},
					{	
						id : 24,
						title: "Ginger",
						price: 1.59,
						saleOff: 25,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 48,
						thumb: "ginger"
					},
					{	
						id : 25,
						title: "Cherry Tomato",
						price: 2.00,
						saleOff: 0,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 10,
						thumb: "cherryTomato"
					},
					{	
						id : 26,
						title: "Parsley",
						price: 2.29,
						saleOff: 0,
						weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 12,
						thumb: "parsley"
					},
					{	
						id : 27,
						title: "Spinach",
						price: 2.99,
						saleOff: 17,
						weight: 2,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 18,
						thumb: "spinach"
					},
						
				]
			}
		]
	},
	{
		id : 28,
		category: MEATANDFISH,
		icon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.003 24' fill='currentColor' ><g id='Meat_Fish' data-name='Meat &amp; Fish' transform='translate(-100.274 -126.786)'><path id='Path_17433' data-name='Path 17433' d='M152.165,147.238c-.186,0-.366-.005-.542-.016a.465.465,0,0,1-.27-.108c-.525-.442-1.049-.911-1.546-1.38-.508-.508-.952-1.036-1.383-1.546a.545.545,0,0,1-.124-.289c-.234-3.811,2.129-10.143,4.769-12.784a9.528,9.528,0,0,1,1.8-1.453.463.463,0,1,1,.5.781,8.639,8.639,0,0,0-1.629,1.318c-2.42,2.42-4.661,8.375-4.515,11.929.4.474.8.944,1.236,1.378.439.414.907.835,1.379,1.236,3.5.153,9.508-2.1,11.919-4.506a8.691,8.691,0,0,0,1.328-1.638.463.463,0,1,1,.781.5,9.625,9.625,0,0,1-1.462,1.8C161.888,144.973,156.01,147.238,152.165,147.238Z' transform='translate(-42.009 -2.453)' fill='currentColor'></path><path id='Path_17434' data-name='Path 17434' d='M105.065,249.978a2.457,2.457,0,0,1-1.745-.729,2.547,2.547,0,0,1-.707-1.61,2.454,2.454,0,0,1-2.338-2.483,2.479,2.479,0,0,1,3.513-2.21l2.637-2.663a.464.464,0,0,1,.659.653l-2.889,2.916a.465.465,0,0,1-.592.055,1.547,1.547,0,0,0-2.4,1.257,1.544,1.544,0,0,0,.457,1.114,1.572,1.572,0,0,0,1.365.416.463.463,0,0,1,.535.536,1.592,1.592,0,0,0,.425,1.374,1.54,1.54,0,0,0,2.355-1.963.464.464,0,0,1,.062-.583l2.916-2.888a.463.463,0,1,1,.652.658l-2.668,2.644a2.487,2.487,0,0,1-.491,2.778A2.454,2.454,0,0,1,105.065,249.978Z' transform='translate(0 -99.192)' fill='currentColor'></path><path id='Path_17435' data-name='Path 17435' d='M206.374,138.769a5.236,5.236,0,0,1-2-.475A14.609,14.609,0,0,1,200,135.177c-2.193-2.193-3.6-4.707-3.593-6.4a1.862,1.862,0,0,1,1.989-1.987h.018c1.7,0,4.2,1.408,6.385,3.593l0,0c2.629,2.655,4.592,6.308,3.05,7.848A2.011,2.011,0,0,1,206.374,138.769Zm-7.96-11.056H198.4a.948.948,0,0,0-1.067,1.066c-.008,1.439,1.327,3.747,3.322,5.743a13.669,13.669,0,0,0,4.084,2.92c1.138.483,2.054.532,2.455.133.814-.814-.239-3.7-3.054-6.541C202.153,129.045,199.854,127.713,198.414,127.713Z' transform='translate(-84.117 0)' fill='currentColor'></path><path id='Path_17436' data-name='Path 17436' d='M216.843,148.223h0c-1.039,0-2.9-1.214-4.749-3.084-1.538-1.518-3.09-3.585-3.079-4.77a.963.963,0,0,1,.283-.715.95.95,0,0,1,.7-.266H210c1.187,0,3.243,1.544,4.76,3.081,1.868,1.845,3.079,3.707,3.082,4.746a.944.944,0,0,1-1,1.008Zm-6.811-7.916a.268.268,0,0,0-.1.017c-.133.33.7,2.069,2.815,4.161,2.27,2.3,3.912,2.933,4.181,2.8.115-.253-.521-1.895-2.816-4.159l0,0C212.174,141.163,210.54,140.306,210.032,140.306Z' transform='translate(-95.146 -11.027)' fill='currentColor'></path><path id='Path_17437' data-name='Path 17437' d='M181.251,168.174l-.83-.41a5.223,5.223,0,0,1,.391-.689.464.464,0,0,1,.755.539A4.148,4.148,0,0,0,181.251,168.174Z' transform='translate(-70.129 -35.084)' fill='currentColor'></path><path id='Path_17438' data-name='Path 17438' d='M164.789,189.173a.478.478,0,0,1-.095-.01.463.463,0,0,1-.359-.548,18.285,18.285,0,0,1,1.23-3.8.464.464,0,0,1,.845.381,17.358,17.358,0,0,0-1.168,3.611A.463.463,0,0,1,164.789,189.173Z' transform='translate(-56.046 -50.535)' fill='currentColor'></path><path id='Path_17439' data-name='Path 17439' d='M239.96,170.8a.463.463,0,0,1-.328-.136l-.382-.382a.463.463,0,0,1,.655-.655l.382.382a.464.464,0,0,1-.328.791Z' transform='translate(-121.487 -37.372)' fill='currentColor'></path></g></svg>,
		children: [
			{
				id : 29,
				category: FRESHFISH,
				items: [
					{	
						id : 30,
						title: "Signature Salmon",
						price: 4.95,
						saleOff: 0,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 20,
						thumb: "signatureSalmon"
					},
					{	
						id : 31,
						title: "Cod Fillet",
						price: 10,
						saleOff: 25,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 28,
						thumb: "codFillet"
					},
					{	
						id : 32,
						title: "Swordfish Fillet",
						price: 10,
						saleOff: 25,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 16,
						thumb: "swordfishFillet"
					},
					{	
						id : 33,
						title: "Halibut Fillet",
						price: 15,
						saleOff: 20,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 19,
						thumb: "halibutFillet"
					},
					{	
						id : 34,
						title: "Tilapia Fillet",
						price: 7.89,
						saleOff: 0,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 21,
						thumb: "tilapiaFillet"
					}		
				]
			},
			{
				id : 35,
				category: MEAT,
				items: [
					{	
						id : 36,
						title: "Fresh Beef",
						price: 6,
						saleOff: 0,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 40,
						thumb: "freshBeef"
					},
					{	
						id : 37,
						title: "Sliced Turkey Breast",
						price: 8.5,
						saleOff: 12,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 23,
						thumb: "slicedTurkeyBreast"
					},
					{	
						id : 38,
						title: "Chicken Thighs",
						price: 7.89,
						saleOff: 0,
	 					weight: 5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 10,
						thumb: "chickenThighs"
					},
					{	
						id : 39,
						title: "Chicken Breast",
						price: 9,
						saleOff: 0,
	 					weight: 5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 4,
						thumb: "chickenBreast"
					},
					{	
						id : 40,
						title: "Beef Steak",
						price: 7.89,
						saleOff: 0,
	 					weight: 5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 21,
						thumb: "beefSteak"
					},
					{	
						id : 41,
						title: "Duck Meat",
						price: 7.99,
						saleOff: 10,
	 					weight: 5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 21,
						thumb: "duckMeat"
					},
					{	
						id : 42,
						title: "Raw Duck Meat",
						price: 7.69,
						saleOff: 0,
	 					weight: 3,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 29,
						thumb: "rawDuckMeat"
					},
					{	
						id : 43,
						title: "Beef Patties",
						price: 2,
						saleOff: 10,
	 					weight: 0.8,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 31,
						thumb: "beefPatties"
					},
					{	
						id : 44,
						title: "Oxtail",
						price: 5.75,
						saleOff: 3,
	 					weight: 3,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 48,
						thumb: "oxtail"
					},
					{	
						id : 45,
						title: "Beef Tenderlion",
						price: 9.99,
						saleOff: 5,
	 					weight: 2,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 21,
						thumb: "beefTenderlion"
					},
					{	
						id : 46,
						title: "Rack of Lambs",
						price: 30,
						saleOff: 7,
	 					weight: 5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 12,
						thumb: "rackOfLambs"
					},
					{	
						id : 47,
						title: "Lamb Shoulder",
						price: 21.95,
						saleOff: 0,
	 					weight: 5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 9,
						thumb: "lambShoulder"
					}
				]
			}
		]	
	},
	{
		id : 48,
		category: BEVERAGE,
		icon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.569 26.099' ><path id='bevarage' d='M901.182,394.343v-.267c0-1.455,0-2.911,0-4.366,0-.192-.037-.279-.246-.333a7.179,7.179,0,0,1-5.405-7.48c.093-1.293.3-2.579.459-3.867q.247-2,.5-3.993a.536.536,0,0,1,.621-.544q5.626,0,11.252,0a.536.536,0,0,1,.614.552c.306,2.43.6,4.862.92,7.291a7.253,7.253,0,0,1-5.12,7.982c-.482.144-.483.144-.483.663q0,2.04,0,4.08v.27c.508.073,1,.13,1.5.219a7.565,7.565,0,0,1,2.734.93,2.92,2.92,0,0,1,.508.4,1.325,1.325,0,0,1,.01,2,3.705,3.705,0,0,1-1.341.82,12.018,12.018,0,0,1-3.443.721,16.444,16.444,0,0,1-5.062-.306,12.666,12.666,0,0,1-1.887-.633,2.91,2.91,0,0,1-.834-.562,1.323,1.323,0,0,1-.03-2.054,4.29,4.29,0,0,1,1.763-.958,12.137,12.137,0,0,1,2.667-.527C900.976,394.376,901.069,394.359,901.182,394.343Zm7.541-13.96c-.329.106-.636.19-.933.3a5.372,5.372,0,0,1-3.76.018c-.931-.323-1.869-.626-2.8-.937a4.011,4.011,0,0,0-2.269-.227c-.695.174-1.376.4-2.061.617a.231.231,0,0,0-.129.159,12.072,12.072,0,0,0-.171,2.765,6.182,6.182,0,0,0,8.7,4.938,6.035,6.035,0,0,0,3.624-5.24A10.427,10.427,0,0,0,908.723,380.383Zm-11.243-5.84-.56,4.5c.2-.061.359-.1.51-.159a5.867,5.867,0,0,1,4.451,0c.917.356,1.867.628,2.806.925a3.391,3.391,0,0,0,1.868.129c.644-.163,1.277-.372,1.909-.577.055-.018.108-.16.1-.237-.125-1.074-.262-2.147-.4-3.22q-.085-.677-.17-1.354Zm3.7,20.782c-.893.191-1.747.332-2.574.567a5.433,5.433,0,0,0-1.343.65c-.332.206-.326.45-.006.681a4.151,4.151,0,0,0,.97.535,12.9,12.9,0,0,0,4.672.683,12.466,12.466,0,0,0,4.433-.712,3.869,3.869,0,0,0,.776-.41c.457-.312.453-.555.006-.869a3.233,3.233,0,0,0-.517-.294,10.12,10.12,0,0,0-3.3-.76c0,.471,0,.928,0,1.384,0,.429-.192.623-.615.624q-.948,0-1.9,0a.531.531,0,0,1-.607-.6C901.18,396.347,901.182,395.889,901.182,395.326Zm1.058-5.713v6.734h1v-6.734Z' transform='translate(-895.457 -373.443)' fill='currentColor' stroke='#fff' strokeWidth='0.1'></path></svg>,
		children: [
			{
				id : 49,
				category: COFFEE,
				items: [
					{	
						id : 50,
						title: "Javarama Cafe Coffee",
						price: 4.00,
						saleOff: 25,
	 					weight: 2,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 50,
						thumb: "javaramaCafeCoffee"
					},
					{	
						id : 51,
						title: "Teeccino Herbal Coffee Alternative",
						price: 5.00,
						saleOff: 0,
	 					weight: 1,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 51,
						thumb: "teeccinoHerbalCoffeeAlternative"
					},
					{	
						id : 52,
						title: "Starbucks House Blend",
						price: 4.00,
						saleOff: 0,
	 					weight: 2,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 102,
						thumb: "starbucksHouseBlend"
					},
					{	
						id : 53,
						title: "Starbucks Vanilla Latte",
						price: 4.00,
						saleOff: 0,
	 					weight: 2,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 34,
						thumb: "starbucksVanillaLatte"
					},
					{	
						id : 54,
						title: "Peet Coffee Decaf Major Dickason Blend",
						price: 2.5,
						saleOff: 0,
	 					weight: 2,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 99,
						thumb: "peetCoffeeDecafMajorDickasonBlend"
					},
					{	
						id : 55,
						title: "Nescafe Clasico Instant Coffee",
						price: 1,
						saleOff: 30,
	 					weight: 0.5,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 50,
						thumb: "nescafeClasicoInstantCoffee"
					}

				]
			},
			{
				id: 56,
				category: ENERGYDRINKS,
				items: [
					{	
						id : 57,
						title: "Red Bull",
						price: 2.5,
						saleOff: 20,
	 					weight: "200ml",
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 139,
						thumb: "redBull"
					},
					{	
						id : 58,
						title: "Dragon Energy",
						price: 2,
						saleOff: 0,
	 					weight: "250ml",
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 150,
						thumb: "dragonEnergy"
					},
					{	
						id : 59,
						title: "Monster Energy",
						price: 2.00,
						saleOff: 20,
	 					weight: "500ml",
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 50,
						thumb: "monsterEnergy"
					},
					{	
						id : 60,
						title: "Quake Energy",
						price: 1.5,
						saleOff: 0,
	 					weight: "250ml",
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						availability: 211,
						thumb: "quakeEnergy"
					}
				]
			}
		]
	}]
	  
