import React from 'react'
import './header.css'
import userImg from '../images/user.jpg';

function Header() {
  return (
    <header>
        <a href="#" className="menu">
            <i class="bi bi-sliders"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
                <i class="bi bi-heart-fill"></i>
                <span className="like">0</span>
            </a>
            <a href="#" className="icon">
                <i class="bi bi-bag-fill"></i>
                <span className="bag">0</span>
            </a>
            <div className="avatar">
                <a href='#'>
                    <img src={userImg} alt='User Image'/>
                </a>
                <div className='user'>
                    <span>C. Ronaldo</span>
                    <a href='#'>View Profile</a>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header
