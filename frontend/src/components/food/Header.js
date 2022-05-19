import React from 'react';
import './style.css'

const Header = () => {
  return (
    <div className='max-width header'>
        {/* <img src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' className='headerLogo' /> */}
        <div className='search-container'>
            <input placeholder='Search food Items' className='search-container'/>
        </div>
    </div>
    
  )
};

export default Header;
