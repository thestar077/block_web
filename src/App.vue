<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: "app",
  mounted(){

  },
  created() {
      

      window.ethereum.on('accountChanged', () => {
        console.log("钱包事件: accountChanged");
      });

      window.ethereum.on('chainChanged', () => {
        console.log("钱包事件: chainChanged");
      });

      window.ethereum.on('disconnect', () => {
        console.log("钱包事件: disconnect");
      });
  },
  components: {
  }
};
</script>

<style>
  /* 解决element-ui的table表格控件表头与内容列不对齐问题 */
  .el-table th.gutter{
    display: table-cell!important;
  }
</style>
