import React, {Component, useState} from 'react';


const FriendBox = (props) => {

	const [isExtended, setState] = useState(false);

	const handleClick = (e) => {
		setState(!isExtended);
	}

	return (
		<div className="friend-box">
			<div className="friend-box-header display-flex justify-space-between align-center flex-row" onClick = {handleClick}>
				<div className = "display-flex flex-row gap-10px">
					<div className = "friend-picture" style={{width: 64, height: 64, background: "white"}}></div>
					<div>
						<h3 className = "text-white">{props.name}</h3>
						<h5 style={{color: "#A7A7A7"}}>Listening • {props.song.artist} - {props.song.name}</h5>
					</div>
				</div>
				<svg className="sq-32 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
			</div>
			
			{isExtended && (
				<div className = "friend-box-body">
					<div className = "display-flex flex-row gap-20px">
						<div className = "friend-box-pic-of-song"></div>
						<div>
							<h2 className = "text-white">{props.song.name}</h2>
							<h5 className = "text-gray">{props.song.artist}</h5>
						</div>
					</div>
					<div className = "display-flex flex-row align-center gap-10px">
						<svg className="sq-32 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
						<svg className="sq-32 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>			
						<svg className="sq-32 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
						<svg className="sq-32 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
					</div>
				</div>
			)}

		</div>
	);
}


function Social(props) {
  return (
  	<div className = "display-flex flex-column gap-20px">
	    <h1 className = "text-white">Your friends are listening</h1>

	    <FriendBox name = "Friend" song={{name: "All The Thing She Said", artist: "tatu"}}/>
	    <FriendBox name = "Friend" song={{name: "Song", artist: "Artist"}}/>
	    <FriendBox name = "Friend" song={{name: "Song", artist: "Artist"}}/>
  	</div>
  );
}

export {Social};