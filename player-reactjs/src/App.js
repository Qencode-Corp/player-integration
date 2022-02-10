import { useEffect } from 'react';
import './App.css';

import {qPlayer} from 'qplayer-npm';

function App() {

  useEffect(() => {

    let params = {
      licenseKey: '7f7c5654-7cab-b35b-e6a1-765a330dcff9',
      videoSources: { src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" }
    }    

    // initiate player after component was mounted
    qPlayer("player", params, function(){
      console.log("Player initiated")
    });

  });

  return (
    <div className="App">
      <h1>Qencode Player test</h1>
      <div id="player"></div>
    </div>
  );
}

export default App;
