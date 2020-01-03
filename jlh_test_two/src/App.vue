<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
  .wrap{
    min-width: 300px;
  }
  .wrap>div{
    margin:0 auto;
    height:125px;
  }
  @media screen and (min-width: 1128px){
    .wrap>div{
      width:1128px;
    }
  }
</style>
