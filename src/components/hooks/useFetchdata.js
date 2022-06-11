import { useEffect, useState } from 'react';

const useFetchdata = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Neamul01/portfolio/main/public/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return [projects];
};

export default useFetchdata;