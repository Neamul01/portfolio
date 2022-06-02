import React from 'react';

const SkillsCard = ({ skill }) => {
    const { name, description, icon } = skill;
    return (
        <div class="flex flex-col items-center p-6 py-4 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800 custom-box-shadow">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                {icon}
            </span>

            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>

            <p class="text-gray-500 dark:text-gray-300">
                {description}
            </p>


        </div>
    );
};

export default SkillsCard;