import './navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logoraw.png'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import Search from '../Search'


const Navbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false)

  const toggleSearchFunc = () => {
    setToggleSearch(!toggleSearch)
  }

  return (
    <nav className='navbar'>
        <ul className='nav-list'>
            <NavLink className='nav-item' to="/soppor">Soppor</NavLink>
            <NavLink className='nav-item' to="/sallader">Sallader</NavLink>
            <NavLink className='nav-item' to="/huvudrätter">Huvudrätter</NavLink>
            <NavLink className='nav-item' to="/smoothies">Smoothies</NavLink>

            <NavLink className='nav-item' to="/">
                <img className='logo-image' src={Logo} alt="logo" />
            </NavLink>
            
            <NavLink className='nav-item' to="/efterrätter">Efterrätter</NavLink>
            <NavLink className='nav-item' to="/tillbehor">Tillbehör</NavLink>
            <NavLink className='nav-item' to="/drinkar">Drinkar</NavLink>
            <div className='nav-item' onClick={() => toggleSearchFunc()}><BsSearch/></div>
            {toggleSearch && <Search toggleSearchFunc={toggleSearchFunc} />}
        </ul>
           
    </nav>
  ) 
}

export default Navbar