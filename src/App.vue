<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import myStorage from './store/myStorage';
const EXPIRY = 3600;
export default {
  name: "app",
  mounted(){
    let lastRefresh = myStorage.get('lastRefresh');
    // console.log('lastRefresh', lastRefresh);
    let refreshNow = false;
    let nowTime = (new Date()).getTime();
    // console.log('nowTime', nowTime);
    // console.log('diff', nowTime - lastRefresh);
    if (!lastRefresh) {
        refreshNow = true;
    } else if ((nowTime - lastRefresh) > EXPIRY) {
        refreshNow = true;
    }

    // Get NFTs info
    if (refreshNow) {
      this.$store.dispatch('getNftsAll');
    } else {
      let nfts = myStorage.get('nfts');
      this.$store.commit('NFTS_ALL', nfts);
    }
    
    
    // Get Announcements
  },
  created() {
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
