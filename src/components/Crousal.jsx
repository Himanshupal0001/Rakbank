
import React from 'react'
import { Framer } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import FormSection from './FormSection';
import SummeryPage from './SummeryPage';
import DotIndicator from './DotIndicator';
import POLLFORM from '../utils/poll.json';
import { useSelector } from 'react-redux';
function Crousal() {
    const { pollForm, currentIndex } = useSelector(store => store.poll)
    const isEndPage = currentIndex === POLLFORM.length;

    return (
        <div className='flex h-screen w-screen overflow-hidden' data-testid='crousal-component'>
            {/* left-navigation */}
            <div className='w-[5vw] bg-indigo-500 h-full flex flex-col'>
                <div className='flex items-center justify-center p-3'>
                    <Framer size='2em' color='white' />
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <DotIndicator steps={pollForm.length + 1} activeStep={currentIndex} />
                </div>
            </div>
            {/* right-content */}
            {
                isEndPage ? (<SummeryPage />)
                    :
                    (
                        <div className='h-full w-full'>
                            <AnimatePresence initial={false}>
                                {pollForm.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        {currentIndex === index && <FormSection Title={item.Title} Options={item.Options} />}
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
