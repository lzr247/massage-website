<template>
  <div id="app">
    <router-view/>
  </div>

</template>

<script>
export default {
  name:"app",
  components:{

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Cabin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-y: hidden;
}
@media screen and (min-height:1230px) {
  #paralax > div > div > img{
    height: 1000px;
  }
}

</style>
