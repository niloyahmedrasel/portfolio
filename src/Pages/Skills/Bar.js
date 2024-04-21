import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

const Bar = ({ bar }) => {
    useEffect(()=>{
        AOS.init({duration: 500})
    },[])
  const { title, bars, percent } = bar;
  return (
    <label data-aos='fade-up' className="form-control w-3/4 my-5">
      <div className="label">
        <span className="label-text font-sans-serif font-bold text-2xl">{title}</span>
        <span className="label-text-alt font-sans-serif font-bold text-2xl">{percent}</span>
      </div>
     <h1>{bars}</h1>
    </label>
  );
};

export default Bar;
