import React from 'react';
import Skill from './Skill';
import { Line, Circle } from 'rc-progress';


const Skills = () => {
    const skills =[
    {
        title:'JAVASCRIPT',
        weak:'10%',
        month:'30%',
        circle: <Circle className="w-52 h-52 text-center" percent={80} strokeWidth={3} strokeColor="blue" />,
        percent:'80%' 
    },
    {
        title:'REACTJS',
        weak:'5%',
        month:'20%',
        circle: <Circle className="w-52 h-52 text-center" percent={85} strokeWidth={3} strokeColor="blue" /> ,
        percent:'85%'
    },
    {
        title:'NODEJS',
        weak:'5%',
        month:'15%',
        circle: <Circle className="w-52 h-52 text-center" percent={75} strokeWidth={3} strokeColor="blue" /> ,
        percent:'75%'
    },
]
    return (
        <div className='mt-40'>
        <h1 className='font-sans-serif font-bold text-5xl text-blue-500 text-center'>Skills</h1>
        <div className='grid gird-cols-1 md:grid-cols-2 md:place-items-center lg:grid-cols-3 '>
        {
            skills.map(skill=><Skill key={skill.month} skill={skill}></Skill>)
        }
        </div>
        </div>
    );
};

export default Skills;