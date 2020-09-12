<template>
  <div class="btn-container">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="success">success</el-button>
      <el-button type="info">info</el-button>
      <el-button type="warning">warning</el-button>
      <el-button type="danger">danger</el-button>
    </el-row>
    <el-row>
      <el-button plain>plain</el-button>
      <el-button type="primary" plain>plain primary</el-button>
      <el-button type="success" plain>plain success</el-button>
      <el-button type="info" plain>plain info</el-button>
      <el-button type="warning" plain>plain warning</el-button>
      <el-button type="danger" plain>plain danger</el-button>
    </el-row>
    <el-row>
      <el-button round>round</el-button>
      <el-button round type="primary">round primary</el-button>
      <el-button round type="success">round success</el-button>
      <el-button round type="info">round info</el-button>
      <el-button round type="warning">round warning</el-button>
      <el-button round type="danger">round danger</el-button>
    </el-row>
    <el-row>
      <el-button circle icon="el-icon-search"></el-button>
      <el-button type="primary" circle icon="el-icon-edit"></el-button>
      <el-button type="success" circle icon="el-icon-check"></el-button>
      <el-button type="info" circle icon="el-icon-message"></el-button>
      <el-button type="warning" circle icon="el-icon-star-on"></el-button>
      <el-button type="danger" circle icon="el-icon-delete"></el-button>
    </el-row>
    <el-row>
      <el-button type="text">text button</el-button>
      <el-button type="success" disabled>disabled button</el-button>
    </el-row>
    <h1>图标按钮</h1>
    <el-row>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-row>
    <h1>按钮组</h1>
    <el-button-group style="margin-right:21px;">
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
    <h1>加载中</h1>
    <el-button type="primary" :loading="true">loading...</el-button>
    <h1>按钮大小</h1>
    <el-button type="primary" size="mini">mini</el-button>
    <el-button type="primary" size="small">small</el-button>
    <el-button type="primary" size="medium">medium</el-button>
    <el-button type="primary" size="large">large</el-button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>