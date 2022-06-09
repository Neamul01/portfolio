import React from 'react';
import TypeAnimation from 'react-type-animation';
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
                    <h1 className="md:text-5xl text-3xl font-bold font-serif">
                        <span className='italic'>I am Neamul</span> <br />
                        <span className='text-secondary block py-6 '>
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    'Junior React Developer',
                                    3000,
                                    'MERN Stack Web Developer',
                                    3000,
                                    'Deep Learner',
                                    3000
                                ]}
                                wrapper="a"
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <div className='text-effect'></div>
                    <p className="py-6 pr-44 font-mono">
                        I am a Pationate ,dedicated and professional <span className="font-bold">MERN stack Developer</span>. I am a quick learner and Highly appropriate to work for a software farm where I can leverage my talent in Front-end and Back-end web development to give excellence. I want to see myself as a Senior MERN Stack web developer in the next 5 years.
                    </p>
                    <a href='https://drive.google.com/uc?export=download&id=1ZAVzdEyZqOrMH31bMF19ClDXuhh9VxIA' className="btn bg-orange-500 border-none mt-6 hover:bg-orange-600 text-white custom-animation hover:border-none">Download Resume</a>
                </div>
                <div className="card m-0 p-0 flex-shrink-0 hover:cursor-zoom-in max-w-sm bg-[#cbd3ea]  custom-box-shadow  zom" >
                    <img className='w-full' src="Noman.png" alt="Profile" />
                </div>
            </div>
        </section >
    );
};

export default Banner;