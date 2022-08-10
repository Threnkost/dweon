import React, {Component} from 'react';

import lol from './../img/stream/games/lol.png'
import valorant from './../img/stream/games/valorant.webp'
import tft from './../img/stream/games/tft.png'
import csgo from './../img/stream/games/csgo.png'
import fortnite from './../img/stream/games/fortnite.jpg'

import elraenn from './../img/stream/streamers/elraenn.jpg'
import pqueen from './../img/stream/streamers/pqueen.webp'
import wtcn from './../img/stream/streamers/wtcn.jpg'
import jahrein from './../img/stream/streamers/jaho.jpg'
import kendine from './../img/stream/streamers/kendine.webp'
import adal from './../img/stream/streamers/adal.jpg'
import pintipanda from './../img/stream/streamers/pintipanda.jpg'

import thumbnail2 from './../img/stream/games/thumbnail2.webp'

const createGameBox = (name, imgSrc) => {
	return ({name: name, img: imgSrc});
}


class StreamComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stream-page">
				<div style={{display: "flex", gap: 10, alignItems: "center"}}>
					<svg style={{width: 48, height: 48}}className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
					<h1>Yayınlar</h1>
				</div>

				<div className = "stream-content">

					<h2 style={{marginBottom: 20, fontSize: "2.5rem"}}>Popüler oyunlar</h2>

					<div className = "stream-popular-games">
					
						<div className="stream-game-box">
							<img src={lol} alt="" width="128" height="128" />
							<div style={{display: "flex", alignItems:"center", gap: 5}}>
								<svg style={{width: 32, heigth: 32}}className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
								<span className="stream-game-badge">999.9k</span>
							</div>

						</div>

						<div className="stream-game-box">
							<img src={valorant} alt="" width="128" height="128" />
							<div style={{display: "flex", alignItems:"center", gap: 5}}>
								<svg style={{width: 32, heigth: 32}}className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
								<span className="stream-game-badge">999.9k</span>
							</div>
						</div>

						<div className="stream-game-box">
							<img src={csgo} alt="" width="128" height="128" />
							<div style={{display: "flex", alignItems:"center", gap: 5}}>
								<svg style={{width: 32, heigth: 32}}className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
								<span className="stream-game-badge">999.9k</span>
							</div>
						</div>

						<div className="stream-game-box">
							<img src={fortnite} alt="" width="128" height="128" />
							<div style={{display: "flex", alignItems:"center", gap: 5}}>
								<svg style={{width: 32, heigth: 32}}className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
								<span className="stream-game-badge">999.9k</span>
							</div>
						</div>

						<div className="stream-game-box">
							<img src={tft} alt="" width="128" height="128" />
							<div style={{display: "flex", alignItems:"center", gap: 5}}>
								<svg style={{width: 32, heigth: 32}}className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
								<span className="stream-game-badge">999.9k</span>
							</div>
						</div>																							
					</div>
		
					<h2 style={{marginTop: 20, marginBottom: 20, fontSize: "2rem"}}>En iyilerinden</h2>

					<div style={{marginLeft: 20}} className="stream-best-streamers">

						<div className="streamer-box">
							<img src={elraenn} alt="" width="64" height="64"/>
							<div>
								<h3>Elraenn</h3>
								<div style={{display: "flex", alignItems: "center", gap: 5}}>
									<svg style={{width: 24, height: 24, color: "#85929E"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
									<h5 style={{color: "#85929E"}}>333.9k</h5>
								</div>
							</div>
						</div>


						<div className="streamer-box">
							<img src={jahrein} alt="" width="64" height="64"/>
							<div>
								<h3>Jahrein</h3>
								<div style={{display: "flex", alignItems: "center", gap: 5}}>
									<svg style={{width: 24, height: 24, color: "#85929E"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
									<h5 style={{color: "#85929E"}}>333.8k</h5>
								</div>
							</div>
						</div>


						<div className="streamer-box">
							<img src={pqueen} alt="" width="64" height="64"/>
							<div>
								<h3>Pqueen</h3>
								<div style={{display: "flex", alignItems: "center", gap: 5}}>
									<svg style={{width: 24, height: 24, color: "#85929E"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
									<h5 style={{color: "#85929E"}}>333.7k</h5>
								</div>
							</div>
						</div>

						<div className="streamer-box">
							<img src={kendine} alt="" width="64" height="64"/>
							<div>
								<h3>KendineMüzisyen</h3>
								<div style={{display: "flex", alignItems: "center", gap: 5}}>
									<svg style={{width: 24, height: 24, color: "#85929E"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
									<h5 style={{color: "#85929E"}}>333.6k</h5>
								</div>
							</div>
						</div>

						<div className="streamer-box">
							<img src={wtcn} alt="" width="64" height="64"/>
							<div>
								<h3>WtcN</h3>
								<div style={{display: "flex", alignItems: "center", gap: 5}}>
									<svg style={{width: 24, height: 24, color: "#85929E"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
									<h5 style={{color: "#85929E"}}>333.5k</h5>
								</div>
							</div>
						</div>
					</div>

					<div style={{display: "flex", gap: 50}}>
						<h4>Trendler</h4>
						<h4>Keşfet</h4>
						<h4>Favorileriniz</h4>
						<h4>E-Spor</h4>
					</div>				

					<div style={{display: "flex", gap: 30, marginTop: 20, overflowX: "auto", paddingBottom: 10}}>
						<div className = "stream-box">
							<div className = "stream-box-body" id="stream1">
								<div style={{display: "flex", background: "#EC365C", borderRadius: 20, width: 75, justifyContent: "center", alignItems: "center", gap: 5, marginLeft: 5, marginTop: 5}}>
									<svg style={{width: 16, height: 16, color: "white"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
									<p>999k</p>
								</div>
							</div>
							<div className = "stream-box-footer">
								<img style={{borderRadius: 40}} src={elraenn} alt="" width="40" height="40"/>
								<div>
									<h5>Korku gecesi, haydi...!</h5>
									<p style={{color: "#D5DBDB"}}>Elraeen</p>
								</div>
							</div>
						</div>

						<div className = "stream-box">
							<div className = "stream-box-body" id="stream2">
								<div style={{display: "flex", background: "#EC365C", borderRadius: 20, width: 75, justifyContent: "center", alignItems: "center", gap: 5, marginLeft: 5, marginTop: 5}}>
									<svg style={{width: 16, height: 16, color: "white"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
									<p>999k</p>
								</div>
							</div>
							<div className = "stream-box-footer">
								<img style={{borderRadius: 40}} src={adal} alt="" width="40" height="40"/>
								<div>
									<h5>Minecraft Hardcore Devam...</h5>
									<p style={{color: "#D5DBDB"}}>Doğukan Adal</p>
								</div>
							</div>
						</div>

						<div className = "stream-box">
							<div className = "stream-box-body" id="stream3">
								<div style={{display: "flex", background: "#EC365C", borderRadius: 20, width: 75, justifyContent: "center", alignItems: "center", gap: 5, marginLeft: 5, marginTop: 5}}>
									<svg style={{width: 16, height: 16, color: "white"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
									<p>999k</p>
								</div>
							</div>
							<div className = "stream-box-footer">
								<img style={{borderRadius: 40}} src={jahrein} alt="" width="40" height="40"/>
								<div>
									<h5>HoI4 Komünist Rusya devamke...</h5>
									<p style={{color: "#D5DBDB"}}>Jahrein</p>
								</div>
							</div>
						</div>

						<div className = "stream-box">
							<div className = "stream-box-body" id="stream4">
								<div style={{display: "flex", background: "#EC365C", borderRadius: 20, width: 75, justifyContent: "center", alignItems: "center", gap: 5, marginLeft: 5, marginTop: 5}}>
									<svg style={{width: 16, height: 16, color: "white"}} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
									<p>999k</p>
								</div>
							</div>
							<div className = "stream-box-footer">
								<img style={{borderRadius: 40}} src={pintipanda} alt="" width="40" height="40"/>
								<div>
									<h5>Yavaş Yavaş Öğrencez arkadaşlar</h5>
									<p style={{color: "#D5DBDB"}}>PintiPanda</p>
								</div>
							</div>
						</div>

					</div>	
				</div>
			</div>
		);
	}
}

export default StreamComponent;