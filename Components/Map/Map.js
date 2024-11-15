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
    "name": "jetty_point_geojson",
    "features": [
    { "type": "Feature", "properties": { "Name": "Ise Jetty", "Slug": "ise-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 4.213948363724412, 6.420298400615163 ] } },
    { "type": "Feature", "properties": { "Name": "Tekunle Jetty", "Slug": "tekunle-jetty","digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 4.206006732535882, 6.430513178278901 ] } },
    { "type": "Feature", "properties": { "Name": "Ilagbo Jetty", "Slug": "ilagbo-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 4.157786455033484, 6.422156786697368 ] } },
    { "type": "Feature", "properties": { "Name": "ABOMITI-NLA JETTY", "Slug": "abomiti-nla-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 4.09667640495867, 6.515583896589296 ] } },
    { "type": "Feature", "properties": { "Name": "EMINA-SAGA JETTY", "Slug": "emina-saga-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 4.082860762629291, 6.54662577955736 ] } },
    { "type": "Feature", "properties": { "Name": "IGBONLA JETTY", "Slug": "igbonla-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 4.056895250562436, 6.634007441342339 ] } },
    { "type": "Feature", "properties": { "Name": "Oluwa Market Jetty", "Slug": "oluwa-market-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.990823756786595, 6.582172790615084 ] } },
    { "type": "Feature", "properties": { "Name": "Aiyetoro Jetty", "Slug": "aiyetoro-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.975205564743125, 6.577716974394323 ] } },
    { "type": "Feature", "properties": { "Name": "Ejirin Jetty", "Slug": "ejirin-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.900731444760662, 6.611909054200188 ] } },
    { "type": "Feature", "properties": { "Name": "Eputu Landing, Ibeju Lekki", "Slug": "eputu-landing,-ibeju-lekki", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.71516117903894, 6.482759052906008 ] } },
    { "type": "Feature", "properties": { "Name": "ADO-IKOSI JETTY", "Slug": "ado-ikosi-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.706266518638873, 6.612553708654815 ] } },
    { "type": "Feature", "properties": { "Name": "OJU-AGEMO JETTY", "Slug": "oju-agemo-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.660139374319952, 6.573077254129627 ] } },
    { "type": "Feature", "properties": { "Name": "AGURA LANDING", "Slug": "agura-landing", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.636441502737305, 6.571049050483886 ] } },
    { "type": "Feature", "properties": { "Name": "ITO OMU JETTY", "Slug": "ito-omu-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.628926538917132, 6.500632937853455 ] } },
    { "type": "Feature", "properties": { "Name": "Sangotedo Jetty", "Slug": "sangotedo-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.645168715414012, 6.471436612623608 ] } },
    { "type": "Feature", "properties": { "Name": "Badore Jetty", "Slug": "badore-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.616795243837212, 6.511491873712282 ] } },
    { "type": "Feature", "properties": { "Name": "Badore Terminal", "Slug": "badore-terminal", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.614950171278549, 6.512045718931295 ] } },
    { "type": "Feature", "properties": { "Name": "Ijede Jetty", "Slug": "ijede-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.589581097472978, 6.563531484345427 ] } },
    { "type": "Feature", "properties": { "Name": "Langbasa Jetty", "Slug": "langbasa-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.579639976822242, 6.509184182482126 ] } },
    { "type": "Feature", "properties": { "Name": "OKE IRA NLA JETTY", "Slug": "oke-ira-nla-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.579429556918646, 6.489781995922033 ] } },
    { "type": "Feature", "properties": { "Name": "Baiyeku Jetty", "Slug": "baiyeku-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.553074464666688, 6.536234913957523 ] } },
    { "type": "Feature", "properties": { "Name": "Oreta Jetty, Ikorodu", "Slug": "oreta-jetty,-ikorodu", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.551609580105277, 6.537077702714749 ] } },
    { "type": "Feature", "properties": { "Name": "Ofin Jetty", "Slug": "ofin-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.500980650298171, 6.539272364962968 ] } },
    { "type": "Feature", "properties": { "Name": "Ibeshe Terminal", "Slug": "ibeshe-terminal", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.472968282524053, 6.552526557765689 ] } },
    { "type": "Feature", "properties": { "Name": "IBESHE FLOATING JETTY", "Slug": "ibeshe-floating-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.487542777443779, 6.600960426520673 ] } },
    { "type": "Feature", "properties": { "Name": "OFFIN JETTY", "Slug": "offin-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.487391576022853, 6.601256534847544 ] } },
    { "type": "Feature", "properties": { "Name": "Ikorodu Terminal", "Slug": "ikorodu-terminal", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.485878553518779, 6.602169015752695 ] } },
    { "type": "Feature", "properties": { "Name": "Falomo Terminal", "Slug": "falomo-terminal", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.427158899005963, 6.442133397142591 ] } },
    { "type": "Feature", "properties": { "Name": "FESTAC JETTY", "Slug": "-festac-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.293974165308219, 6.474362364645161 ] } },
    { "type": "Feature", "properties": { "Name": "Ibeshe Beach Jetty", "Slug": "-ibeshe-beach-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.258649305739975, 6.407356718778529 ] } },
    { "type": "Feature", "properties": { "Name": "Gbaji Yekeme Jetty", "Slug": "gbaji-yekeme-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.86080909376929, 6.419274389210217 ] } },
    { "type": "Feature", "properties": { "Name": "Ibeshe Jetty", "Slug": "ibeshe-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.548795896621262, 6.537888912594791 ] } },
    { "type": "Feature", "properties": { "Name": "Igbogbele Jetty", "Slug": "igbogbele-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.762104215621909, 6.441439849126121 ] } },
    { "type": "Feature", "properties": { "Name": "Igbologun, Ibeju Lekki", "Slug": "igbologun,-ibeju-lekki", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.348599503362057, 6.405282359379102 ] } },
    { "type": "Feature", "properties": { "Name": "Ijora Jetty", "Slug": "ijora-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.377788479373852, 6.46549438605622 ] } },
    { "type": "Feature", "properties": { "Name": "Ijora Terminal", "Slug": "ijora-terminal", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.372384577755927, 6.462043538149262 ] } },
    { "type": "Feature", "properties": { "Name": "Imore jetty", "Slug": "imore-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.282159337683847, 6.425255855198233 ] } },
    { "type": "Feature", "properties": { "Name": "Irede Jetty", "Slug": "irede-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.234695116105975, 6.428172569806427 ] } },
    { "type": "Feature", "properties": { "Name": "Irewe Jetty", "Slug": "irewe-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.143522331476175, 6.420745484937049 ] } },
    { "type": "Feature", "properties": { "Name": "Iworo Ajido Jetty", "Slug": "iworo-ajido-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.980488322314598, 6.442363497104564 ] } },
    { "type": "Feature", "properties": { "Name": "Iyafin Jetty", "Slug": "iyafin-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.859968359782113, 6.44917292606802 ] } },
    { "type": "Feature", "properties": { "Name": "Liverpool jetty", "Slug": "liverpool-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.359174408414617, 6.43923202244245 ] } },
    { "type": "Feature", "properties": { "Name": "Marina CMS Jetty", "Slug": "marina-cms-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.390402214079277, 6.448936967787832 ] } },
    { "type": "Feature", "properties": { "Name": "Mile 2 Jetty", "Slug": "mile-2-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.308259464821451, 6.458782674921616 ] } },
    { "type": "Feature", "properties": { "Name": "OKE AFA", "Slug": "oke-afa", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.294202333228415, 6.508725123117111 ] } },
    { "type": "Feature", "properties": { "Name": "Oworonshoki Jetty", "Slug": "oworonshoki-jetty", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.406805553468353, 6.548129287120122 ] } },
    { "type": "Feature", "properties": { "Name": "Sagbokoji Jetty", "Slug": "sagbokoji-jetty", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.376961506550439, 6.432615447789805 ] } },
    { "type": "Feature", "properties": { "Name": "Slave Route Landing", "Slug": "slave-route-landing", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.883644416355151, 6.411525830368693 ] } },
    { "type": "Feature", "properties": { "Name": "Tarkwa Bay Jetty", "Slug": "tarkwa-bay-jetty", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.394642798602714, 6.407325908713553 ] } },
    { "type": "Feature", "properties": { "Name": "Temidire Jetty", "Slug": "temidire-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.344133709675686, 6.436856209446114 ] } },
    { "type": "Feature", "properties": { "Name": "Tincan Island Jetty", "Slug": "tincan-island-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.343903554081894, 6.435403910343766 ] } },
    { "type": "Feature", "properties": { "Name": "Topo Jetty", "Slug": "topo-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.931326924633241, 6.408781413565709 ] } },
    { "type": "Feature", "properties": { "Name": "Vip Jetty", "Slug": "vip-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.900679925132734, 6.409785233241598 ] } },
    { "type": "Feature", "properties": { "Name": "Abule Osun Jetty", "Slug": "abule-osun-jetty","digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.236821113679236, 6.437132698161849 ] } },
    { "type": "Feature", "properties": { "Name": "Addax Jetty", "Slug": "addax-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.441739982850135, 6.436727092207393 ] } },
    { "type": "Feature", "properties": { "Name": "Agbara Jetty", "Slug": "agbara-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.103319741350682, 6.499202366298049 ] } },
    { "type": "Feature", "properties": { "Name": "Agboyi Ketu Jetty", "Slug": "agboyi-ketu-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.40743442754252, 6.58250506274457 ] } },
    { "type": "Feature", "properties": { "Name": "Akarakumo Jetty", "Slug": "akarakumo-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.959046784045921, 6.410976715685746 ] } },
    { "type": "Feature", "properties": { "Name": "Alex Jetty", "Slug": "alex-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.370075821327147, 6.434807032631495 ] } },
    { "type": "Feature", "properties": { "Name": "Apa Jetty", "Slug": "apa-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.82472986116754, 6.4376149242173 ] } },
    { "type": "Feature", "properties": { "Name": "Boundary Creek Landing", "Slug": "boundary-creek-landing", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.351176624898036, 6.450643590140124 ] } },
    { "type": "Feature", "properties": { "Name": "Bariga  jetty", "Slug": "bariga-jetty", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.399943962582633, 6.528359548270896 ] } },
    { "type": "Feature", "properties": { "Name": "Coconut Landing", "Slug": "coconut-landing", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.336038666103919, 6.438085502784714 ] } },
    { "type": "Feature", "properties": { "Name": "Ebute Ero Jetty", "Slug": "ebute-ero-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.382449164911739, 6.462652511599115 ] } },
    { "type": "Feature", "properties": { "Name": "Commando jetty", "Slug": "commando-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 2.874814700541246, 6.417906598351172 ] } },
    { "type": "Feature", "properties": { "Name": "Ebute Ojo Jetty", "Slug": "ebute-ojo-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.205632146996636, 6.453112636678566 ] } },
    { "type": "Feature", "properties": { "Name": "Epeme Jetty", "Slug": "epeme-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.05044984065335, 6.416273438391651 ] } },
    { "type": "Feature", "properties": { "Name": "Etegbin Jetty", "Slug": "etegbin-jetty", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.143695718298706, 6.449765531944565 ] } },
    { "type": "Feature", "properties": { "Name": "Ijegun Egba Jetty", "Slug": "ijegun-egba-jetty", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.25882193814448, 6.427997844564927 ] } },
    { "type": "Feature", "properties": { "Name": "OKE AFA", "Slug": "oke-afa", "digitalTwin": false }, "geometry": { "type": "Point", "coordinates": [ 3.294202333228415, 6.508725123117111 ] } },
    { "type": "Feature", "properties": { "Name": "Ibasa Jetty", "Slug": "ibasa-jetty", "digitalTwin": true }, "geometry": { "type": "Point", "coordinates": [ 3.255295, 6.424931 ] } }
    ]
    }
    

const digitalTwinJettyIcon = new L.Icon({
  iconUrl: "/boat1.png",
  shadowUrl: iconShadow,
  iconSize: [25, 25],
});

const regularJettyIcon = new L.Icon({
    iconUrl: "/boat5.png",
    shadowUrl: iconShadow,
    iconSize: [25, 25],
  });




export default function MapComponent() {
    const router = useRouter();

  return (
    <MapContainer center={[6.5244, 3.3792]} zoom={12} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {jettyData.features.map((feature, index) => {
        const { coordinates } = feature.geometry;
        const { Name, Slug, digitalTwin } = feature.properties;
        
        // Choose icon based on `digitalTwin` property
        const icon = digitalTwin ? digitalTwinJettyIcon : regularJettyIcon;

        return (
            <Marker
            key={index}
            position={[coordinates[1], coordinates[0]]}
            icon={icon}
            eventHandlers={{
              mouseover: (event) => event.target.openPopup(),
              ...(digitalTwin && { click: () => router.push(`/Jetty/${Slug}`) }),
              mouseout: (event) => event.target.closePopup(),
            }}
          >
            <Popup>{Name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}