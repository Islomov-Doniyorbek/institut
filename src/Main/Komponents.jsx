import React from 'react';

import Main from './Main'; 
import Events from './Events';
import ForStudents from './ForStudents';
import Links from './Links';
import UnInfo from './UnInfo';
import About from './About';
import News from './News';
import UniMap from './UniMap';
import Loader from '../Loader';

export default function Komponents() {

  return (
    <>
      <Main />
      <News />
      <Links />
      <UnInfo />
      <Events />
      <About />
      <ForStudents />
      <UniMap/>
    </>
  );
}
