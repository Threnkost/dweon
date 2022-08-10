import {React, Component} from 'react';
import {MainContext} from './../Context/AccountContext';

import Rammstein from './../img/music+/albumes/rammstein.jpg';


function group(id, name, category, img) {
    return {name: name, category: category, img: img};
}


class MusicPlus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recommendedGroups: [
                group(0, "Rammstein", "Metal & Rock", require("../img/music+/albumes/rammstein.jpg")),
                group(1, "Three Days Grace", "Metal & Rock", require("../img/music+/albumes/three_days_grace.jpg")),
                group(2, "Evanescence", "Metal & Rock", require("../img/music+/albumes/evanescence.jpg")),
                group(3, "Imagine Dragons", "Karışık", require("../img/music+/albumes/imagine_dragons.jpg")),
                group(4, "Halsey", "Pop", require("../img/music+/albumes/halsey.jpg")),
                group(5, "Eminem", "Rap", require("../img/music+/albumes/eminem.jpg")),
            ],

            favouriteSongs: [
                {name: "Pain", band: "Three Days Grace", img: require("../img/music+/albumes/three_days_grace.jpg")},
                {name: "Enemy", band: "Imagine Dragons", img: require("../img/music+/albumes/imagine_dragons.jpg")},
                {name: "Believer", band: "Imagine Dragons", img: require("../img/music+/albumes/imagine_dragons.jpg")},
                {name: "Get Out Alive", band: "Three Days Grace", img: require("../img/music+/albumes/three_days_grace.jpg")},
                {name: "Gasoline", band: "Halsey", img: require("../img/music+/albumes/halsey.jpg")}
            ],
            isPlaylistVisible: false,
            currentSong: {
                name: "Engel",
                band: "Rammstein",
                picture: require("../img/music+/albumes/rammstein.jpg")
            }
        };
    }

    handlePlaylist = () => {
        this.setState({
            ...this.state,
            isPlaylistVisible: !this.state.isPlaylistVisible
        });
    }

    componentDidMount() {
        document.body.style.background = "#142039";
    }

    render() {
        return (
            <MainContext.Consumer>
                {
                    value => {
                        console.log(value.music);

                        return (
                            <div className = "music-plus">
                                <div className = "display-flex align-center margin-b-30px">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="square-64px h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" /></svg>
                                    <h1 className="text-white">Müzik</h1>
                                </div>
                                <aside id="music-plus-sidebar">
                                    <div style={{marginBottom: 100}} className="display-flex flex-row justify-center align-center gap-10px">
                                        <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path></svg>
                                        <h1 className = "text-white">Oynatılıyor</h1>
                                    </div>
                                    <img src={this.state.currentSong.picture} className = "margin-b-10px" alt="" width="196" height="196" />
                                    <h1 className = "text-white">{this.state.currentSong.name}</h1>
                                    <p style={{color: "#A3A3A3", fontSize: "1.15rem"}}>{this.state.currentSong.band}</p>

                                    <div className = "display-flex flex-row justify-space-between align-center" style={{marginTop: 20, gap: 150}}>
                                        <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                        <svg className="square-32px w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>                                    
                                    </div>

                                    <div className = "display-flex align-center" style={{height: 5, width: 300, marginTop: 20, marginBottom: 20, background: "white", borderRadius: 50, position: "relative"}}>
                                        <div style={{height: 16, width: 16, borderRadius: 16, background: "white", position: "absolute", left: 50}}></div>
                                    </div>

                                    <div className = "music-player display-flex flex-row justify-space-between align-center gap-50px">
                                        <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"></path></svg>
                                        <svg className="square-64px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg> 
                                        <svg className="square-32px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"></path></svg>
                                    </div>
                                </aside>
                                <div className = "display-flex flex-column margin-h-50px gap-10px">

                                    <div>
                                        <h1 className = "text-white margin-b-10px">Sizin için önerdiğimiz gruplar</h1>
                                        <div className = "display-flex flex-row gap-30px margin-h-30px margin-b-30px">

                                            {
                                                this.state.recommendedGroups.map(band => {
                                                    return (
                                                        <div key={band.id} className = "recommended-band display-flex flex-column justify-center align-center">
                                                            <img src = {band.img} alt = "" width="96" height="96" className = "margin-b-10px"/>
                                                            <p>{band.name}</p>
                                                            <p style={{color: "#A7A7A7"}}>{band.category}</p>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>

                                        <h1 className = "text-white margin-b-10px">En çok dinlediğiniz 5 şarkı</h1>
                                        <div className = "display-flex flex-row gap-30px margin-h-30px margin-b-30px">
                                            {
                                                this.state.favouriteSongs.map(song => {
                                                    return (
                                                        <div key={song.name} className = "recommended-band recommended-song display-flex flex-column justify-center align-center">
                                                            <img src = {song.img} alt = "" width="96" height="96" className = "margin-b-10px"/>
                                                            <p style={{fontWeight: "bold"}}>{song.name}</p>
                                                            <p style={{color: "#BFC9CA"}}>{song.band}</p>
                                                            <svg className="play-button w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                                            <div className="image-cover"></div>
                                                        </div>
                                                    );                                              
                                                })
                                            }
                                        </div>
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