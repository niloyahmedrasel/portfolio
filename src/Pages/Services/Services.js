import React from 'react';
import front from '../../assets/front.png'
import back from '../../assets/back.png'
import full from '../../assets/full.png'
import Service from './Service';

const Services = () => {

    const services=[
        {
            logo:front,
            title:'Frontend Development',
            info: "Bringing designs to life with captivating and responsive user interfaces that leave a lasting impression."
        },
        {
            logo:back,
            title:'Backend Development',
            info:"Building the backbone of your digital presence, ensuring data integrity and smooth server operations."
        },
        {
            logo:full,
            title: 'Full Stack Development',
            info:"From pixel-perfect front-end to rock-solid back-end, delivering end-to-end solutions for your digital success."
        },
        
    ]
    return (
        <div className='mt-20'>
        <h1 className='font-sans-serif text-5xl font-bold text-blue-500 text-center'>Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 place-items-center'>
            {
                services.map(service=><Service key={service.title} service={service}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;