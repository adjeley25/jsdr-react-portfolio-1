import './index.scss';
import React from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact,faCss3, faSass, faJs,faNodeJs} from '@fortawesome/free-brands-svg-icons';
const About = () => {

    return (
    <>
        <div>
    <h1> 
    <AnimatedLetters strArray={"About Me".split('')} starIdx={1}/></h1>
    <div className='about'>
    <p class="text-center">I'm a front-end developer focused on creating clean, responsive web designs. 
    I'm currently enrolled on Javascript development programe with General Assembly, I also have a higher Degree Cerificate in Software Engenieering from University of Northampton. 
    a have degree in Business Administartion and  Diploma in Health Science. I am able to work with HTML5,CSS3,SASS,JAVASCRIPT,REACT, AND NODEJS</p>
    
    
    
    <Loader type="ball-scale" color='#fc4cd3' width={500} />
  
         
         <div class='icons'>
                <ul>
                <li>
               <a>
               <FontAwesomeIcon icon={faHtml5} color="#ab0524" />
               </a>
            </li>
          
            <li>
               <a >
               <FontAwesomeIcon icon={faCss3} color="#ab0524" />
               </a>
            </li>
            <li>
               <a>
               <FontAwesomeIcon icon={faJs} color="#ab0524" />
               </a>
            </li>
            <li>
               <a>
               <FontAwesomeIcon icon={faReact} color="#ab0524" />
               </a>
            </li>
            <li>
               <a>
               <FontAwesomeIcon icon={faNodeJs} color="#ab0524" />
               </a>
            </li>

            <li>
               <a>
               <FontAwesomeIcon icon={faSass} color="#ab0524" />
               </a>
            </li>
              </ul> 
              </div>

              <div className="main-img">
   </div> 
  
  
  <div class="main-shadow"></div>

</div>
          </div>  
         
 
  </>
  
   
    
    );
}

export default About;