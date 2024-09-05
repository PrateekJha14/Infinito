import React from 'react'
import "./hero.css";
import Card from './Card';
import bigfm from "./927bigfm.png";
import events from "./events.png"
const Hero = () => {
  return (
    <div className='herodiv'>
      <h1 id="heading1" className='heading svelte-1suma1w'><span  className='heading_inside atmos svelte-1suma1w'>INFINITO'24</span> IS SPONSERED BY</h1>
      <div className='heroinnerdiv'>
        <Card top="Powered by" img={bigfm} bottom="92.7 BIG FM"/>
        <Card top="Powered By" img={events} bottom="THE COMMUNITY EVENTS"/>
      </div>
      
      

    </div>
  )
}

export default Hero;
