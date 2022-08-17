import React, {Component} from 'react';

import {SongBox} from './SongBox.js';
import PlaylistBox from './PlaylistBox.js';

function Playlists(props) {
  return (
    <div>
      <button className = "playlist-option">
        <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        <h2>Create a playlist</h2>
      </button>

      <button className = "playlist-option">
        <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
        <h2>Import a playlist</h2>
      </button>
      <h1 className = "text-white margin-b-10px">Your playlists</h1>
      <div className = "display-flex flex-column gap-20px">
        <PlaylistBox name="My 1st playlist"/>
        <PlaylistBox name="My 2nd playlist"/>
        <PlaylistBox name="My 3rd playlist"/>
      </div>
    </div>
  );
}

export {Playlists};