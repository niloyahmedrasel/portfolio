import React, { useEffect } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css';

const Skill = ({ skill }) => {
  const { title, weak, month,circle,percent} = skill;
  useEffect(()=>{
       AOS.init({ duration:1000 });
  },[])
  return (
    <div data-aos='fade-up'>
    <div className="h-[500px] w-[400px] shadow-2xl">
    <h1 className="text-center font-sans-serif font-bold text-3xl my-20">{title}</h1>
    <div className="grid place-items-center ">
    <h1 className="relative">{circle}
    <h1 className="absolute top-20 left-20 text-extrabold font-sans-serif text-3xl">{percent}</h1>
    <div className="flex flex-row  w-full lg:flex-row mt-10">
    <div className="text-center  font-sans-serif font-bold text-lg my-10">{weak}<br></br><span className=" text-slate-400">Last Weak</span></div>
    <div className="divider lg:divider-horizontal"></div> 
    <div className="text-center font-sans-serif font-bold text-lg my-10">{month}<br></br><span className=" text-slate-400">Last Month</span></div>
    </div>
    
    </h1>
    </div>
    
   

    </div>
    </div>
  );
};

export default Skill;
