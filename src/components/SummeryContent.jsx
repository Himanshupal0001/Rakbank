import React from 'react'
import { motion } from 'framer-motion'
function SummeryContent({ item, isLast }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={`py-8  border-slate-300  ${!isLast ? 'border-b-2' : ''} flex items-center justify-between`}
        >
            <div className='w-4/5'>
                <div className='font-medium text-xl'>{item.Title}</div>
                {!isLast && (<div className='text-xs text-gray-400'>{item.Title}</div>)}

            </div>
            <img src={item.input.src} alt={item.input.alt} className='h-10 w-10' />
        </motion.div>
    )
}

export default SummeryContent
