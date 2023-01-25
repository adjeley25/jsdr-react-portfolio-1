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
    
    
    <div className='about'> <div className='line'></div>
    <p class="text-center">I'm a front-end developer focused on creating clean, responsive web designs. 
     based in MIlton Keynes, United Kingdom. <br/>
     I enjoy helping others solve thier technical problems, i also try to educate my self with new software and programing languages.
     <br/>
     </p>
    
     <h1> 
    <AnimatedLetters strArray={"Designing".split('')} starIdx={1}/></h1>
  <div className='line'></div>
    <p class="text-center">I am able to work with Adobe products like Lightroom, Adobe Spark and still learing how to use Adobe Photoshop. I do this as a hobby to help my friends out when they need it.
    <br/>
     </p>
   
     <h1> 
     <AnimatedLetters strArray={"Languages".split('')} starIdx={1}/></h1>
     <div className='line'></div>

     <p class="text-center"> HTML5, CSS3, JAVASCRIPT, REACT, NPM, SASS, NPM, SQL.
     <br/>
     </p>
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
               <FontAwesomeIcon icon={faSass} color="#ab0524" />
               </a>
            </li>
              </ul> 
              </div>
   
      
    
    
    <Loader type="ball-scale" color='#fc4cd3' width={500} />
  
         
        

              <div className="main-img">
   </div> 
  
  
  <div class="main-shadow"></div>

</div>
          </div>  
         
 
  </>
  
   
    
    );
}

export default About;