import React, {Component} from 'react';


import img from '../../img/music+/albumes/halsey.jpg';


function SongBox(props) {

  return (
        <div className = "display-flex flex-row align-center gap-10px" style={{background: "#154360", height: 100, justifyContent: "space-between", paddingLeft: 10, paddingRight: 10, boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
          <div className = "display-flex flex-row align-center gap-10px">
            <div className = "img-box" style={{width: 64, height: 64}}>
              <img src={img} alt="" width="64" height="64" />
              <div className = "img-cover" style={{width: 64, height: 64}}>
                <svg className = "img-box-play-btn w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              </div>
            </div>
            <div className = "display-flex flex-column gap-10px">  
              <h2>Song</h2>
              <h5 style={{color: "#A7A7A7"}}>Artist • 999,999,999 played</h5>
            </div>
          </div>
          <div className = "display-flex flex-row align-center gap-10px">
            <svg className="sq-24 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>
            <svg className="sq-24 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
            <svg className="sq-24 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
            <svg className="sq-24 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </div>
        </div>
  );
}


export {SongBox};