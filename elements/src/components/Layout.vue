<template>
  <div class="layout-container">
      <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="5">
              <div class="item">
                  1
              </div>
          </el-col>
          <el-col :span="5">
              <div class="item">
                  2
              </div>
          </el-col>
          <el-col :span="5">
              <div class="item">
                  3
              </div>
          </el-col>
          <el-col :span="5">
              <div class="item">
                  4
              </div>
          </el-col>
      </el-row>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.layout-container{
    margin: 0; padding: 0;
}
.row-bg{
    padding: 0; margin: 0;
    background-color: antiquewhite;
}
.item{
    background-color: green;
    height: 300px;
    text-align:center; line-height: 300px;
}
</style>