import React, {Component} from 'react';


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
				
			</div>
		);
	}
}

export default StreamComponent;