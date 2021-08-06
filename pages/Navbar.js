import React from 'react'
import logo from '../Images/anime-logo.png'
import '../css/navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { sidebar, toggleSidebar } = useGlobalContext()
  return (
    <section>
      <nav>
        <Link to='/'>
          <div className='nav-logo'>
            <img src={logo} alt='anime-logo' />
          </div>
        </Link>
        <div className='nav-list'>
          <ul>
            <li>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav-button' onClick={toggleSidebar}>
          {sidebar ? (
            <FaWindowClose className='btn-icon' />
          ) : (
            <FaBars className='btn-icon' />
          )}
        </div>
      </nav>
    </section>
  )
}

export default Navbar
