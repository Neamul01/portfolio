import React from 'react';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;