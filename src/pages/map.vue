<script>
import '@/main'
import bus from "@/lib/bus";
import {onBeforeMount, onMounted} from "vue";

export default {
  name: "map",
  setup() {

    function test() {
      alert(46);
    }

    onBeforeMount(() => {
      bus.off('test', test);
    })

    onMounted(() => {
      bus.on('test', test);
    })
    return {}
  }
}
</script>

<template>
  <div class="map-wrap">
    <div class="map" id="map"></div>
  </div>
</template>

<style scoped>
@import 'maplibre-gl/dist/maplibre-gl.css';

.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>
