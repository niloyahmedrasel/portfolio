
import React from "react";
import {  useTypewriter,Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const HomeBanner = () => {
    const [text] = useTypewriter({
        words: ['A Web Developer', '& Web Designer'],
        loop: 0,
        
    })
    const element = <FontAwesomeIcon icon={faArrowDown} />
   
    
  return (
    <div id='home' className="text-center">
      <h1 className="text-blue-500 text-3xl font-bold mt-60 font-[sans-serif]">
        HEY!! I AM
      </h1>
      <h2 className="text-7xl font-bold text-black mt-5">MD Rasel</h2>
      <h1 className="text-5xl font-bold text-blue-500 mt-5">
        <span>{text}</span>
        <Cursor cursorColor="black"></Cursor>

      </h1>
      <h2 className="mt-20 font-bold text-5xl text-blue-500">{element}</h2>
    </div>
  );
};

export default HomeBanner;
