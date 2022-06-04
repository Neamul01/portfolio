import React from 'react';
const Skills = () => {
    return (
        <section class="bg-[#FAF0D765] dark:bg-gray-900  text-white">
            <div class="container w-full px-6 py-10 mx-auto flex flex-row items-center gap-24">
                <h1 class="text-3xl min-w-max font-semibold text-center text-gray-700 capitalize lg:text-5xl dark:text-white font-serif">My <span class="text-blue-500 hover:italic cursor-move">Skills</span></h1>

                <div class=" w-full grid grid-cols-1 gap-4 mt-12 md:mt-24 md:gap-2">
                    <label htmlFor="" className='text-black text-left'>React</label>
                    <progress class="progress progress-primary w-1/2" value="60" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>Express</label>
                    <progress class="progress progress-primary w-1/2" value="30" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>MongoDB</label>
                    <progress class="progress progress-primary w-1/2" value="40" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>Tailwind</label>
                    <progress class="progress progress-primary w-1/2" value="90" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>Bootstrap</label>
                    <progress class="progress progress-primary w-1/2" value="80" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>CSS3</label>
                    <progress class="progress progress-primary w-1/2" value="70" max="100"></progress>
                    <label htmlFor="" className='text-black text-left'>HTML</label>
                    <progress class="progress progress-primary w-1/2" value="80" max="100"></progress>
                    <p className="text-success text-left mt-6">And Many More...</p>

                </div>
            </div>
        </section>
    );
};

export default Skills;