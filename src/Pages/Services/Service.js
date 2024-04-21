import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../Projects/Project.css'

const Service = ({ service }) => {
  const { logo, title, info } = service;
  useEffect(()=>{
    AOS.init({duration: 1000})
},[])
  return (
    <div id='services' data-aos='fade-up' className="card w-96 text-center shadow-2xl ">

      <figure>
        <img className="w-40 h-40"
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold font-sans-serif text-blue-500 text-3xl mt-10">{title}</h2>
        <p className="font-sans-serif text-slate-700 text-xl mt-5">{info}</p>
        
        
       
      </div>
      
    </div>
  );
};

export default Service;
