'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef, useState, useEffect, memo } from 'react';

const AnimatedSphere = memo(() => {
    const meshRef = useRef();

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 12, 12]} scale={2.4} ref={meshRef}>
                <MeshDistortMaterial
                    color="#3d1c56"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0}
                />
            </Sphere>
        </Float>
    );
});

AnimatedSphere.displayName = 'AnimatedSphere';

const Background3D = memo(() => {
    // Always use gradient for better performance and LCP
    return (
        <div className="absolute inset-0 z-[-1] opacity-50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />
        </div>
    );
});

Background3D.displayName = 'Background3D';

export default Background3D;
