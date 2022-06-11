import React from 'react';
import './Projects.css'
import { Link } from 'react-router-dom';
import useFetchdata from '../hooks/useFetchdata';

const Projects = () => {
    const [projects] = useFetchdata();
    console.log(projects)

    return (
        <section id='projects' className="bg-white dark:bg-gray-900  text-white">
            <div className="container w-full px-6 py-10 mx-auto ">
                <h1 className="text-3xl min-w-max font-semibold text-center text-gray-700 capitalize lg:text-5xl dark:text-white font-serif"><span className="text-blue-500 hover:italic cursor-move">Projects</span></h1>

                <div className=" w-full grid grid-flow-row  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-24 md:gap-8 cursor-zoom-in">

                    {
                        projects?.map(project => <div key={project.id} className="bg-base-100 shadow-2xl pb-4 rounded-md relative  max-w-[300px] custom-style-parent">
                            <div className=' max-h-[300px] max-w-full overflow-hidden'>
                                <div className="bg-white absolute custom-style flex flex-col items-center justify-center text-white">
                                    <p className='text-xl font-bold'>{project?.name}</p>
                                    <p className='px-1'>{project.details}.</p>
                                    <Link to={`/project/${project.id}`} className='btn btn-secondary'>Visit</Link>
                                </div>
                                <figure className="px-4 py-4">
                                    <img src={project?.image} alt="Shoes" className="rounded-none " />
                                </figure>
                            </div>
                        </div>)
                    }

                    {/* <div className="bg-base-100 shadow-2xl pb-4 rounded-md relative  max-w-[300px] custom-style-parent">
                        <div className=' max-h-[300px] max-w-full overflow-hidden'>
                            <div className="bg-white absolute custom-style flex flex-col items-center justify-center text-white">
                                <p className='text-xl font-bold'>Gadget Hub</p>
                                <p>Gadget store based website...</p>
                                <button className='btn btn-secondary'>Visit</button>
                            </div>
                            <figure className="px-4 py-4">
                                <img src={work1} alt="Shoes" className="rounded-none " />
                            </figure>
                        </div>
                    </div>

                    <div className="bg-base-100 shadow-2xl pb-4 rounded-md relative  max-w-[300px] custom-style-parent">
                        <div className=' max-h-[300px] max-w-full overflow-hidden'>
                            <div className="bg-white absolute custom-style flex flex-col items-center justify-center text-white">
                                <p className='text-xl font-bold'>N&N Industries</p>
                                <p>Warehouse management based website...</p>
                                <button className='btn btn-secondary'>Visit</button>
                            </div>
                            <figure className="px-4 py-4">
                                <img src={work2} alt="Shoes" className="rounded-none " />
                            </figure>
                        </div>
                    </div>

                    <div className="bg-base-100 shadow-2xl pb-4 rounded-md relative  max-w-[300px] custom-style-parent">
                        <div className=' max-h-[300px] max-w-full overflow-hidden'>
                            <div className="bg-white absolute custom-style flex flex-col items-center justify-center text-white">
                                <p className='text-xl font-bold'>Travel Master</p>
                                <p>A travel guide's website...</p>
                                <button className='btn btn-secondary'>Visit</button>
                            </div>
                            <figure className="px-4 py-4">
                                <img src={work3} alt="Shoes" className="rounded-none " />
                            </figure>
                        </div>
                    </div> */}
                </div>
                <button className="mt-12 text-secondary">View More Projects..</button>
            </div>
        </section>
    );
};

export default Projects;