import React from 'react'
import { motion } from 'framer-motion'
import SummeryContent from './SummeryContent'
import useSubmitResponse from '../hooks/useSubmitResponse';
function SummeryPage({ content }) {
    //hook to handle post request
    const { handleSubmit } = useSubmitResponse();
    return (
        <div className='w-full flex'>
            {/* sliding page */}
            <motion.div
                className='w-1/2 h-full bg-indigo-500'
                animate={{ width: 0 }}
                transition={{ duration: 0.5 }}
            >
            </motion.div>
            {/*content-page*/}
            <div className=' mt-12 ml-12'>
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='text-7xl font-bold'
                    >
                        <div>An overview of </div>
                        <div>your answers</div>
                    </motion.div>
                </div>
                <div className='mt-8 max-h-[60vh] overflow-y-auto'>
                    {/*scrollable div for user response*/}
                    {
                        content?.length !== 0 && (
                            content.map((item, index) => (
                                <React.Fragment key={item.id || index}>
                                    <SummeryContent item={item} isLast={index === content.length - 1} />
                                </React.Fragment>
                            ))
                        )
                    }
                </div>
                {/* button to submit data*/}
                <motion.button
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='bg-indigo-500 rounded-sm text-white px-4 py-1 mt-4 sticky bottom-0' onClick={() => handleSubmit(content)}>Submit</motion.button>
            </div>
        </div>
    );
}

export default SummeryPage
