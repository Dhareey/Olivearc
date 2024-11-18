"use client";
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Head from 'next/head';
import jettyConfig from '../../../../Components/Jetties/Jetty';

const JettyPage = () => {
    const pathname = usePathname();
    const router = useRouter();
    const jettyname = pathname.replace("/Jetty/", "");
    const pannellumContainer = useRef(null);
    const jettyPanorama = jettyConfig[jettyname];
    const pannellumViewer = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Dynamically load the Pannellum script
            const loadPannellumScript = () => {
                return new Promise((resolve, reject) => {
                    const script = document.createElement("script");
                    script.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
                    script.async = true;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.head.appendChild(script);
                });
            };
    
            // Load Pannellum and then initialize the viewer
            loadPannellumScript()
                .then(() => {
                    if (window.pannellum) {
                        pannellumViewer.current = window.pannellum.viewer(pannellumContainer.current, jettyPanorama);
                    } else {
                        console.error("Pannellum failed to load.");
                    }
                })
                .catch((error) => console.error("Error loading Pannellum script:", error));
    
            // Clean panorama
            return () => {
                if (pannellumViewer.current) {
                    pannellumViewer.current.destroy(); // Destroy pannellum viewer instance
                    pannellumViewer.current = null;
                }
            };
        }
    }, [jettyPanorama]);
    

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" />
            </Head>
            <button 
                onClick={() => router.push('/')} 
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 1000,
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Back to Home
            </button>
            <div ref={pannellumContainer} 
            style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100vw', 
                height: '100vh', 
                overflow: 'hidden' 
            }}
            >
                {typeof window !== 'undefined' && (
                <div> {/* Panorama content goes here */} </div>
                )}
            </div>
        </>
    );
};

export default JettyPage;
