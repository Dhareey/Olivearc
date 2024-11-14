"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const jettyData = {
    "type": "FeatureCollection",
    "name": "jetty",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "Name": "ELEGBATA/EBUTE ERO TERMINAL","Slug":"elegbata-terminal", "Terminal": "TERMINAL", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.3824837, 6.4698678 ] } },
    { "type": "Feature", "properties": { "Name": "OWORONSOKI JETTY","Slug":"oworonshoki-jetty", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.4044187, 6.550845 ] } },
    { "type": "Feature", "properties": { "Name": "IKORODU FERRY TERMINAL", "Slug":"ikorodu-terminal","Terminal": "TERMINAL", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.4863238, 6.6017193 ] } },
    { "type": "Feature", "properties": { "Name": "BADORE FERRY TERMINAL",  "Slug":"badore-terminal", "Terminal": "TERMINAL", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.614886, 6.512098 ] } },
    { "type": "Feature", "properties": { "Name": "OSBORNE FERRY TERMINAL", "Slug":"osborne-terminal","Terminal": "TERMINAL", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.41773, 6.46427 ] } },
    { "type": "Feature", "properties": { "Name": "FALOMO FERRY TERMINAL", "Slug":"falomo-terminal", "Terminal": "TERMINAL", "Type": "FLOATING" }, "geometry": { "type": "Point", "coordinates": [ 3.3800501, 6.4444734 ] } },
    { "type": "Feature", "properties": { "Name": "IJEDE JETTY, IJEDE LCDA", "Slug":"ijede-jetty", "Terminal": "JETTY WITH SMALL BUILDING", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.5899591, 6.5641657 ] } },
    { "type": "Feature", "properties": { "Name": "AGBOYI KETU JETTY", "Slug":"agboyi-ketu-jetty", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.4073064, 6.5825812 ] } },
    { "type": "Feature", "properties": { "Name": "IBESHE FLOATING JETTY,IKORODU", "Slug":"ibeshe-floating-jetty", "Terminal": "JETTY WITH SMALL BUILDING", "Type": "FLOATING" }, "geometry": { "type": "Point", "coordinates": [ 3.4851867, 6.56095 ] } },
    { "type": "Feature", "properties": { "Name": "BAIYEKU JETTY", "Slug":"baiyeku-jetty","Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.554103, 6.538874 ] } },
    { "type": "Feature", "properties": { "Name": "LIVERPOOL JETTY", "Slug":"liverpool-jetty", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.35951, 6.43951 ] } },
    { "type": "Feature", "properties": { "Name": "TAKWA BAY JETTY", "Slug":"takwa-bay-jetty", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.3955927, 6.400566 ] } },
    { "type": "Feature", "properties": { "Name": "LANGBASA JETTY", "Slug":"langbasa-jetty", "Terminal": "JETTY", "Type": "WOODEN" }, "geometry": { "type": "Point", "coordinates": [ 3.5818415, 6.5042817 ] } },
    { "type": "Feature", "properties": { "Name": "OKE IRA NLA (AJAH JETTY)", "Slug":"oke-ira-nla-jetty", "Terminal": "JETTY WITH SMALL BUILDING", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.4538982, 6.4453595 ] } },
    { "type": "Feature", "properties": { "Name": "BADORE EAST", "Slug":"badore-east-jetty", "Terminal": "JETTY WITH SMALL BUILDING", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.6014641, 6.5037588 ] } },
    { "type": "Feature", "properties": { "Name": "IBESHE 2 JETTY, IKORODU LG", "Slug":"ibeshe-2-jetty", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.4851867, 6.56095 ] } },
    { "type": "Feature", "properties": { "Name": "COCONUT LANDING", "Slug":"coconut-landing", "Terminal": "LANDING", "Type": "LAND" }, "geometry": { "type": "Point", "coordinates": [ 3.33637, 6.43812 ] } },
    { "type": "Feature", "properties": { "Name": "ALEX JETTY, APAPA", "Slug":"alex-jetty", "Terminal": "LANDING", "Type": "LAND" }, "geometry": { "type": "Point", "coordinates": [ 3.3640841, 6.45528 ] } },
    { "type": "Feature", "properties": { "Name": "TEMIDIRE, AJEGUNLE", "Slug":"temidire-ajegunle-jetty", "Terminal": "JETTY", "Type": "WOODEN" }, "geometry": { "type": "Point", "coordinates": [ 3.3447426, 6.4416181 ] } },
    { "type": "Feature", "properties": { "Name": "ORIGIN JETTY", "Slug":"origin-jetty", "Terminal": "JETTY", "Type": "WOODEN" }, "geometry": { "type": "Point", "coordinates": [ 3.48178, 6.60632 ] } },
    { "type": "Feature", "properties": { "Name": "ADDAX JETTY, VICTORIA ISLAND","Slug":"addax-jetty",  "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.4219444, 6.4280556 ] } },
    { "type": "Feature", "properties": { "Name": "C.M.S JETTY", "Slug":"cms-jetty", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.48676, 6.60137 ] } },
    { "type": "Feature", "properties": { "Name": "IJORA  TERMINAL", "Slug":"ijora-terminal", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.37774, 6.46587 ] } },
    { "type": "Feature", "properties": { "Name": "IGBOLOGUN JETTY, OJO LG", "Slug":"igbologun-jetty", "Terminal": "JETTY WITH SMALL BUILDING", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.3691241, 6.407384 ] } },
    { "type": "Feature", "properties": { "Name": "IBESHE BEACH JETTY, ORI-ADE, LG", "Slug":"ibeshe-beach-jetty", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.478872, 6.5490057 ] } },
    { "type": "Feature", "properties": { "Name": "ORETA WATER JETTY", "Slug":"oreta-water-jetty",  "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.52177, 6.53096 ] } },
    { "type": "Feature", "properties": { "Name": "ILADO JETTY,", "Slug":"ilado-jetty", "Terminal": "JETTY", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.45385, 6.44861 ] } },
    { "type": "Feature", "properties": { "Name": "TOLU AJEGUNLE", "Slug":"tolu-ajegunle-jetty", "Terminal": "JETTY WITH SMALL BUILDING", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.3488107, 6.4502231 ] } },
    { "type": "Feature", "properties": { "Name": "PTML MILE II TERMINAL", "Slug":"ptml-2-terminal", "Terminal": "TERMINAL", "Type": "CONCRETE" }, "geometry": { "type": "Point", "coordinates": [ 3.33276, 6.43489 ] } }
    ]
    };

const jettyIcon = new L.Icon({
  iconUrl: "/boat1.png",
  shadowUrl: iconShadow,
  iconSize: [25, 25],
});




export default function MapComponent() {
    const router = useRouter();
    return(
        <MapContainer center={[6.5244, 3.3792]} zoom={12} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {jettyData.features.map((feature, index) => (
                <Marker
                key={index}
                position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
                icon={jettyIcon}
                eventHandlers={{
                    click: () => {
                    router.push(`/Jetty/${feature.properties.Slug}`);
                    },
                    mouseover: (event) => event.target.openPopup(),
                    mouseout: (event) => event.target.closePopup(),
                }}
                >
                <Popup>{feature.properties.Name}</Popup>
                </Marker>
            ))}
            </MapContainer> 
    )
}