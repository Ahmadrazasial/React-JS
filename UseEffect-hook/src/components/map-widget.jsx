import 'leaflet/dist/leaflet.css';
import { Map, TileLayer } from 'leaflet';
// console.log(leaflet)

export class MapWidget {
    constructor(domnode) {
        this.map = new Map(domnode, {
            zoomControl: false,
            doubleClickZoom: false,
            boxZoom: false,
            keyboard: false,
            scrollWheelZoom: false,
            zoomAnimation: false,
            touchZoom: false,
            zoomSnap: 0.1
        });
        new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(this.map)
        this.map.setView([0, 0], 0)
    }
    setZoom(level) {
        this.map.setZoom(level)
    }
}