
import React, { useState } from 'react'
import { Framer } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import FormSection from './FormSection';
import SummeryPage from './SummeryPage';
import DotIndicator from './DotIndicator';
import POLLFORM from '../poll.json';
function Crousal() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState([]);
    const handleNextClick = (item) => {
        setFormData((prevData) => [...prevData, item])
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (POLLFORM.length + 1));
    };
    const isEndPage = currentIndex === POLLFORM.length;

    return (
        <div className='flex h-screen w-screen overflow-hidden' >
            <div className='w-[5vw] bg-indigo-500 h-full flex flex-col'>
                <div className='flex items-center justify-center p-3'>
                    <Framer size='2em' color='white' />
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <DotIndicator steps={POLLFORM.length + 1} activeStep={currentIndex} />
                </div>
            </div>
            {
                isEndPage ? (<SummeryPage content={formData} />)
                    :
                    (
                        <div className='h-full w-full'>
                            <AnimatePresence initial={false}>
                                {POLLFORM.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        {currentIndex === index && <FormSection Title={item.Title} Options={item.Options} onNextClick={handleNextClick} />}
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
