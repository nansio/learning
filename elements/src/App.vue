<template>
  <div id="app">
    <el-tabs v-model="activeTabName"
      type="border-card"
      @tab-click="tabClick"
      tab-position="left"
      >
      <el-tab-pane
        key=Tabs
        name=tabs>
        <span slot="label">
          <i class="el-icon-date"></i>
          我的行程
        </span>
        my journey
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      items: [
        {
          key: 'Tabs', label: 'Tabs标签页', name: 'tabs'
        },
        {
          key: 'ToolTip', label: 'ToolTip文字提示', name: 'tooltips'
        },
        {
          key: 'NavMenu', label: 'NavMenu导航菜单', name: 'navmenu'
        },
      ],
      activeTabName: 'tabs'
    }
  },
  components: {
    
  },
  methods: {
    tabClick(tab){
      console.log(tab.name);
    }
  }
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
