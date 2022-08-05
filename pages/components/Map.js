import { useEffect } from 'react'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
'pk.eyJ1IjoiaWh1b21hNSIsImEiOiJjbDZldXo5Y3gwYjM5M2JwcmY4cDBneHZ1In0.UeSYGhDz_slrb47wqGbraQ'

const Map = (props) => {
    useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [9.05785, 7.49508],
      zoom: 5,
    });

    if(props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }
    if(props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }
    if(props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }
  }, [props.pickupCoordinates,props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
.setLngLat(coordinates)
.addTo(map);
  }

  return (
    <div id='map' className='map'></div>
  )
}

export default Map