import React from 'react'
import { useEffect, useRef } from 'react';

const UniMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map(mapRef.current, {
           center: [41.312500, 69.279700], 
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl']
          });

          // Marker
          const placemark = new window.ymaps.Placemark(
             [41.312500, 69.279700],
            {
              balloonContent: 'Biz shu yerda joylashganmiz!'
            },
            {
              preset: 'islands#icon',
              iconColor: '#f00'
            }
          );

          map.geoObjects.add(placemark);

        });
      }
    };

    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=YOUR_API_KEY';
      script.type = 'text/javascript';
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div
      ref={mapRef}
      className="unimap"
      style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden' }}
    />
  );
};

export default UniMap;
