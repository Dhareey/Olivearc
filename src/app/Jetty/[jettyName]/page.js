"use client";
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JettyPano from '../../../../Components/Panellum/page';

const DynamicPano = dynamic(() => import("../../../../Components/Panellum/page"),{
    ssr: false,
})

const JettyPage = () => {
    const pathname = usePathname();
    const router = useRouter();
    const jettyname = pathname.replace("/Jetty/", "");

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
            <DynamicPano jettyname={jettyname} />

        </>
    );
};

export default JettyPage;
