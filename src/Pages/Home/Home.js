import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import About from '../About/About';
import Icons from '../Icons/Icons';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import SkillsBar from '../Skills/SkillsBar';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <Icons></Icons>
            <Education></Education>
            <Skills></Skills>
            <SkillsBar></SkillsBar>
            <Projects></Projects>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;