<template>
  <!-- el-menu组件 -->
  <div class="sideNavVue">
    <el-menu
      default-active="3-1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- 1级菜单 ==> ElementUI -->
      <el-submenu index="1-1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>ElementUI</span>
        </template>
        <!-- 2级菜单 Basic -->
        <el-submenu index="2-1">
            <template slot="title">Basic</template>
            <el-menu-item index="3-1">Layout布局</el-menu-item>
            <el-menu-item index="3-2">Container布局容器</el-menu-item>
            <el-menu-item index="3-3">Color色彩</el-menu-item>
            <el-menu-item index="3-4">Typography字体</el-menu-item>
            <el-menu-item index="3-5">Border边框</el-menu-item>
            <el-menu-item index="3-6">Icon图标</el-menu-item>
            <el-menu-item index="3-7">Button按钮</el-menu-item>
            <el-menu-item index="3-8">Link文字链接</el-menu-item>
        </el-submenu>
        <!-- 2级菜单 Form 表单 -->
        <el-submenu index="2-2">
            <template slot="title">Form</template>
            <el-menu-item index="3-9">
              <!-- <router-link to="/form">el-form</router-link> -->
              el-form
            </el-menu-item>
        </el-submenu>
        <!-- 2级菜单 Data 数据展示 -->
        <el-submenu index="2-3">
            <template slot="title">Basic</template>
            <el-menu-item index="3-10">Table表格</el-menu-item>
            <el-menu-item index="3-11">Tag标签</el-menu-item>
            <el-menu-item index="3-12">Progress进度条</el-menu-item>
            <el-menu-item index="3-13">Tree树形空间</el-menu-item>
            <el-menu-item index="3-14">Pagination分页</el-menu-item>
            <el-menu-item index="3-15">Badage标记</el-menu-item>
            <el-menu-item index="3-16">Avatar头像</el-menu-item>
        </el-submenu>
        <!-- 2级菜单 Notice 通知 -->
        <el-submenu index="2-4">
            <template slot="title">Notice</template>
            <el-menu-item index="3-17">Alert警告</el-menu-item>
            <el-menu-item index="3-18">Loading加载</el-menu-item>
            <el-menu-item index="3-19">Message消息提示</el-menu-item>
            <el-menu-item index="3-20">MessageBox弹框</el-menu-item>
            <el-menu-item index="3-21">Notification通知</el-menu-item>
        </el-submenu>
        <!-- 2级菜单组 Navigation 导航 -->
        <el-submenu index="2-5">
          <template slot="title">Navigation</template>
          <el-menu-item index="3-22">NavMenu导航菜单</el-menu-item>
          <el-menu-item index="3-23">Tabs标签页</el-menu-item>
          <el-menu-item index="3-24">Breadcrumb面包屑</el-menu-item>
          <el-menu-item index="3-25">PageHeader页头</el-menu-item>
          <el-menu-item index="3-26">Dropdown下拉菜单</el-menu-item>
          <el-menu-item index="3-27">Steps步骤条</el-menu-item>
        </el-submenu>
        <!-- 2级菜单 Others 其他 -->
        <el-submenu index="2-6">
            <template slot="title">Other</template>
        </el-submenu>
      </el-submenu>
      <!-- 1级菜单 ==> Vuex -->
      <el-submenu index="1-2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Vuex</span>
        </template>
        <!-- 2级菜单 -->
        <el-menu-item index="2-7">demo</el-menu-item>
        <el-menu-item index="2-8" disabled>违法行为</el-menu-item>
      </el-submenu>
      <!-- 1级菜单 ==> Vue Router -->
      <el-menu-item index="1-3">
              <i class="el-icon-set-up"></i>
              <span slot="title">Vue Router</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>