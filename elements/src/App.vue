<template>
  <div id="app">
    <el-container>
        <el-header class="heady" style="height:30px;">
          初识ElementUI
        </el-header>
        <el-container class="mainy">
          <el-aside width="200px" class="sideNav">
            <side-nav />
          </el-aside>
          <el-main class="content">
            <contenty />
          </el-main>
        </el-container>
        <el-footer class="footy">
          <footy />
        </el-footer>
        
    </el-container>
    
  </div>
</template>

<script>

import SideNav from './components/sideNav'
import Contenty from './components/content'
import Footy from './components/footy'

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
  border: 1px dashed red; 
  height: 100%;
}
.heady{
  text-align: center;
  line-height: 30px;
  color:red;
}
.el-container{
  height: 100%;
}
.mainy{
  height: calc(100% - 120px);
  border: 2px solid purple;
}
.sideNav{
  border:2px dotted brown;
}
</style>
