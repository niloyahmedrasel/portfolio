import React, { useEffect } from 'react';
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo (1).png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Icons = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 '>
            <img className='w-1/3 mx-auto mt-10' src={react} alt=''></img>
            <img className='w-1/3 mx-auto mt-10' src={node} alt=''></img>
            <img className='w-1/3 mx-auto mt-10' src={js} alt=''></img>
            <img className='w-1/3 mx-auto mt-10' src={mongo} alt=''></img>
        </div>
    );
};

export default Icons;