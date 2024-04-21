import React, { useEffect } from 'react';
import restaurant from '../../assets/restaurant2.png'
import doctor from '../../assets/doctor.png'
import car from '../../assets/car.png'
import job from '../../assets/job.png'
import './Project.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
    },[])
    return (
        <div id='projects' className='mt-20'>
        <h1 className='font-sans-serif text-5xl font-bold text-blue-500 text-center'>
          Projects
        </h1>
        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-10 mt-20'>
          <div className='project-item'>
            <img className='h-full' src={job} alt='' />
            <div className='overlay'>
              <a href='https://new-job-31734.web.app/?fbclid=IwAR0ddd1gmsxBF7k6SEnV7QWs0RZobI8DM2tUUNxDfI9dKT2ZvNGQpDPGxws' className='project-button'>See Live</a>
              <a href='https://github.com/niloyahmedrasel/job-portal' className='project-button mx-5'>View Code</a>
            </div>
          </div>
          <div className='project-item'>
            <img className='h-full' src={restaurant} alt='' />
            <div className='overlay'>
              <a href='https://restaurant-1132b.web.app/' className='project-button'>See Live</a>
              <a href='https://github.com/niloyahmedrasel/restaurant' className='project-button mx-5'>View Code</a>
            </div>
          </div>
          <div className='project-item'>
            <img src={doctor} alt='' />
            <div className='overlay'>
              <a  className='project-button'>See Live</a>
              <a href='https://github.com/niloyahmedrasel/dentist-project' className='project-button mx-5'>View Code</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;