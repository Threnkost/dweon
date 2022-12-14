import {data} from '../Data/Music+/data.js';


function MusicDataAPI() {

	this.getHome               = () => {return data.home;}
	this.getPlayQuicklyList       = () => {return data.playQuicklyList;}
	this.getFavouriteSongs     = () => {return data.favouriteSongs;}
	this.getRecommendedArtists = () => {return data.recommendedArtists;}
	this.getHistory            = () => {return data.history;}
}

const musicDataAPI = new MusicDataAPI();

export {musicDataAPI};