import { Routes , Route} from 'react-router-dom'

import Layout from "./components/Layout"
import Home from "./components/Pages/Home"
import Banners from "./components/Pages/Banners"
import Products from "./components/Pages/Products"
import FAQ from "./components/Pages/FAQ"
import Contact from "./components/Pages/Contact"
import Offers from "./components/Pages/Offers"
import Shops from "./components/Pages/Shops"


function App(){
  return (
    <Layout>  
      <Routes>
        <Route path = "/" element = {<><Home/><Banners/><Products/></>} />
        <Route path = '/Offers' element = {<Offers/>}/>
        <Route path = '/FAQ' element = {<FAQ/>}/>
        <Route path = '/Contact' element = {<Contact/>}/>
        <Route path = '/Shops' element = {<Shops/>}/>
      </Routes>
    </Layout>      
    )
}

export default App