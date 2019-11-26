import React from 'react'

function Nav () {
    return (
        <div className='nav'>
            <p className='nav-links-left'>About</p>
                <p className='nav-links-left'>Projects</p>
            <h1 className='title'>Andy Birosak</h1>
            {/* <div className='menu'> */}
                
                <p className='nav-links-right'>Skills</p>
                <p className='nav-links-right'>Contact</p>
            {/* </div> */}
        </div>
    )
}

export default Nav