import './navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logoraw.png'
import { BsSearch } from 'react-icons/bs'
import { GrMenu } from 'react-icons/gr'
import { useState } from 'react'
import Search from '../Search'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false)
  const [foldRespMenu, setFoldRespMenu] = useState(false)
  const navigate = useNavigate()

  const toggleSearchFunc = () => {
    setToggleSearch(!toggleSearch)
  }

  const foldRespMenuFunc = () => {
    setFoldRespMenu(!foldRespMenu)
  }

  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <>
    <nav className='navbar'>
        <ul className='nav-list'>
            <NavLink className='nav-item' to="/soppor">Soppor</NavLink>
            <NavLink className='nav-item' to="/sallader">Sallader</NavLink>
            <NavLink className='nav-item' to="/huvudratter">Huvudrätter</NavLink>
            <NavLink className='nav-item' to="/smoothies">Smoothies</NavLink>

            <NavLink className='nav-item' to="/">
                <img className='logo-image' src={Logo} alt="logo" onClick={() =>handleClickLogo()}/>
            </NavLink>
            
            <NavLink className='nav-item' to="/efterratter">Efterrätter</NavLink>
            <NavLink className='nav-item' to="/tillbehor">Tillbehör</NavLink>
            <NavLink className='nav-item' to="/drinkar">Drinkar</NavLink>
            <div className='nav-item' onClick={() => toggleSearchFunc()}><BsSearch/></div>
            {toggleSearch && <Search toggleSearchFunc={toggleSearchFunc} />}
        </ul>
           <div className='responsive-top-div'>
           <BsSearch className='responsive-magnifyer'/>
           <GrMenu className='hamburger-menu' onClick={() => foldRespMenuFunc()} />
           </div>
    </nav>
    <div className={foldRespMenu ? 'responsive-menu down': 'responsive-menu'}>
      <ul className='responsive-nav'>
            <NavLink className='responsive-item startsida' to="/" onClick={() =>foldRespMenuFunc()}>hem</NavLink>
            <NavLink className='responsive-item' to="/soppor" onClick={() =>foldRespMenuFunc()}>Soppor</NavLink>
            <NavLink className='responsive-item' to="/sallader" onClick={() =>foldRespMenuFunc()}>Sallader</NavLink>
            <NavLink className='responsive-item' to="/huvudratter" onClick={() =>foldRespMenuFunc()}>Huvudrätter</NavLink>
            <NavLink className='responsive-item' to="/smoothies" onClick={() =>foldRespMenuFunc()}>Smoothies</NavLink>
            <NavLink className='responsive-item' to="/efterratter" onClick={() =>foldRespMenuFunc()}>Efterrätter</NavLink>
            <NavLink className='responsive-item' to="/tillbehor" onClick={() =>foldRespMenuFunc()}>Tillbehör</NavLink>
            <NavLink className='responsive-item' to="/drinkar" onClick={() =>foldRespMenuFunc()}>Drinkar</NavLink>
      </ul>
     
    </div>
    </>
  ) 
}

export default Navbar