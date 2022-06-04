import React from 'react';
import './style.css'

const Banner = () => {
    return (
        <section id='banner'
            style={{
                backgroundImage: 'linear-gradient( to top, #FAF0D765,#FAF0D717), url(banner.jpg)'
            }}
            className="hero min-h-screen bg-base-200 py-8 md:py-12 text-white" >
            <div className=" max-w-screen-xl hero-content flex-col-reverse lg:flex-row md:  gap-16">
                <div className="text-center lg:text-left">
                    <p><span className='font-lato'>Hello,</span></p>
                    <h1 className="md:text-5xl text-3xl font-bold font-serif"><span className='italic'>I am Neamul</span> <br /> <span className='text-secondary block py-6 '>MERN Stack Web Developer</span> </h1>
                    <div className='text-effect'></div>
                    <p className="py-6 pr-44 font-mono">
                        I am a Pationate web <span className="font-bold">developer</span>. Web Development is my pation programming is my everyday must working routin.
                    </p>
                    <button className="btn bg-orange-500 border-none mt-6 hover:bg-orange-600 text-white custom-animation hover:border-none">Download CV</button>
                </div>
                <div className="card m-0 p-0 flex-shrink-0 hover:cursor-zoom-in max-w-sm bg-[#cbd3ea]  custom-box-shadow  zom" >
                    <img className='w-full' src="Noman.png" alt="Profile" />
                </div>
            </div>
        </section >
    );
};

export default Banner;