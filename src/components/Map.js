import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

const Map = () => {
    const [viewport, setViewport] = useState({
        longitude: null,
        latitude: null,
        zoom: 10,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setViewport({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                    zoom: 14,
                });
            },
            (error) => {
                console.error("Error getting user location:", error);
            }
        );
        console.log(viewport);
    }, [viewport, viewport.longitude, viewport.latitude]);



    const mapContainer = useRef(null);
    const map = useRef(null);
    const myLoc = { lng: viewport.latitude, lat: viewport.longitude };

    const [zoom] = useState(14);
    maptilersdk.config.apiKey = 'gewWsD16NesKhv75SiBa';

    useEffect(() => {
        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [viewport.longitude, viewport.latitude],
            zoom: zoom
        });

        new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([viewport.longitude, viewport.latitude])
            .addTo(map.current);

}, [viewport.longitude, viewport.latitude, zoom]);


console.log('loc', myLoc.lng, myLoc.lat);

return (
    <div className="map-wrap">
        <div ref={mapContainer} className="map" />
    </div>
)
}

export default Map