<template>
  <div id="app">
    <el-container>
        <el-aside width="200px" class="sideNav">
            <side-nav />
          </el-aside>
        <el-container class="mainy">
          <el-header class="heady" style="height:30px;">
            supercalifragilistic'expiali'docious
          </el-header>
          <el-main class="content">
            <contenty />
          </el-main>
          <el-footer class="footy">
            <footy />
          </el-footer>
        </el-container>
        
        
    </el-container>
    
  </div>
</template>

<script>

import SideNav from './sideNav'
import Contenty from './content'
import Footy from './footy'

export default {
  name: 'App',
  components: {
    SideNav,
    Contenty,
    Footy
  },
  methods: {
    tabClick(tab){
      console.log(tab.name);
    }
  }
}
</script>

<style>
html,body{
  margin: 0; padding: 0;
  height: 100%;
}
#app {
  box-sizing: border-box;
  /* border: 1px dashed red;  */
  height: 100vh;
}
.heady{
  text-align: center;
  line-height: 30px;
  color:white;
  background-color: #545c64;

}
.el-container{
  height: 100%;
}
.mainy{
  /* border: 2px solid purple; */
}
.content{
  margin:0; padding: 0;
}
.sideNav{
  /* border:2px dotted brown; */
  background-color: #545c64;
  margin-right: 1px;
}
.footy{
  /* border: 3px dashed black; */
  text-align: center;
  line-height: 60px;
}
</style>
