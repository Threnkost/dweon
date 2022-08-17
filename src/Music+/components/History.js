import React, {Component} from 'react';

import {SongBox} from './SongBox.js';

function History(props) {
  return (
    <div className="display-flex flex-column gap-20px">
      <h1 className="text-white">History (last 50 songs)</h1>
      {props.content.history.map((song) => {
        return (
          <SongBox />
        );
      })}
    </div>
  );
}


export {History}