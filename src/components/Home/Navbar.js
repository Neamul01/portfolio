import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import auth from '../../firebase.init';
import { FaTools } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import { AiFillContacts } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';

const Navbar = () => {
    const [showMoble, setShowMoble] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <nav className="flex flex-col h-screen pt-8 bg-transparent z-50">
            <div className="max-w-7xl sm:h-screen mb-5 mx-0">
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
                    <div className="flex-1 flex flex-col gap-24 items-center justify-center  left-0 sm:items-stretch sm:justify-center">
                        <div className="flex-shrink-0 flex justify-center w-20 h-auto items-center">
                            {/* <HashLink to={'/#'}
                                data-tip="Home"
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                                className="block lg:hidden h-2 w-14 text-white font-bold text-3xl tooltip tooltip-right tooltip-secondary" alt="Logo" >
                                <img className='w-full' src="logo.svg" alt="logo" />
                            </HashLink> */}
                            <HashLink to={'/#'}
                                data-tip="Home"
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                                className="hidden lg:block h-8 w-auto text-white font-bold text-3xl tooltip tooltip-right tooltip-secondary" alt="Logo"><img className='w-full' src="logo.svg" alt="logo" />
                            </HashLink>
                        </div>
                        <div className="hidden sm:block sm:text-left">
                            <div className="flex flex-col justify-center items-center space-x-4">

                                <div
                                    data-tip="Skills"
                                    className='hover:bg-gray-700 flex justify-center items-center  py-4 px-4 rounded-md cursor-pointer tooltip tooltip-right tooltip-secondary'>
                                    <HashLink to="#skills"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-white hover:text-white rounded-md text-sm font-medium" aria-current="page"><FaTools className='text-4xl' />
                                        {/* Skills */}
                                    </HashLink>
                                </div>

                                <div
                                    data-tip="Projects"
                                    className='hover:bg-gray-700 flex justify-center items-center  py-4 px-4 rounded-md cursor-pointer tooltip tooltip-right tooltip-secondary' style={{ margin: '0' }}>
                                    <HashLink to="#projects"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-white hover:text-white rounded-md text-sm font-medium"><GoProject className='text-4xl' />
                                        {/* Projects */}
                                    </HashLink>
                                </div>

                                <div
                                    data-tip="Contact"
                                    className='hover:bg-gray-700 flex justify-center items-center  py-4 px-4 rounded-md cursor-pointer tooltip tooltip-right tooltip-secondary' style={{ margin: '0' }}>
                                    <HashLink to="#contact"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} className="text-white hover:text-white rounded-md text-sm font-medium"><AiFillContacts className='text-4xl' />
                                        {/* Contact */}
                                    </HashLink>
                                </div>

                                <div
                                    data-tip="Download Resume"
                                    className='flex justify-center items-center tooltip tooltip-right tooltip-secondary' style={{ margin: '0' }}>
                                    <a href='https://drive.google.com/uc?export=download&id=1ZAVzdEyZqOrMH31bMF19ClDXuhh9VxIA' className="btn  my-4 bg-orange-500 border-none hover:bg-orange-400 text-white custom-animation hover:border-none"><FaFileDownload className='text-3xl' />
                                        {/* Download Resume */}
                                    </a>
                                </div>

                                {
                                    user
                                    &&
                                    <div
                                        data-tip="Dashboard"
                                        className='hover:bg-gray-700 flex justify-center items-center  py-4 px-4 rounded-md cursor-pointer tooltip tooltip-right tooltip-secondary' style={{ margin: '0' }}>
                                        <Link to='/dashboard' className="text-white hover:bg-gray-700 hover:text-white  py-2 px-0 ml-0 rounded-md text-sm font-medium">
                                            <AiFillDashboard className='text-4xl' />
                                        </Link>
                                    </div>
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
                <div className="sm:hidden bg-primary" id="mobile-menu">
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