import React from 'react';

const Banner = () => {
    return (
        <section class="hero min-h-screen bg-base-200">
            <div class=" max-w-screen-lg hero-content flex-col lg:flex-row-reverse gap-16">
                <div class="text-center lg:text-left">
                    <p>Hello,</p>
                    <h1 class="text-5xl font-bold">I am Neamul</h1>
                    <p class="py-6">
                        I am a Pationate web developer. Web Development is my pation programming is my everyday must working routin.
                    </p>
                    <button className="btn bg-gray-800">Download CV</button>
                </div>
                <div class="card m-0 p-0 flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div class="card-body">
                        <img className='w-full' src="Noman.png" alt="Profile" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Banner;