
import React, { useState } from 'react'
import { Framer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'
import THUMBS_UP from '../assets/thumbUp.png';
import THUMBS_DOWN from '../assets/thumbDown.png'
import NOT_SURE from '../assets/notSure.png'

const Poll_Form = [
    {
        id: 0,
        name: 'How was your Day?',
        input: [
            {
                label: 'Good',
                src: THUMBS_UP,
                alt: 'Good'
            },
            {
                label: 'Not Sure',
                src: NOT_SURE,
                alt: 'not sure'
            },
            {
                label: 'Bad',
                src: THUMBS_DOWN,
                alt: 'Bad'
            }
        ],
    },
    {
        id: 1,
        name: 'How was your Day daddy?',
        input: [
            {
                label: 'Good',
                src: THUMBS_UP,
                alt: 'Good'
            },
            {
                label: 'not sure',
                src: NOT_SURE,
                alt: 'Not Sure'
            },
            {
                label: 'Bad',
                src: THUMBS_DOWN,
                alt: 'Bad'
            }
        ],
    },
];


function FormSection({ name, input, onNextClick }) {
    const [hoverIndex, setHoverIndex] = useState(null);
    const handleMouseEnter = (index) => {
        setHoverIndex(index)
    }
    const handleMouseLeave = () => {
        setHoverIndex(null)
    }
    return (
        <div className='flex w-full h-full'>
            <div className='w-1/2 bg-indigo-500 flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className=''
                >
                    <span className='text-7xl text-white'> {name}</span>
                </motion.div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center justify-center gap-10'
                >
                    {input.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center cursor-pointer  duration-50 
                            ${hoverIndex !== null && hoverIndex !== index ? 'opacity-50' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(null)}
                            onClick={() => onNextClick({ id: Math.floor(Math.random() * 100), name, input: item })}
                        >
                            <img src={item.src} alt={item.alt} className='h-14 w-14' />
                            {hoverIndex === index && (
                                <span className={`transition-transform text-indigo-500  font-medium`}>
                                    {item.label}
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

function Crousal() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState([]);
    const handleNextClick = (item) => {
        setFormData((prevData) => [...prevData, item])
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (Poll_Form.length + 1));
    };
    console.log(formData)

    const isEndPage = currentIndex === Poll_Form.length;

    return (
        <div className='flex h-screen w-screen overflow-hidden'>
            <div className='w-[5vw] bg-indigo-500 h-full flex flex-col'>
                <div className='flex items-center justify-center p-3'>
                    <Framer size='2em' color='white' />
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <ul className='flex flex-col gap-1'>
                        {Array.from({ length: Poll_Form.length + 1 }).map((_, index) => (
                            <li key={index} className='h-4 w-4 bg-white rounded-full flex items-center justify-center'>
                                <div className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-indigo-500' : 'bg-white'} self-center`}></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
                isEndPage ? (
                    <div className='w-full h-full'>
                        {
                            formData.length > 0 && (
                                formData.map((item, index) => (
                                    <div key={index}>
                                        {item.name}
                                        <img src={item.input.src} alt={item.input.alt} />
                                    </div>
                                ))
                            )
                        }
                    </div>
                )
                    :
                    (
                        <div className='h-full w-full'>
                            <AnimatePresence>
                                {Poll_Form.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        {currentIndex === index && <FormSection name={item.name} input={item.input} onNextClick={handleNextClick} />}
                                    </React.Fragment>
                                ))}
                            </AnimatePresence>
                        </div >
                    )
            }

        </div>
    );
}


export default Crousal
