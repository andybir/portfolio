import React from 'react'
import headshot from '../Images/AB-headshot.JPG'
import headshotCloseup from '../Images/AB-headshot-closeup.jpeg'

function Nav () {
    return (
        <div className='nav'>
            {/* <p className='nav-links-left about'>About</p> */}
                {/* <p className='nav-links-left projects'>Projects</p> */}
            <h1 className='title'>Andy Birosak</h1>
            <img className='headshot' src={headshotCloseup} alt='andy-birosak-headshot' />
            {/* <div className='menu'> */}
                
                {/* <p className='nav-links-right'>Skills</p> */}
                {/* <p className='nav-links-right'>Contact</p> */}
            {/* </div> */}
        </div>
    )
}

export default Nav