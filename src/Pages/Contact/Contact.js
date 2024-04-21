import React from 'react';
import profile from '../../assets/profile5.png'

const Contact = () =>  {
    return (
        <div id='contact' className="hero min-h-screen mt-10 ">
        <div className="hero-content flex-col lg:flex-row h-3/4 w-full ">
          <img data-aos='fade-right' src={profile} alt='' className="w-full h-full rounded-lg shadow-2xl bg-[#999999] mt-40" />
          <div data-aos='fade-left' className='w-full mx-10 '>

            <h1  className="text-5xl font-bold font-sans-serif text-blue-500 mt-40">Contact me</h1>
            <div className='mt-10'>
            <input type="text" placeholder="Your Name" className="input input-bordered w-full mt-5 " />
            <input type="text" placeholder="Your Email" className="input input-bordered w-full mt-5 " />
            <input type="text" placeholder="Subject" className="input input-bordered w-full mt-5 " />
            <input type="text" placeholder="Message" className="input input-bordered w-full mt-5 h-32 " />
            
            </div>
            
            <button  className='btn bg-blue-500 mt-20 text-xl font-bold rounded text-white font-sans-serif'>Send Message</button>
          </div>
        </div>
      </div>
     ) ;
    };

export default Contact;