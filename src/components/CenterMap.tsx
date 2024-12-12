import { useMap } from 'react-leaflet';

interface CenterMapProps {
  coords: [number, number] | null;
}

const CenterMap: React.FC<CenterMapProps> = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 15, { // cambiar metodo setview por flyto
      animate: true, // activa la animacion
      //duration: 1.5, // duracion del vuelo en segundos
    });
  }
  return null;
};

export default CenterMap;
