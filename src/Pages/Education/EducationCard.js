import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const EducationCard = ({card}) => {
    const {logo,title,subtitle,year,information}=card
    
    useEffect(()=>{
        AOS.init(
            {duration:1000}
        )
    },[])
    return (
        <div id='education' data-aos="fade-up" className='mt-20'>
           <h1 className='text-blue-500 text-2xl mt-5 font-sans-serif font-bold'> <img className='w-10 h-10 mx-auto' src={logo} alt=''></img>{year}</h1>
            <p className=' text-5xl mt-5 font-sans-serif font-bold '>{title}</p>
            <h2 className='text-3xl mt-5 font-sans-serif font-semibold'>{subtitle}</h2>
            <h3 className='text-2xl mt-5  font-sans-serif font-semibold text-slate-500'>{information}</h3>
            <div className="divider "></div> 
        </div>
    );
};

export default EducationCard;