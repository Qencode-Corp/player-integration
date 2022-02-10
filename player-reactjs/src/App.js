import { useEffect, useState } from 'react';
import './App.css';

import {qPlayer} from 'qplayer-npm';

function App() {

  const [playerInstanceId, setPlayerInstanceId] = useState(undefined); 

  useEffect(() => {

    let params = {
      licenseKey: '7f7c5654-7cab-b35b-e6a1-765a330dcff9',
      videoSources: { src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" }
    }    

    // initiate player after component was mounted
    qPlayer("player", params, function(){
      console.log("Player initiated")

      let playerId = this._instanceId;
      setPlayerInstanceId(playerId)
    });

  },[]);

  const deletePlayer = () => {
    if(window.qencodePlayers[playerInstanceId]){
      window.qencodePlayers[playerInstanceId].dispose();
      delete window.qencodePlayers[playerInstanceId];   
      setPlayerInstanceId(undefined)
    }
  }

  return (
    <div className="App">
      <h1>Qencode Player test</h1>
      <div id="player"></div>

      {
        playerInstanceId && <button onClick={() => deletePlayer()}>Delete Player</button>
      }
      
    </div>
  );
}

export default App;
