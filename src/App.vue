<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Web3 from 'web3';
import myStorage from './store/myStorage';
const EXPIRY = 3600;
export default {
  name: "app",
  mounted(){
    this.loadBaseData();
    this.loadAnnouncements();
    myStorage.set('lastRefresh', (new Date()).getTime());
  },
  created() {
  },
  components: {
  },
  methods: {
    loadBaseData() {
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
        this.$store.dispatch('getConfig')
      } else {
        let nfts = myStorage.get('nfts');
        this.$store.commit('NFTS_ALL', nfts);
        let config = myStorage.get('config');
        this.$store.commit('CONFIG', config);
      }

      let userConfigSlippage = myStorage.get('config_slippage');
      if (userConfigSlippage) {
        this.$store.commit('CONFIG_SLIPPAGE', parseFloat(userConfigSlippage));
      }

      let userConfigDeadline = myStorage.get('config_deadline');
      if (userConfigDeadline) {
        this.$store.commit('CONFIG_DEADLINE', parseInt(userConfigDeadline));
      }
    },
    loadAnnouncements() {

    },
  },
  computed: {
    // eggContract() {
    //   return this.$store.state.web3.contracts.token.egg;
    // },
    // dggContract() {
    //   return this.$store.state.web3.contracts.token.dgg;
    // },
    // dfdContract() {
    //   return this.$store.state.web3.contracts.token.dfd;
    // },
    // dggSaleContract() {
    //   return this.$store.state.web3.contracts.dgg_sale;
    // },
  }
};
</script>

<style>
  /* 解决element-ui的table表格控件表头与内容列不对齐问题 */
  .el-table th.gutter{
    display: table-cell!important;
  }
</style>
