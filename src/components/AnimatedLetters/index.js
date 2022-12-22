import './index.scss';
import React from 'react';

const AnimatedLetters = ({ strArray, startIdx }) => {
  return (
  <span>
    {
        strArray.map( (char, i) => {
        return(
            <span className={`text-animate idx-${i+startIdx}`} >{char}</span>
        );
       } )
    }
  </span>
  );
}

export default AnimatedLetters;