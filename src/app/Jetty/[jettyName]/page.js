"use client";
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import jettyConfig from '../../../../Components/Jetties/Jetty';

const JettyPage = () => {
    const pathname = usePathname();
    const jettyname = pathname.replace("/Jetty/", "");
    const pannellumContainer = useRef(null);
    const jettyPanorama = jettyConfig[jettyname]
    console.log(jettyPanorama);

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
                    window.pannellum.viewer(pannellumContainer.current, jettyPanorama);
                } else {
                    console.error("Pannellum failed to load.");
                }
            })
            .catch((error) => console.error("Error loading Pannellum script:", error));
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" />
            </Head>
            <h1>{jettyname} 360 View</h1>
            <div ref={pannellumContainer} style={{ width: '100%', height: '600px', margin: '20px 0' }}>
                {/* This is where the panorama will be displayed */}
            </div>
        </>
    );
};

export default JettyPage;
