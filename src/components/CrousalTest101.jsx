import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PollComponent.css'; // Import the CSS file for styling

const PollForm = [
    {
        id: 0,
        name: 'How was your Day?',
        input: ['good', 'bad', 'average'],
    },
    {
        id: 1,
        name: 'How was your Day daddy?',
        input: ['good', 'bad', 'average'],
    },
];

const PollComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleInputChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='h-full w-full'>
            {PollForm.map((poll, index) => (
                <motion.div
                    key={poll.id}
                    className='w-full flex'
                    initial={{ maxHeight: 0 }}
                    animate={{ maxHeight: activeIndex === index ? 1000 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        {/* Left content */}
                        {poll.name}
                    </div>
                    <div>
                        {/* Right content with sliding animation */}
                        {poll.input.map((option) => (
                            <div key={option}>{option}</div>
                        ))}
                    </div>
                    <div>
                        {/* Input for triggering next object */}
                        <button onClick={() => handleInputChange(index)}>Next</button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default PollComponent;
