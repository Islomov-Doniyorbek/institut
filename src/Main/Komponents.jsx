import React from 'react';

import Main from './Main'; 
import Events from './Events';
import ForStudents from './ForStudents';
import Links from './Links';
import UnInfo from './UnInfo';
import About from './About';
import News from './News';
import Yandex from './Yandex';
import MapComponent from '../components/map';
import TranslateWidget from '../lang';



export default function Komponents() {
const myPosition = [41.31486199711899, 69.25684069273231];
  return (
    <>
    {/* <TranslateWidget/> */}
      <Main />
      <News />
      <Links />
      <UnInfo />
      <Events />
      <About />
      <ForStudents />
      <MapComponent position={myPosition}/>
    </>
  );
}
