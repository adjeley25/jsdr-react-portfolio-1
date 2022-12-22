import './index.scss';
import React, { useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useState} from 'react';

import {dbRef} from '../../firebase';
import {getDoc, getDocs} from 'firebase/firestore';


const Portfolio = () => {
 const [portfolio, setPortfolio]= useState([]);

 useEffect( ( )=> {
 getPortfolio();
}, []);

const getPortfolio = async()=> {
    const querySnapshot =await getDocs(dbRef);
    console.log (querySnapshot);
    setPortfolio(querySnapshot.docs.map( (doc) => doc.data()))
    }


 
    const renderPortfolio= ( portfolio)=> {
        return(
   <div className="portfolio-content">
    {
portfolio.map( (port,idx) => {
return( <div className="portfolio-item" key={`port-${idx}`} style={{animationDelay: `${idx* .05}s`}}>
            <img src={port.imageURL} alt={port.itemName}  />     
            <h3>{port.itemName}</h3> 
            <p>{port.itemDescription}</p>
            <button onClick={ ()=> window.open(port.itemURL)}>Explore <span>&rarr;</span></button>
            
               </div>
               
)
})

    }
   </div>
        );
    }



    return (
        <div>
   <h1><AnimatedLetters strArray={"My Portfolio".split('')} starIdx={1}/></h1>
            { renderPortfolio (portfolio)}

    <Loader type="ball-scale" color='#fc4cd3' width={500} />
    </div>
    );
}

export default Portfolio;