import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ContactGoogleMap.css'

const containerStyle = {
  width: "100%",
  height: '400px',
};

const position = {
    lat: 26.14738,
	lng: -80.13143,
};


const onLoad = marker => {
    console.log('marker: ', marker)
  }

const ContactGoogleMap = () => {
  return (
      <div className='contactgoogle-map'>
    <LoadScript
      googleMapsApiKey="AIzaSyBTohMWh3L7Irkf6vk5DxzzEx2VSZppOrM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
      >
           <Marker
      onLoad={onLoad}
      position={position}
    ></Marker>
        
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default React.memo(ContactGoogleMap)