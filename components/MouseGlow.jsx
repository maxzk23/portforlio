'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, memo } from 'react';

const MouseGlow = memo(() => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Optimized spring config for better performance
    const springConfig = { damping: 25, stiffness: 80 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
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
                className="absolute w-[500px] h-[500px] md:w-[500px] md:h-[500px] sm:w-[300px] sm:h-[300px] bg-sky-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 will-change-transform"
            />
        </div>
    );
});

MouseGlow.displayName = 'MouseGlow';

export default MouseGlow;
