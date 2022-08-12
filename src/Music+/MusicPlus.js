import {React, Component} from 'react';
import {MainContext} from './../Context/AccountContext';
import {musicDataAPI} from '../API/MusicPlusAPI.js';


import img from '../img/music+/albumes/three_days_grace.jpg';


function MusicHistory(props) {
    return (
        <div className = "display-flex flex-column">
            <h1 className = "text-white">History (last 50 songs)</h1>
            {
                props.content.history.map(song => {
                    return (
                        <div className = "music-plus-song display-flex flex-row align-center gap-10px">
                            <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <h3>{song.name}</h3>
                                <h5 style={{color: "#A7A7A7"}}>{song.artist}</h5>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}


function SavedSongs(props) {
    return (
        <h1 className = "text-white">Kaydettikleriniz</h1>
    );
}


function Playlists(props) {
    return (
        <h1 className = "text-white">Oynatma listeleri</h1>
    );
}


function Social(props) {
    return (
        <h1 className = "text-white">Arkadaşların ne dinliyor?</h1>
    );
}


function Menu(props) {
    return (
        <div>
            <h1 className = "text-white">Play quickly</h1>
            <div className = "display-flex flex-row align-center gap-30px" >
                {
                    props.content.playQuicklyList.map(song => {
                        return (
                            <div className = "song-cover-box display-flex flex-column align-center">
                                <img className = "img-pill margin-b-10px" src={song.pic} alt="" width="72" height="72"/>
                                <p style={{fontSize: "0.9rem"}} className = "text-white">{song.name}</p>
                                <p style={{color: "#A6A6A6", fontSize: "0.75rem"}}>{song.artist}</p>
                            </div>);
                        })
                }
            </div>                       
            <h1 className = "text-white" >You always listen</h1>
            <div className = "display-flex flex-row gap-30px" >
                {
                    props.content.favouriteSongs.map(song => {
                        return (
                            <div className = "song-cover-box display-flex flex-column align-center">
                                <img className = "img-pill margin-b-10px" src={song.logo} alt="" width="72" height="72"/>
                                <p style={{fontSize: "0.9rem"}} className = "text-white">{song.name}</p>
                                <p style={{color: "#A6A6A6", fontSize: "0.75rem"}}>{song.artist}</p>
                            </div>
                        );
                    })
                }
            </div>
            <h1 className = "text-white" >Take a look at these artists</h1>
            <div className = "display-flex flex-row gap-30px" >
                {
                    props.content.recommendedArtists.map(artist => {
                        return (
                            <div className = "song-cover-box display-flex flex-column align-center">
                                <img className = "img-pill margin-b-10px" src={artist.logo} alt="" width="72" height="72" />
                                <p style={{fontSize: "0.9rem"}} className = "text-white">{artist.name}</p>
                                <p style={{color: "#A6A6A6", fontSize: "0.75rem"}}>{artist.category}</p>
                            </div>
                        );
                    })
                }
            </div>
            <h1 className = "text-white" >We thought you'd like it</h1>
            <h1 className = "text-white" >Popular recently</h1>
        </div>
    );
}


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
                4: "history-btn"
            },
            contents: {
                0: [Menu, {playQuicklyList:musicDataAPI.getPlayQuicklyList(), recommendedArtists:musicDataAPI.getRecommendedArtists(), favouriteSongs:musicDataAPI.getFavouriteSongs()}],
                1: [Social, {}],
                2: [Playlists, {}],
                3: [SavedSongs, {}],
                4: [MusicHistory, {history: musicDataAPI.getHistory()}] 
            }
        };
    }

    componentDidMount() {
        document.body.style.background = "#142039";
        document.title                 = "Dweon Music+";

        document.querySelector(".sidebar").background    = "#1F618D";
        document.querySelector(".sidebar-bg").background = "#2980B9";

        this.updateButtons();
    }

    componentDidUpdate() {
        this.updateButtons();
    }

    updateButtons = () => {
        for(const key in this.state.buttons) {
            let btnID = document.querySelector(`#${this.state.buttons[key]}`);
            btnID.style.background = this.state.currentContent == key ? "#1B4F72" : "none";

            //console.log(`${key} : ${this.state.buttons[key]}`);
        }        
    }

    handleClick = (id, event) => {

        this.setState({
            ...this.state,
            currentContent: id
        });

    }

    render() {
        const content         = this.state.contents[this.state.currentContent][1];
        const ContentToRender = this.state.contents[this.state.currentContent][0];
        return (
            <MainContext.Consumer>
                {
                    value => {
                        return (
                            <div className = "music-plus display-flex flex-row">

                                <div className = "display-flex flex-column align-center gap-10px" style={{width: 16*this.state.imgScale, height: 9*this.state.imgScale}}>
                                    <div style={{maxWidth: 16*this.state.imgScale, maxHeight: 9*this.state.imgScale, position: "relative"}}>
                                        <img src={this.state.home.albume} alt="" width={16*this.state.imgScale} height={9*this.state.imgScale}/>
                                        <div id="image-cover" style={{width: 16*this.state.imgScale, height: 9*this.state.imgScale, position:"absolute", top: 0, left: 0}}></div>
                                    </div>
                                    <div className = "music-player-box display-flex justify-center align-center flex-row gap-20px" style={{width: 700, padding: 20, borderRadius: 20}}>
                                        <img src={img} alt="" width="128" height="128" style={{borderRadius: 10}}/>
                                        <div className = "display-flex flex-column align-center gap-10px">
                                            <h3 className = "text-white" className = "animated-text">Believer</h3>
                                            <h5 style={{color: "#A6A6A6", marginBottom: 10}}>Imagine Dragons</h5>
                                            <div className = "display-flex flex-row justify-center align-center gap-50px">
                                                <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>                                            
                                                <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"></path></svg>
                                                <svg className="square-48px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                                                <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"></path></svg>
                                                <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path></svg>
                                            </div>
                                            <div style={{height: 5, width: 570, background: "white", borderRadius: 20}}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className = "display-flex flex-column" style={{height: "100vh", position: "absolute", right: 0, borderBox: "box-sizing"}}>
                                    <div className = "music-plus-head display-flex flex-row justify-space-evenly">
                                        <button id="main-btn" className = "music-plus-menu-btn" onClick={this.handleClick.bind(this, 0)}>
                                            <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>                                        
                                        </button>
                                        <button id="social-btn" className = "music-plus-menu-btn" onClick={this.handleClick.bind(this, 1)}>
                                            <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                                        </button>
                                        <button id="playlist-btn" className = "music-plus-menu-btn" onClick={this.handleClick.bind(this, 2)}>
                                            <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                        </button>
                                        <button id="saves-btn" className = "music-plus-menu-btn" onClick={this.handleClick.bind(this, 3)}>
                                            <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path></svg>
                                        </button>
                                        <button id="history-btn" className = "music-plus-menu-btn" onClick={this.handleClick.bind(this, 4)}>
                                            <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                    <div className = "music-plus-body display-flex flex-column gap-20px" style={{overflowY: "auto", height: 590}}>
                                        {<ContentToRender content = {content}/>}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            </MainContext.Consumer>
        );
    }
}

export default MusicPlus;