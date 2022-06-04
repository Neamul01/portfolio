import React from 'react';

const Contact = () => {
    return (

        <section id='contact' className="bg-[#FAF0D765] dark:bg-gray-900">
            <div className="container px-4 py-16 mx-auto lg:flex flex-col md:flex-row lg:items-center md:gap-8">
                <h2 className="text-3xl min-w-fit font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                    You have any question? Feel free to message me.
                </h2>

                <div className="mt-8 lg:mt-0 w-full">
                    <div className="flex flex-col space-y-3 sm:space-y-0 gap-4 sm:flex-col sm:-mx-2">
                        <input id="email" type="email" className="px-4 py-2  w-full text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" />

                        <textarea id="message" type="text" rows={5} className="px-4 py-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your message..." />

                        <button className="px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Send
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;