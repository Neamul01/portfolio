import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchdata from '../hooks/useFetchdata';

const ProjectDetails = () => {
    const [projects] = useFetchdata();
    console.log(projects)
    const id = useParams();

    const singleProject = projects.find(project => project.id === id);
    console.log(singleProject)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;