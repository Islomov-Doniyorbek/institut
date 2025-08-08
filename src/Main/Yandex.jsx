import React from 'react';
// import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';

const Yandex = () => {
  return (
    <div className='map_box'>
      {/* <YMaps query={{ lang: 'ru_RU' }}>
        <Map
          defaultState={{
            center: [41.314264, 69.255354],
            zoom: 15,
          }}
          style={{ width: '100%', height: '400px' }}
          modules={['control.ZoomControl']}
          options={{
            controls: ['zoomControl'],
          }}
        >
            <ZoomControl/>
          <Placemark geometry={[41.314264, 69.255354]} />
        </Map>
      </YMaps> */}
    </div>
  );
};

export default Yandex;