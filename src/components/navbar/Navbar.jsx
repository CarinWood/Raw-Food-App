import './navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logoraw.png'
import { BsSearch } from 'react-icons/bs'
import { GrMenu } from 'react-icons/gr'
import { useState } from 'react'
import Search from '../Search'


const Navbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false)

  const toggleSearchFunc = () => {
    setToggleSearch(!toggleSearch)
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
                <img className='logo-image' src={Logo} alt="logo" />
            </NavLink>
            
            <NavLink className='nav-item' to="/efterratter">Efterrätter</NavLink>
            <NavLink className='nav-item' to="/tillbehor">Tillbehör</NavLink>
            <NavLink className='nav-item' to="/drinkar">Drinkar</NavLink>
            <div className='nav-item' onClick={() => toggleSearchFunc()}><BsSearch/></div>
            {toggleSearch && <Search toggleSearchFunc={toggleSearchFunc} />}
        </ul>
           <GrMenu className='hamburger-menu' />
    </nav>
    <div className='responsive-menu'>
      <ul className='responsive-nav'>
            <NavLink className='responsive-item' to="/soppor">Soppor</NavLink>
            <NavLink className='responsive-item' to="/sallader">Sallader</NavLink>
            <NavLink className='responsive-item' to="/huvudratter">Huvudrätter</NavLink>
            <NavLink className='responsive-item' to="/smoothies">Smoothies</NavLink>
            <NavLink className='responsive-item' to="/efterratter">Efterrätter</NavLink>
            <NavLink className='responsive-item' to="/tillbehor">Tillbehör</NavLink>
            <NavLink className='responsive-item' to="/drinkar">Drinkar</NavLink>
      </ul>
    </div>
    </>
  ) 
}

export default Navbar