import React from 'react';
import './style.css'

const Banner = () => {
    return (
        <section class="hero min-h-screen bg-base-200 py-8 md:py-12">
            <div class=" max-w-screen-xl hero-content flex-col-reverse lg:flex-row-reverse gap-16">
                <div class="text-center lg:text-left">
                    <p><span className=''>Hello,</span></p>
                    <h1 class="text-5xl font-bold"><span className='hover:italic'>I am Neamul</span> <br /> <span className='text-primary'>MERN Stack Web Developer</span> </h1>
                    <p class="py-6 pr-44">
                        I am a Pationate web <span className="font-bold">developer</span>. Web Development is my pation programming is my everyday must working routin.
                    </p>
                    <button className="btn bg-secondary custom-box-shadow mt-6 hover:bg-primary custom-animation hover:border-none">Download CV</button>
                </div>
                <div class="card m-0 p-0 flex-shrink-0 w-full hover:cursor-zoom-in max-w-sm custom-box-shadow  zom" >
                    <img className='w-full' src="Noman.png" alt="Profile" />
                </div>
            </div>
        </section >
    );
};

export default Banner;