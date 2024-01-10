import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { handleNextIndex } from '../store/PollSlice';

function FormSection({ Title, Options, onNextClick }) {
    const [hoverIndex, setHoverIndex] = useState(null);
    const dispatch = useDispatch();
    //handling mouse hover
    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    }
    const handleMouseLeave = () => {
        setHoverIndex(null);
    }

    const handleClick = (item) => {
        dispatch(handleNextIndex(item))
    }
    return (
        <div className='flex w-full h-full' data-testid='form-component'>
            {/* render Title */}
            <div className='w-1/2 bg-indigo-500 flex items-center justify-center'>
                <motion.div
                    initial={{ y: -1000 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ y: 1000 }}
                    className=' text-white font-semibold text-6xl text-center'
                >
                    {Title}
                </motion.div>
            </div>
            {/* render options */}
            <div className='w-1/2 flex items-center justify-center'>
                <motion.div
                    initial={{ y: -1000 }}
                    animate={{ y: 0 }}
                    exit={{ y: 1000 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center justify-center gap-10'
                >
                    {Options.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center cursor-pointer  duration-50 
                            ${hoverIndex !== null && hoverIndex !== index ? 'opacity-40' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(null)}
                            onClick={() => handleClick({ id: Math.floor(Math.random() * 10000 + Math.random()), Title, input: item })}
                        >
                            <img src={item.src} alt={item.alt} className='h-14 w-14' />
                            {hoverIndex === index && (
                                <span className={`transition-transform text-indigo-500 font-medium`}>
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

export default FormSection
