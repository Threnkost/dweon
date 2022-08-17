import React, {Component} from 'react';

import {SongBox} from './SongBox.js';


function Saves(props) {
  return (
    <div>
      <h1 className = "text-white" style={{marginBottom: 20}}>Saved songs</h1>
      
      <div className = "display-flex flex-column gap-20px">
        
        <SongBox />
        <SongBox />
        <SongBox />
        <SongBox />
        <SongBox />
        <SongBox />

      </div>

    </div>
  );
}


export {Saves};