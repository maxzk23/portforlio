'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

const AnimatedSphere = () => {
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
            <Sphere args={[1, 32, 32]} scale={2.4} ref={meshRef}>
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
};

const Background3D = () => {
    return (
        <div className="absolute inset-0 z-[-1] opacity-50">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: false, powerPreference: "high-performance" }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} color="#A509FF" intensity={2} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};

export default Background3D;
