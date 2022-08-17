import React, {Component} from 'react';
import {MainContext} from './../Context/AccountContext';
import {musicDataAPI} from '../API/MusicPlusAPI.js';

import MusicPlayer from './MusicPlayer';
import {Social} from './components/Social';
import {History} from './components/History';
import {Playlists} from './components/Playlists';
import {Home} from './components/Home';
import {Saves} from './components/Saves';


class MusicPlus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgScale: 52,
      currentContent: 0,
      home: musicDataAPI.getHome(),
      buttons: {
        0: "main-btn",
        1: "social-btn",
        2: "playlist-btn",
        3: "saves-btn",
        4: "history-btn",
      },
      contents: {
        0: [
          Home,
          {
            playQuicklyList: musicDataAPI.getPlayQuicklyList(),
            recommendedArtists: musicDataAPI.getRecommendedArtists(),
            favouriteSongs: musicDataAPI.getFavouriteSongs(),
          },
        ],
        1: [Social, {}],
        2: [Playlists, {}],
        3: [Saves, {}],
        4: [History, { history: musicDataAPI.getHistory() }],
      },
    };
  }

  componentDidMount() {
    document.body.style.background = "#142039";
    document.title = "Dweon Music+";

    document.querySelector(".sidebar").background = "#1F618D";
    document.querySelector(".sidebar-bg").background = "#2980B9";

    this.updateButtons();

  }

  componentDidUpdate() {
    this.updateButtons();
  }

  updateButtons = () => {
    for (const key in this.state.buttons) {
      let btnID = document.querySelector(`#${this.state.buttons[key]}`);
      btnID.style.background =
        this.state.currentContent == key ? "#1B4F72" : "none";

      //console.log(`${key} : ${this.state.buttons[key]}`);
    }
  };

  handleClick = (id, event) => {
    this.setState({
      ...this.state,
      currentContent: id,
    });
  };

  render() {
    const content = this.state.contents[this.state.currentContent][1];
    const ContentToRender = this.state.contents[this.state.currentContent][0];
    return (
      <MainContext.Consumer>
        {(value) => {
          return (
            <div className="music-plus display-flex flex-row">
              <div
                className="display-flex flex-column align-center gap-10px"
                style={{
                  width: 16 * this.state.imgScale,
                  height: 9 * this.state.imgScale,
                }}
              >
                <div
                  style={{
                    maxWidth: 16 * this.state.imgScale,
                    maxHeight: 9 * this.state.imgScale,
                    position: "relative",
                  }}
                >
                  <img
                    src={this.state.home.albume}
                    alt=""
                    width={16 * this.state.imgScale}
                    height={9 * this.state.imgScale}
                  />
                  <div
                    id="image-cover"
                    style={{
                      width: 16 * this.state.imgScale,
                      height: 9 * this.state.imgScale,
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  ></div>
                </div>
                <MusicPlayer />
              </div>

              <div
                className="display-flex flex-column"
                style={{
                  height: "100vh",
                  position: "absolute",
                  right: 0,
                  borderBox: "box-sizing",
                }}
              >
                <div className="music-plus-head display-flex flex-row justify-space-evenly">
                  <button
                    id="main-btn"
                    className="music-plus-menu-btn"
                    onClick={this.handleClick.bind(this, 0)}
                  >
                    <svg
                      className="square-32px w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    id="social-btn"
                    className="music-plus-menu-btn"
                    onClick={this.handleClick.bind(this, 1)}
                  >
                    <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  </button>
                  <button
                    id="playlist-btn"
                    className="music-plus-menu-btn"
                    onClick={this.handleClick.bind(this, 2)}
                  >
                    <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
                  </button>
                  <button
                    id="saves-btn"
                    className="music-plus-menu-btn"
                    onClick={this.handleClick.bind(this, 3)}
                  >
                    <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                  </button>
                  <button
                    id="history-btn"
                    className="music-plus-menu-btn"
                    onClick={this.handleClick.bind(this, 4)}
                  >
                    <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </button>
                </div>
                <div
                  className="music-plus-body display-flex flex-column gap-20px"
                  style={{ overflowY: "auto", height: 590 }}
                >
                  {<ContentToRender content={content} />}
                </div>
              </div>
            </div>
          );
        }}
      </MainContext.Consumer>
    );
  }
}


export default MusicPlus;