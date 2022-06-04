import React from 'react';
import work1 from '../images/work1.png'
import work2 from '../images/2.png'
import work3 from '../images/3.png'

const Projects = () => {
    return (
        <section class="bg-white dark:bg-gray-900  text-white">
            <div class="container w-full px-6 py-10 mx-auto">
                <h1 class="text-3xl min-w-max font-semibold text-center text-gray-700 capitalize lg:text-5xl dark:text-white font-serif">My <span class="text-blue-500 hover:italic cursor-move">Projects</span></h1>

                <div class=" w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-24 md:gap-8">
                    <div class="card bg-base-100 shadow-xl scroll-smooth overflow-y-scroll max-h-[300px] max-w-[300px]">
                        <figure class="px-4 py-4">
                            <img src={work1} alt="Shoes" class="rounded-none" />
                        </figure>
                    </div>
                    <div class="card bg-base-100 shadow-xl scroll-smooth overflow-y-scroll max-h-[300px] max-w-[300px]">
                        <figure class="px-4 py-4">
                            <img src={work2} alt="Shoes" class="rounded-none" />
                        </figure>
                    </div>
                    <div class="card bg-base-100 shadow-xl scroll-smooth overflow-y-scroll max-h-[300px] max-w-[300px]">
                        <figure class="px-4 py-4">
                            <img src={work3} alt="Shoes" class="rounded-none" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;