<template>
  <div id="OpenSeadragonviewer" style="width:100%;height:600px"></div>
</template>

<script>
import OpenSeadragon from "openseadragon";

export default {
  name: 'App',
  data() {
    return {
      openSeaDragonViewer:null
    };
  },
  mounted(){
    this.openSeaDragonViewer = new OpenSeadragon({
        id: "OpenSeadragonviewer",
        tileSources: 'https://cvblabservices.htech.upv.es/gigavisionback/static/images/spitzoides/batch_spitzoides_nests/INC_NM_0001.dzi',
        prefixUrl: "https://cvblabservices.htech.upv.es/gigavisionback/lib/openseadragon/images/",
        maxZoomPixelRatio:10,
        showNavigator: true,
        navigatorPosition: "BOTTOM_RIGHT",
        showNavigationControl: false
    });
    this.openSeaDragonViewer.addHandler('open', function () {
        console.log("Opened image")
    });
    this.openSeaDragonViewer.addHandler('open-failed', function () {
        console.error("Error opening image")
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
}
</style>
