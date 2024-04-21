import React from 'react';
import { Line } from 'rc-progress';
import Bar from './Bar';

const SkillsBar = () => {

    const Bars=[
        {
            title:'HTML5',
            percent:'95%',
            bars:<Line percent={95} strokeWidth={2} strokeColor="blue" />
        },
        {
            title:'CSS3',
            percent:"90%",
            bars:<Line percent={90} strokeWidth={2} strokeColor="blue" />
        },
        {
            title:'C',
            percent:'80%',
            bars:<Line percent={80} strokeWidth={2} strokeColor="blue" />
        },
        {
            title:'C++',
            percent:'85%',
            bars:<Line percent={85} strokeWidth={2} strokeColor="blue" />
        },
        {
            title:'MONGODB',
            percent:'80%',
            bars:<Line percent={80} strokeWidth={2} strokeColor="blue" />
        },
        {
            title:'MYSQL',
            percent:'75%',
            bars:<Line percent={75} strokeWidth={2} strokeColor="blue" />
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20 place-items-center'>
            {
                Bars.map(bar=><Bar key={bar.percent} bar={bar}></Bar>)
            }
        </div>
    );
};

export default SkillsBar;