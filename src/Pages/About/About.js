import React, { useEffect } from 'react';
import profile from '../../assets/profile5.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CV from '../../assets/resume2.pdf'


const About = () => {
    useEffect(()=>{
        AOS.init({duration: 500})
    },[])
    const pdfPath = CV
       
    const buttonHandler =()=>{
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = 'document.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    
    return (
        <div id='about' className="hero min-h-screen mt-10 ">
        <div className="hero-content flex-col lg:flex-row h-3/4 w-full ">
          <img data-aos='fade-right' src={profile} alt='' className="w-full h-full rounded-lg shadow-2xl bg-[#999999] mt-40" />
          <div data-aos='fade-left' className='w-full mx-10 '>

            <h1  className="text-5xl font-bold font-sans-serif text-blue-500 mt-40">About Me</h1>
            <p className='py-6 text-2xl text-slate-500 font-sans-serif'>Here are some personal informations about me</p>
            <div className="grid grid-cols-2 gap-y-4">
            <p className='text-black text-xl font-sans-serif tracking-wide font-bold'>Name:</p>
            <p className=' text-xl font-sans-serif tracking-wide text-slate-500'>Rasel</p>
            <p className='text-black text-xl font-sans-serif tracking-wide font-bold'>Date of birth:</p>
            <p className=' text-xl font-sans-serif tracking-wide text-slate-500'>17 may 2000</p>
            <p className='text-black text-xl font-sans-serif tracking-wide font-bold'>Address:</p>
            <p className=' text-xl font-sans-serif tracking-wide text-slate-500'>Uttara Dhaka</p>
            <p className='text-black text-xl font-sans-serif tracking-wide font-bold'>Email:</p>
            <p className=' text-xl font-sans-serif tracking-wide text-slate-500'>niloyahmedrasel24@gmail.com</p>
            <p className='text-black text-xl font-sans-serif tracking-wide font-bold'>Phone:</p>
            <p className=' text-xl font-sans-serif tracking-wide text-slate-500'>01300318906</p>
          </div>
            <button onClick={buttonHandler}  className='btn bg-blue-500 mt-20 text-xl font-bold rounded text-white font-sans-serif'>Download Resume</button>
          </div>
        </div>
      </div>
    );
};

export default About;