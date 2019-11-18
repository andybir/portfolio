import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    return (
        <div className='footer'>
            <p><a href='https://www.linkedin.com/in/andrewbirosak/' rel="noopener noreferrer" target='_blank'><LinkedInIcon>LinkedIn</LinkedInIcon></a></p>
            <p><a href='https://github.com/andybir' rel="noopener noreferrer" target='_blank'><GitHubIcon>GitHub</GitHubIcon></a></p>
            <p><a href='mailto:andy.birosak@gmail.com' rel="noopener noreferrer" target='_blank'><EmailIcon>Gmail</EmailIcon></a></p>
        </div>
    )
}

export default Footer