import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Soupes from './Soupes'
import Navbar from '../components/navbar/Navbar'
import Recipe from './Recipe'
import Footer from '../components/footer/Footer'
import SearchResults from './SearchResults'
import Salads from './Salads'
import Smoothies from './Smoothies'
import Tillbehor from './Tillbehor'

const Pages= () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/soppor" element={<Soupes/>} />
        <Route path="/sallader" element={<Salads/>} />
        <Route path="/recipe" element={<Recipe/>} />
        <Route path="/smoothies" element={<Smoothies/>} />
        <Route path="/tillbehor" element={<Tillbehor/>} />
        <Route path="/searchresults/:searchword" element={<SearchResults/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default Pages