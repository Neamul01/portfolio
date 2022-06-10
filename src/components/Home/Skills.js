import React from 'react';
const Skills = () => {
    return (
        <section id='skills' className="bg-[#FAF0D765] dark:bg-gray-900  text-white">
            <div className="container w-full px-6 py-10 mx-auto flex flex-col md:flex-row items-center gap-24">
                <h1 className="text-3xl min-w-max font-semibold text-center text-gray-700 capitalize lg:text-5xl dark:text-white font-serif">My <span className="text-blue-500 hover:italic cursor-move">Skills</span></h1>

                <div className=" w-full grid grid-cols-1 gap-4 mt-12 md:mt-24 md:gap-2">
                    <label htmlFor="" className='text-black text-left'>React</label>
                    <progress className="progress progress-primary w-full h-4" value="60" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>Express</label>
                    <progress className="progress progress-primary w-full h-4" value="30" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>MongoDB</label>
                    <progress className="progress progress-primary w-full h-4" value="40" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>Tailwind</label>
                    <progress className="progress progress-primary w-full h-4" value="90" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>Bootstrap</label>
                    <progress className="progress progress-primary w-full h-4" value="80" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>CSS3</label>
                    <progress className="progress progress-primary w-full h-4" value="70" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>HTML</label>
                    <progress className="progress progress-primary w-full h-4" value="80" max="100"></progress>
                    <p className="text-success text-left mt-6">And Many More...</p>

                </div>
            </div>
        </section>
    );
};

export default Skills;