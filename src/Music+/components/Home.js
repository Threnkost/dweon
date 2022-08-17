import React, {Component} from 'react';

import {SongBox} from './SongBox.js';


function Home(props) {
  return (
    <div className = "display-flex flex-column gap-10px">
      <h1 className="text-white">Play quickly</h1>
      <div className="display-flex flex-row align-center gap-30px" style={{boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)"}}>
        {props.content.playQuicklyList.map((song) => {
          return (
            <div className="song-cover-box display-flex flex-column align-center">
              <img
                className="img-pill margin-b-10px"
                src={song.pic}
                alt=""
                width="72"
                height="72"
              />
              <p style={{ fontSize: "0.9rem" }} className="text-white">
                {song.name}
              </p>
              <p style={{ color: "#A6A6A6", fontSize: "0.75rem" }}>
                {song.artist}
              </p>
            </div>
          );
        })}
      </div>
      <h1 className="text-white">You always listen</h1>
      <div className="display-flex flex-row gap-30px" style={{boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)"}}>
        {props.content.favouriteSongs.map((song) => {
          return (
            <div className="song-cover-box display-flex flex-column align-center">
              <img
                className="img-pill margin-b-10px"
                src={song.logo}
                alt=""
                width="72"
                height="72"
              />
              <p style={{ fontSize: "0.9rem" }} className="text-white">
                {song.name}
              </p>
              <p style={{ color: "#A6A6A6", fontSize: "0.75rem" }}>
                {song.artist}
              </p>
            </div>
          );
        })}
      </div>
      <h1 className="text-white">Take a look at these artists</h1>
      <div className="display-flex flex-row gap-30px" style={{boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)"}}>
        {props.content.recommendedArtists.map((artist) => {
          return (
            <div className="song-cover-box display-flex flex-column align-center">
              <img
                className="img-pill margin-b-10px"
                src={artist.logo}
                alt=""
                width="72"
                height="72"
              />
              <p style={{ fontSize: "0.9rem" }} className="text-white">
                {artist.name}
              </p>
              <p style={{ color: "#A6A6A6", fontSize: "0.75rem" }}>
                {artist.category}
              </p>
            </div>
          );
        })}
      </div>
      <h1 className="text-white">We thought you'd like it</h1>
      <h1 className="text-white">Popular recently</h1>
    </div>
  );
}


export {Home};