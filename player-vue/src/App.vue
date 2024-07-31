<template>
  <div>
    <h1>Qencode Player test</h1>
    <div id="player"></div>
    <button v-if="this.playerInstanceId" @click="deletePlayer">Delete Player</button>
  </div>
</template>

<script>
import {qPlayer} from 'qplayer-npm';

export default {
  name: 'App',
  data() {
    return {
      playerInstanceId: undefined
    }
  },  
  methods: {
    deletePlayer() {
      console.log("Delete Player")
      if(window.qencodePlayers[this.playerInstanceId]){
        window.qencodePlayers[this.playerInstanceId].dispose();
        delete window.qencodePlayers[this.playerInstanceId];   
        this.setPlayerInstanceId(undefined)
      }
    }, 
    setPlayerInstanceId(playerId){
      this.playerInstanceId = playerId
    }
  },  
  mounted() {    

    let params = {
      //please replace with your Qencode player instance license key
      licenseKey: '12345654-7cab-b35b-e6a1-765a330dcff9',
      videoSources: { src: "https://player-samples.media-storage.us-west.qencode.com/sintel-optimized-hls/playlist.m3u8" }
    }    

    let vm = this;

    // initiate player after component was mounted
    qPlayer("player", params, function(){
      console.log("Player initiated")

      let playerId = this._instanceId;
      console.log("playerId: ", playerId)
      vm.setPlayerInstanceId(playerId)
    });

  },  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
