import React from 'react'

function DotIndicator({ steps, activeStep }) {
    return (
        <ul className='flex flex-col gap-1' data-testid='dot-component'>
            {Array.from({ length: steps }).map((_, index) => (
                <li key={index} className='h-4 w-4 bg-white rounded-full flex items-center justify-center'>
                    <div className={`h-2 w-2 rounded-full ${activeStep === index ? 'bg-indigo-500' : 'bg-white'} self-center`}></div>
                </li>
            ))}
        </ul>
    )
}

export default DotIndicator
