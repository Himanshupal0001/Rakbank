import React from 'react'
import { motion } from 'framer-motion'
import SummeryContent from './SummeryContent'
function SummeryPage({ content }) {
    console.log(content)
    return (
        <div className='w-full pt-12 ml-12'>
            <motion.div
                className='w-1/2 bg-indigo-500'
                animate={{
                    width: 0
                }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
            ></motion.div>
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
            <div className='mt-8'>
                {
                    content?.length !== 0 && (
                        content.map((item, index) => (
                            <React.Fragment key={item.id || index}>
                                <SummeryContent item={item} />
                            </React.Fragment>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default SummeryPage
