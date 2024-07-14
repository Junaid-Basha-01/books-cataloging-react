import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Love from './Love';
import Kids from './Kids'
import Classics from './Classics';
import Thrillers from './Thrillers';

function HomePageRecommendations() {
    return (
    <>
      <p className='text-3xl font-bold'>Romance</p>
      <Love/>   
      <p className='text-3xl font-bold'>Kids</p>
      <Kids/>
      <p className='text-3xl font-bold'>Classics</p>
      <Classics/>
      <p className='text-3xl font-bold'>Thrillers</p>
      <Thrillers/>
    </>
  )
}

export default HomePageRecommendations