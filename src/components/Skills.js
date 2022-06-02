import React from 'react';
import SkillsCard from './SkillsCard';
import { FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { DiCss3 } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';
// import { FaReact } from 'react-icons/fa';
// import { FaReact } from 'react-icons/fa';
// import { FaReact } from 'react-icons/fa';
// import { FaReact } from 'react-icons/fa';
// import { FaReact } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            name: 'React',
            description: 'I can create a full project using React. Expert in react components.',
            icon: <FaReact className='w-12 h-12' />
        },
        {
            name: 'Express.js',
            description: 'I can create a server using React. API"s create and authorization and many more',
            icon: <SiExpress className='w-12 h-12' />
        },
        {
            name: 'MongoDB',
            description: 'I can create a MongoDB database and perform "CRUD" operation.',
            icon: <SiMongodb className='w-12 h-12' />
        },
        {
            name: 'JWT',
            description: 'I can authorize a user using jwt token and give user his/her role.',
            icon: <VscJson className='w-12 h-12' />
        },
        {
            name: 'Component Library',
            description: 'I can work with any react component library and customize them.',
            icon: <FaReact className='w-12 h-12' />
        },
        {
            name: 'CSS Freamwork',
            description: 'I can use CSS frameworks in my project according to need such as Tailwind, Bootstrap...',
            icon: <DiCss3 className='w-12 h-12' />
        },
        {
            name: 'CSS3',
            description: 'I use custom CSS in project along with framework or only Custom css, and I can implement css3 features...',
            icon: <DiCss3 className='w-12 h-12' />
        },
        {
            name: 'HTML5',
            description: 'I use HTML5 features in my projects to perform good in seo.',
            icon: <ImHtmlFive className='w-12 h-12' />
        }
    ]
    return (
        <section class="bg-[#FAF0D765] dark:bg-gray-900 py-12 text-white">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-700 capitalize lg:text-5xl dark:text-white font-serif">My <span class="text-blue-500 hover:italic cursor-move">Skills</span></h1>

                <div class="grid grid-cols-1 gap-4 mt-12 md:mt-24 md:gap-6 md:grid-cols-3 xl:grid-cols-4">
                    {
                        skills.map((skill, i) => <SkillsCard
                            key={i}
                            skill={skill}
                        ></SkillsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;