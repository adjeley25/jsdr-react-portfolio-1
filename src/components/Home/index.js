import './index.scss';
import React from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
const Home = () => {

    return (

       
        <div className='home-page'>
    <h1>
    <AnimatedLetters strArray={"HI, My Name Is Naa".split('')} starIdx={1}/>
    <br/></h1>
  
    <div className='home-text'>
   <p class="home-text">A FRONT END DEVELOPER</p>

    
    <Loader type="ball-scale" color='#fc4cd3' width={500} />
 
    
    <div className="container">
	<div class="home-img">
      <img src="https://res.cloudinary.com/dx7hzye86/image/upload/v1671199116/F656175F-A8A9-46C8-A208-EC4F57C3EA15_avtzer.jpg" >
</img>




    </div> </div>   
    <div class="main-shadow">
  
  </div>
    </div>
    </div>
 

    );
}



export default Home;