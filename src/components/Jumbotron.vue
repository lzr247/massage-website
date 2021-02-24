<template>
  <div ref="jumbotron" id="jumbotron">
        <div id="imeStruka">
          <h1>Milutinović Nenad</h1>
          <h3>Strukovni fizioterapeut</h3>
        </div>
        <parallax :speed-factor="0.3" breakpoint="(min-width: 80px)">
            <div id="jumbotronPozadina"></div>
        </parallax>
    </div>
</template>
<script>
import Parallax from 'vue-parallaxy';
export default {
  name:"Jumbotron",
    components:{
        Parallax
    },
}
</script>
<style lang="scss" scoped>
#jumbotron{
  color: white;
  position: relative;
  height: 150px;
  background-color: rgba(29, 141, 141, 0.9);
  position: relative;
}
#jumbotronPozadina{
  background: linear-gradient(20deg,#3FABAD 60%, #1DA3A6 40%);
  height: 300px;
  width:100%;
  z-index: 500;
  position: absolute;
}
#imeStruka{
  position: absolute;
  top:30%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}
h1{
  font-size: 28px;
  letter-spacing: 2.5px;
  font-weight: bold;
}
h3{
  font-size: 18px;
  letter-spacing: 1.5px;
}
</style>