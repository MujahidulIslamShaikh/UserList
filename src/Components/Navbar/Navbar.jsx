import React from 'react'
import logo from '../../Assets/Images/radiance logo.jpg'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={logo} width={50} alt="Logo_img" className=''/>
                <i class='bx bx-menu-alt-right fs-1 '></i>
            </div>
        </div>
    )
}

export default Navbar