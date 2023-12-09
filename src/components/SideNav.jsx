import React from 'react'
import logo from '../assets/logo.svg'
import logoDark from '../assets/logo-dark.svg'

import links from '../data/links'
import LinkCard from '../components/LinkCard'
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react'

function SideNav() {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useState(getCurrentTheme());
    const addBodyClass = className => document.body.classList.add(className);
    const removeBodyClass = className => document.body.classList.remove(className);

    useEffect(() => {
        if (isDark) addBodyClass('dark')
        else removeBodyClass('dark')
    }, [isDark])

    return (
        <nav className='side-nav'>
            <img className='side-nav__logo' src={isDark ? logoDark : logo}/>
            <p className='side-nav__intro'>I’m a multidisciplinary developer at NYU. I love creating user-centered designs and bringing them to life with code!</p>
            {links.slice(0, 3).map((link, i) => {
            return (
                <LinkCard 
                    key={i}
                    image={link.image}
                    title={link.title}
                    description={link.description}
                    link={link.link}
                    external={false}
                />
            )
            })}
            <p className='side-nav__section'>External Links</p>
            {links.slice(3, 8).map((link, i) => {
            return (
                <LinkCard 
                    key={i}
                    image={link.image}
                    title={link.title}
                    description={link.description}
                    link={link.link}
                    external={true}
                />
            )
            })}
            <div className='side-nav__theme' onClick={() => setIsDark(!isDark)}>
                {isDark ? <LightModeOutlined /> : <DarkModeOutlined/>}
            </div>
        </nav>
    )
}

export default SideNav