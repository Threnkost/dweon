import React, {Component} from 'react';

function MusicHistory(props) {
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