"use client";

import dynamic from "next/dynamic";

// Dynamically load MapComponent only on the client-side
const DynamicMapComponent = dynamic(() => import("../../Components/Map/Map"), {
    ssr: false, // Disable SSR for this component
});

export default function Home() {
  return (
    <div>
      <DynamicMapComponent />
    </div>
  );
}
