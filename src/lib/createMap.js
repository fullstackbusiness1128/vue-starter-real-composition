import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";

export default function createMap(){
    const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/style.json', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 1 // starting zoom
    });

    return {
        map
    }
}