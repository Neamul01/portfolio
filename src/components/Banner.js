import React from 'react';
import './style.css'

const Banner = () => {
    return (
        <section class="hero min-h-screen bg-base-200 py-8 md:py-12">
            <div class=" max-w-screen-lg hero-content flex-col-reverse lg:flex-row-reverse gap-16">
                <div class="text-center lg:text-left">
                    <p><span className=''>Hello,</span></p>
                    <h1 class="text-5xl font-bold">I am Neamul</h1>
                    <p class="py-6">
                        I am a Pationate web developer. Web Development is my pation programming is my everyday must working routin.
                    </p>
                    <button className="btn bg-secondary custom-box-shadow">Download CV</button>
                </div>
                <div class="card m-0 p-0 flex-shrink-0 w-full max-w-sm custom-box-shadow">
                    <div class="card-body ">
                        <img className='w-full' src="Noman.png" alt="Profile" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Banner;