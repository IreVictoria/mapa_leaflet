import { Marker } from 'react-leaflet';
import SitePopup from './SitePopup';
import L from "leaflet"; 
import 'leaflet/dist/leaflet.css'; 

//definir forma o estructura de un objeto junto con las propiedades que va a tener 
interface MarkerListProps {
  sites: { position: [number, number]; name: string }[];
}

const IconMarker= new L.Icon({
  iconUrl:('src/assets/peluqueria (2).png'),
  iconSize: [40,40], // tamaño del icono
  iconAnchor: [15, 40], // punto del icono que se alinea con la posicion 
  popupAnchor: [0,-40] // ajusta la posicion del popup relativo al icono
})

const MarkerList: React.FC<MarkerListProps> = ({ sites }) => {
  return (
    <>
      {sites.map((site, index) => (
        <Marker key={index} position={site.position} icon={IconMarker} >
          <SitePopup site={site} />
        </Marker>
      ))}
    </>
  );
};

export default MarkerList;
