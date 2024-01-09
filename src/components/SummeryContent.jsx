import React from 'react'
import { motion } from 'framer-motion'
function SummeryContent({ item }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='py-8 border-b-2 border-slate-300 w-1/2 flex items-center justify-between'
        >
            <div>
                <div className='font-medium'>{item.name}</div>
                <div className='text-xs text-gray-400'>{item.name}</div>
            </div>
            <img src={item.input.src} alt={item.input.alt} className='h-8 w-8' />
        </motion.div>
    )
}

export default SummeryContent
