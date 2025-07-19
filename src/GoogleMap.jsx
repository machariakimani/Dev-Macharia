/*
const GoogleMap = ({ location, zoom = 15 }) => {
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(location)}&zoom=${zoom}`;
  
  return (
    <iframe
      width="100%"
      height="200"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={embedUrl}
    />
  );
};

export default GoogleMap  */


import React from 'react';

const GoogleMap = ({ location = "Juja, Kiambu County, Kenya" }) => {
  // This uses Google's basic embed - no API key needed but limited customization
  const mapSrc = `https://maps.google.com/maps?width=100%25&height=400&hl=en&q=${encodeURIComponent(location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapSrc}
        title="Google Map"
      />
    </div>
  );
};

export default GoogleMap;