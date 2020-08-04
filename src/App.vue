<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  methods:{
  }
}
</script>

<style>
#app{
  padding: 0;
}
*{
  padding: 0;
  margin: 0;
}
@font-face {font-family: 'iconfont';
    src: url('./icons/iconfont.eot');
    src: url('./icons/iconfont.eot?#iefix') format('embedded-opentype'),
    url('icons/iconfont.woff') format('woff'),
    url('icons/iconfont.ttf') format('truetype'),
    url('icons/iconfont.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>
