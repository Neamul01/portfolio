import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { DiCss3 } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';

const WorkSlider = () => {
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
        <div className='my-12'>
            <h2 className="text-3xl font-bold">My recent Projects</h2>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className='min-w-full'>
                        <SwiperSlide className='card h-20'>Slide 1 <br />lkah</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </div>
                </Swiper>
            </>
        </div>
    );
};

export default WorkSlider;