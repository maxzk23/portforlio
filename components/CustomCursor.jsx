'use client';

import { useEffect, memo } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = memo(() => {
    const cursorX = useSpring(0, { stiffness: 250, damping: 20 });
    const cursorY = useSpring(0, { stiffness: 250, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#A509FF] pointer-events-none z-[10000] hidden md:block will-change-transform"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        />
    );
});

CustomCursor.displayName = 'CustomCursor';

export default CustomCursor;
