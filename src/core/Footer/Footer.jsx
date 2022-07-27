import React from 'react';
import './Footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    const href = 'https://github.com/alvaroFGG/TheGameAwards_React';
  return (
    <footer>

    <div className="footercontent">
        <div className="footercontent__social">
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <GitHubIcon onClick={() => window.open('https://github.com/alvaroFGG/TheGameAwards_React')} className='github'/>
        </div>
        <div className="footercontent__members">
            <h3>Developers:</h3>
            <p>Javier Martínez</p>
            <p>Javier Esclapes AKA: Jay</p>
            <p>Álvaro Fuentenebro</p>
            <p>Manuela Gutierrez</p>
        </div>
        <div className="footercontent__copyright">
            <p>© 2022 React Game Awards</p>
        </div>
    </div>
</footer>
  )
}

export default Footer