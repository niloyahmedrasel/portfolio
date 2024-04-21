import React from 'react';
import education from '../../assets/education.png'
import EducationCard from './EducationCard';
const Education = () => {
    const Cards=[
        {
            logo:education ,
            year:'2015-2017',
            title:'Secondary School Certificate',
            subtitle:'Uttara High School & College',
            information:'I had passed with GPA-4.91 out of 5 and that time it gave me confidence to move ahead'

        },
        {
            logo:education,
            year:'2017-2019',
            title:'Higher Secondary certificate',
            subtitle:'Bhawal Bodre Alam Govt College',
            information:'I had passed with GPA-5 out of 5 and that time it gave me confidence to move ahead'

        },
        {
            logo:education,
            year:'2022-2026',
            title:'BSC in Computer Science & Engineering',
            subtitle:"Shanto-Mariam University of Creative Technology",
            information:'I am currently studying here hope so i will complete my study with great skills'

        },
    ]
    return (
        <div id='education' className='text-center mt-20'>
            <h1 className='font-sans-serif font-bold text-5xl text-blue-500'>Education</h1>
            {
                Cards.map(card=><EducationCard key={card.year} card={card}></EducationCard>)
            }
        </div>
    );
};

export default Education;