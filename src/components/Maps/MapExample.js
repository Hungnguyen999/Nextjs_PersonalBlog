
import { useEffect } from 'react';

const MapExample = ({ lat, lng }) => {
  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Google Maps once the script is loaded
      const myLatlng = new google.maps.LatLng(lat, lng);
      // Use myLatlng as needed, for example, to create a map
    };

    return () => {
      // Clean up: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [lat, lng]);

  return null; // or render your map here
};

export default MapExample;
