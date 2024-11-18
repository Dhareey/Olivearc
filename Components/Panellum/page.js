

"use client";
import { useState, useEffect, useRef } from 'react';
import jettyConfig from '../Jetties/Jetty';

const JettyPano = ({jettyname}) => {
    const pannellumContainer = useRef(null);
    const jettyPanorama = jettyConfig[jettyname];
    const pannellumViewer = useRef(null);

    useEffect(() => {
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
                    pannellumViewer.current= window.pannellum.viewer(pannellumContainer.current, jettyPanorama);
                } else {
                    console.error("Pannellum failed to load.");
                }
            })
            .catch((error) => console.error("Error loading Pannellum script:", error));

            //Clean panorama
            return() => {
                if (pannellumViewer.current) {
                    pannellumViewer.current.destroy(); // Destroy pannellum viewer instance
                    pannellumViewer.current = null;
                }

            }
    }, [jettyPanorama]);

    return (
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
                {/* This is where the panorama will be displayed */}
            </div>
    );
};

export default JettyPano;
