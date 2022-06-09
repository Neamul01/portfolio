import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import auth from '../../firebase.init';

const Navbar = () => {
    const [showMoble, setShowMoble] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <nav className="flex flex-col h-screen pt-8 border-r dark:bg-gray-800 dark:border-gray-600 bg-neutral">
            <div className="max-w-7xl h-screen mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative  flex items-center justify-between ">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            onClick={() => setShowMoble(!showMoble)}
                            type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* desktop */}
                    <div className="flex-1 flex flex-col gap-24 items-center justify-center  left-0 sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <HashLink to={'/#'}
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                                className="block lg:hidden h-8 w-auto text-white font-bold text-3xl" alt="Workflow" > </HashLink>
                            <HashLink to={'/#'}
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                                className="hidden lg:block h-8 w-auto text-white font-bold text-3xl" alt="Workflow"><img className='w-16' src="logo.svg" alt="logo" /></HashLink>
                        </div>
                        <div className="hidden sm:block sm:text-left">
                            <div className="flex flex-col space-x-4">

                                <HashLink to="#skills"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-white hover:bg-gray-700 hover:text-white py-2 px-0 ml-4 rounded-md text-sm font-medium" aria-current="page">Skills
                                </HashLink>

                                <HashLink to="#projects"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-white hover:bg-gray-700 hover:text-white  py-2 px-0 ml-0 rounded-md text-sm font-medium">Projects
                                </HashLink>

                                <HashLink to="#contact"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-white hover:bg-gray-700 hover:text-white  py-2 px-0 ml-0 rounded-md text-sm font-medium">Contact
                                </HashLink>
                                {
                                    user
                                    &&
                                    <Link to='/dashboard' className="text-white hover:bg-gray-700 hover:text-white  py-2 px-0 ml-0 rounded-md text-sm font-medium">Dashboard</Link>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            {
                showMoble
                &&
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="!#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                        <a href="!#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                        <a href="!#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                        <a href="!#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div>
            }
        </nav>

    );
};

export default Navbar;