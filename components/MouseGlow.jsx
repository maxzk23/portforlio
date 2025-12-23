'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const MouseGlow = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the movement with springs
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className="absolute w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50"
            />
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{ duration: 0.1 }}
                className="absolute w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] mix-blend-screen opacity-40"
            />
        </div>
    );
};

export default MouseGlow;
