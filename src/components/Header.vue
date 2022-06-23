<template>
  <el-row>
    <el-col :span="24">
      <div class="head-wrap" > <i class="el-icon-notebook-2"></i> 稻壳测试平台</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
   beforeCreate () {
  document.title = "稻壳测试平台"}
}
</script>
<style scoped>
.head-wrap{
  text-align: center;
  font-size: large;
  color: rgb(242, 242, 248);
}
</style>
