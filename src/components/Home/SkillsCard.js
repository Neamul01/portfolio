import React from 'react';

const SkillsCard = ({ skill }) => {
    const { name, description, icon } = skill;
    return (
        <div className="flex flex-col items-center p-6 py-4 space-y-3 text-center bg-[#FFD9C0] rounded-xl dark:bg-gray-800 overflow-hidden cursor-pointer shadow-lg shadow-white custom-animation">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                {icon}
            </span>

            <h2 className="text-2xl font-bold text-gray-700 capitalize dark:text-white font-serif">{name}</h2>

            <p className="text-gray-500 dark:text-gray-300 font-mono">
                {description}
            </p>


        </div>
    );
};

export default SkillsCard;