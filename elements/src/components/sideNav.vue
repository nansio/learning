<template>
  <div class="sideNavVue">
      sideNav组件
  </div>
</template>

<script>
export default {
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
}
</script>

<style>

</style>