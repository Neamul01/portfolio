import React from 'react';
import Banner from './Banner';
import Blogs from './Blogs';
import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
// import WorkSlider from './WorkSlider';

const Home = () => {
    return (
        <div className='h-screen overflow-hidden overflow-y-scroll w-full' >
            <div className='fixed z-30'>
                <Navbar />
            </div>
            <div className='z-0'>
                <Banner />
                <Skills />
                <Projects />
                <Blogs />
                {/* <WorkSlider /> */}
                <Contact />
            </div>
        </div>
    );
};

export default Home;