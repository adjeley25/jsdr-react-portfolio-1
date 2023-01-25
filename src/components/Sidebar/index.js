import './index.scss';
import React from 'react';
import NavLogo from  '../../assets/images/nav-logo.jpg';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser,faEnvelope, faImage,faSignIn, faToggleOn, faSliders, faHotdog } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter,faCodepen, faGithub} from '@fortawesome/free-brands-svg-icons';
 

const Sidebar =() => {
    return ( 
       <div className='nav-bar'>
            <Link className="logo"to="/">
                 <img src={NavLogo} alt="JSDR"/>
        </Link>
        <nav>
            <NavLink exact= "true" activeclassname="active" to="/">
               <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
            </NavLink> 

            <NavLink exact= "true" activeclassname="active" to="/about" className="about-link"> 
               <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
            </NavLink> 

            <NavLink exact= "true" activeclassname="active" to="/portfolio" className="portfolio-link"> 
               <FontAwesomeIcon icon={faImage} color="#4d4d4d" />
            </NavLink> 

            <NavLink exact= "true" activeclassname="active" to="/contact"  className="contact-link">
               <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
            </NavLink> 

            <NavLink exact= "true" activeclassname="active" to="/dashboard"  className="dashboard-link">
               <FontAwesomeIcon icon={faSignIn} color="#4d4d4d" />
            </NavLink> 

          </nav>
          <ul>
            <li>
               <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/naa-adjeley-adjetey-292716195/">
               <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
               </a>
            </li>

            <li>
               <a target="_blank" rel="noreferrer" href="https://twitter.com/naa_adjetey">
               <FontAwesomeIcon icon={faTwitter} color="#4d4d4d" />
               </a>
            </li>

            <li>
               <a target="_blank" rel="noreferrer" href="https://github.com/adjeley25">
               <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
               </a>
            </li>

            <li>
               <a target="_blank" rel="noreferrer" href="https://codepen.io/adjeley25">
               <FontAwesomeIcon icon={faCodepen} color="#4d4d4d" />
               </a>
            </li>

          </ul>
       </div>
    );
 }

 export default  Sidebar;