import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
// import WorkSlider from './WorkSlider';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            {/* <WorkSlider /> */}
            <Contact />
        </div>
    );
};

export default Home;