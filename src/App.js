import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css';

const iceCreamIcon = new L.Icon({
  iconUrl: require('./img/icon/ice-cream-icon.png'),
  iconRetinaUrl: require('./img/icon/ice-cream-icon.png'),
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const softIceIcon = new L.Icon({
  iconUrl: require('./img/icon/soft-ice-icon.png'),
  iconRetinaUrl: require('./img/icon/soft-ice-icon.png'),
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const sundaeIcon = new L.Icon({
  iconUrl: require('./img/icon/sundae-icon.png'),
  iconRetinaUrl: require('./img/icon/sundae-icon.png'),
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const cakeSliceIcon = new L.Icon({
  iconUrl: require('./img/icon/cake-slice-icon.png'),
  iconRetinaUrl: require('./img/icon/cake-slice-icon.png'),
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});



function CyclingCulinaricChemnitz() {

  const [places, setIceCreamShops] = useState([
    { id: 1, icon: iceCreamIcon, name: 'Eis-Café Lunzenau', date: "2025-03-06", position: [50.961954, 12.756064], adress: "Markt 11, 09328 Lunzenau", openingHours: null, description: null, komoot: null },
    { id: 2, icon: softIceIcon, name: 'Softeisdiele Hartha', date: null, position: [51.093884, 12.974721], adress: "Franz-Mehring-Straße 4, 04746 Hartha", openingHours: null, description: null, komoot: null },
    { id: 3, icon: iceCreamIcon, name: 'Bäckerei Förster', date: null, position: [50.836005, 12.519606], adress: "Siemensstraße 8, 08371 Glauchau", openingHours: "Mo-Sa: 06-17 Uhr; So: 13-17 Uhr", description: null, komoot: null },
    { id: 4, icon: sundaeIcon, name: 'Bistro & Eiscafe Zur Mel', date: null, position: [50.496214, 12.596914], adress: "Schulstraße 5, 08309 Eibenstock", openingHours: "Di-So: 11-17 Uhr", description: null, komoot: null },
    //{ id: 5, icon: null, name: 'Bravo Eiscafe & Bistro - Vollmershain', date: null, position: [50.851029, 12.306548], adress: "Dorfstraße 70, 04626 Vollmershain", openingHours: "Di-Fr: 14-22 Uhr; Sa: 13-21 Uhr; So: 12-19 Uhr", description: null, komoot: null },
    { id: 6, icon: iceCreamIcon, name: 'Eisdiele Dietz', date: null, position: [50.780604, 12.699031], adress: "Hauptstraße 6, 09355 Gersdorf", openingHours: null, description: null, komoot: null },
    //{ id: 7, icon: null, name: 'Corina Heil Eiscafé Fantasy', date: "2024-02-01", position: [50.802148, 12.706420], adress: "Altmarkt 32, 09337 Hohenstein-Ernstthal", openingHours: "Di: 12:30-18 Uhr; Mi: 11-18 Uhr; Do-So: 12:30-18 Uhr", description: null, komoot: null },
    //{ id: 8, icon: null, name: 'Hübschmann\'s Eislädl', date: null, position: [50.724041, 13.092184], adress: "Alte Marienberger Str. 2, 09432 Großolbersdorf", openingHours: "Sa-So: 14-18 Uhr", description: null, komoot: null },
    //{ id: 9, icon: null, name: 'Eiscafé Börner', date: null, position: [50.859117, 13.167559], adress: "Lange Str. 22, 09569 Oederan", openingHours: null, description: null, komoot: null },
    { id: 10, icon: sundaeIcon, name: 'Eis-Cafe Bartsch', date: null, position: [50.5148685, 13.088929], adress: "Annaberger Str. 15, 09477 Jöhstadt", openingHours: "Do-Di: 13-21 Uhr", description: null, komoot: null },
    //{ id: 11, icon: null, name: 'Café EISMAIK', date: "2024-06-01", position: [50.93346789087332, 12.70526250737209], adress: "Brückenstraße 24, 09322 Penig", openingHours: "Di-Do: 13-18 Uhr; Sa-So: 13-18 Uhr", description: null, komoot: null }
    { id: 12, icon: cakeSliceIcon, name: 'Konditorei & Café Frieder Scheibner', date: '2025-03-13', position: [51.102341, 12.331959], adress: 'Bornaer Str. 2, 04613 Lucka', openingHours: null, description: 'Wunderschöner kleiner privater Bäcker mit wenigen gemütlichen Sitzplätzen vor der Tür. Hier werden die Kuchen noch von Hand gebacken. Bietet sich gut an auf einer schönen, flachen Runde durchs Leipziger Seenland.', komoot: '<iframe src="https://www.komoot.com/de-de/tour/1135098425/embed?share_token=a7pSj8pKSsj0QEJyIG37wrn8zwxyH2y3tNB2R2sJEjMb2EHhSU&profile=1" width="100%" height="400" frameborder="0" scrolling="no"></iframe>' },
    { id: 13, icon: cakeSliceIcon, name: 'Café Adelklause (Café "Adelheid")', date: '2025-03-13', position: [50.752178, 13.4005232], adress: 'Hauptstraße 249, 09619 Dorfchemnitz', openingHours: 'Di,Mi,Sa: 14-17 Uhr', description: null, komoot: null },
    { id: 14, icon: cakeSliceIcon, name: 'Cafe Richter - Inhaber Uwe Mai', date: '2025-03-13', position: [50.621770, 12.301487], adress: 'Bahnhofstraße 13, 08468 Reichenbach im Vogtland', openingHours: 'Mo-So: 07-18 Uhr', description: null, komoot: null },
  ]);

  return (
    <div>
      <h1>CyclingCulinaricChemnitz</h1>
      <MapContainer
        center={[50.833707, 12.919187]}
        zoom={11}
        style={{ height: '700px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {places.map((place) => {
          return (

            <Marker
              key={place.id}
              position={place.position}
              icon={place.icon}
            >
              <Popup>
                <div>
                  <h2>{place.name}</h2>
                  <p>{place.description}</p>
                  <div dangerouslySetInnerHTML={{ __html: place.komoot }} />
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default CyclingCulinaricChemnitz;
