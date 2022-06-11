import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchdata from '../hooks/useFetchdata';

const ProjectDetails = () => {
    const { id } = useParams();
    const [projects] = useFetchdata(id);
    // console.log(projects)

    const singleProject = projects.find(project => project.id === Number(id));
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img className='max-w-lg' src={singleProject?.image} alt='project' />
                <div>
                    <h1 className="text-5xl font-bold">{singleProject?.name}</h1>
                    <p className="py-6">{singleProject?.details}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;