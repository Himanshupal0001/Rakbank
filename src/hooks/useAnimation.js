import { useRef } from 'react';
import { motion } from 'framer-motion';

export const useAnimation = (initialVariants, animateVariants, transition) => {
    const controls = useRef({});

    const animate = () => {
        controls.current.animate(animateVariants, transition);
    };

    return [motion.div(controls), animate];
};