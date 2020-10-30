import React from 'react';

export default function Header () {
return (
<header className='header'>
    <div className='header__navigation'>
    <p className='header__navigation-title'>Navigation</p>
        <div className='header__navigation-links'>
<a className='header__navigation-link' href='#'>About</a>
<a className='header__navigation-link' href='#'>Projects</a>
<a className='header__navigation-link' href='#'>Blog</a>
<a className='header__navigation-link' href='#'>Contacts</a>
        </div>
    </div>
</header>
)
}