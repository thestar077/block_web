<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { bus } from './main';
import Web3 from 'web3';
import axios from 'axios';
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
      if (this.contractRouter !== null && this.contractRouter !== undefined) {
        this.monitorEvents(this.contractRouter);
      }
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

      let userConstSlippage = myStorage.get('config_slippage');
      if (userConstSlippage) {
        console.log('userConstSlippage', userConstSlippage);
        this.$store.commit('USER_CONFIG_SLIPPAGE', parseFloat(userConstSlippage));
      } else {
        this.$store.commit('USER_CONFIG_SLIPPAGE', this.$store.state.baseData.consts.slippage);
      }

      let userConstDeadline = myStorage.get('config_deadline');
      if (userConstDeadline) {
        console.log('userConstDeadline', userConstDeadline);
        this.$store.commit('USER_CONFIG_DEADLINE', parseInt(userConstDeadline));
      } else {
        this.$store.commit('USER_CONFIG_DEADLINE', this.$store.state.baseData.consts.deadline);
      }
    },
    loadAnnouncements() {

    },
    monitorEvents(contract) {
        if (this.web3 == null || this.web3 == undefined) {
          return;
        }
        this.web3.eth.getBlock('latest').then((res) => {
              let latestBlockNumber = res.number;
              console.log('block', latestBlockNumber);

              let options = {
                  fromBlock: latestBlockNumber,      //Number || "earliest" || "pending" || "latest"
              };

              contract.events.AddLiquidity(options)
                  .on('data', evt => {
                      console.log('Liquidity data', evt)
                      let data = evt.returnValues;
                      if (data.sender == this.user) {
                          let addrA = data.tokenA;
                          let addrB = data.tokenB;
                          let tokenA = '';
                          let tokenB = '';
                          this.tokenListOrig.forEach((token) => {
                            if (token.address == addrA) {
                              tokenA = token.symbol;
                            }

                            if (token.address == addrB) {
                              tokenB = token.symbol;
                            }
                          })
                          let amountA = data.amountA;
                          let amountB = data.amountB;
                          let liquidity = data.liquidity;
                          let transactionHash = evt.transactionHash;
                          let blockHash = evt.blockHash;
                          let blockNumber = evt.blockNumber;
                          let url = this.$store.state.url.api.base + this.$store.state.url.api.transaction.addTransaction;
                          let body = {
                            tokenA: tokenA,
                            tokenB: tokenB,
                            amountA: amountA,
                            amountB: amountB,
                            amountPair: liquidity,
                            rateAB: amountB / amountA,
                            rateBA: amountA / amountB,
                          };
                          console.log('body', body);
    
                          axios({
                              url: url,
                              method: 'post',
                              data: {
                                owner: this.user,
                                category: 0,   // Add Liquidity
                                transactionHash: transactionHash,
                                blockHash: blockHash,
                                blockNumber: blockNumber,
                                value: JSON.stringify(body)
                              }
                          }).then((res) => {
                              let result = JSON.parse(res.data);
                              if (result.status == 'success') {
                                  this.$store.dispatch('getMyTransactions', this.user);
                                  bus.$emit('liquidityAddedSuccess');
                              }
                              
                              
                              // this.dialogVisibleConfirmationWaiting = false;
                          }, (err) => {
                              console.log('error', err);
                              bus.$emit('liquidityAddedFailure');
                              // this.dialogVisibleConfirmationWaiting = false;
                          })
                      }
                    })
                  .on('changed', changed => console.log('Liquidity changed', changed))
                  .on('error', err => {throw err})
                  .on('connected', str => console.log('Liquidity connected', str));

                contract.events.RemoveLiquidity(options)
                  .on('data', evt => {
                      let data = evt.returnValues;
                      console.log('************* RemoveLiquidity data', evt)
                      if (data.sender == this.user) {
                          let addrA = data.tokenA;
                          let addrB = data.tokenB;
                          let tokenA = '';
                          let tokenB = '';
                          this.tokenListOrig.forEach((token) => {
                            if (token.address == addrA) {
                              tokenA = token.symbol;
                            }

                            if (token.address == addrB) {
                              tokenB = token.symbol;
                            }
                          })
                          let amountA = data.amountA;
                          let amountB = data.amountB;
                          let liquidity = data.liquidity;
                          let transactionHash = evt.transactionHash;
                          let blockHash = evt.blockHash;
                          let blockNumber = evt.blockNumber;
                          let url = this.$store.state.url.api.base + this.$store.state.url.api.transaction.addTransaction;
                          let body = {
                            tokenA: tokenA,
                            tokenB: tokenB,
                            amountA: amountA,
                            amountB: amountB,
                            amountPair: liquidity,
                            rateAB: amountB / amountA,
                            rateBA: amountA / amountB,
                          };
                          console.log('body', body);
    
                          axios({
                              url: url,
                              method: 'post',
                              data: {
                                owner: this.user,
                                category: 1,   // Remove Liquidity
                                transactionHash: transactionHash,
                                blockHash: blockHash,
                                blockNumber: blockNumber,
                                value: JSON.stringify(body)
                              }
                          }).then((res) => {
                              
                              let result = JSON.parse(res.data);
                              if (result.status == 'success') {
                                  this.$store.dispatch('getMyTransactions', this.user);
                                  bus.$emit('liquidityRemovalSuccess');
                              }
                              
                              // this.dialogVisibleConfirmationWaiting = false;
                              
                          }, (err) => {
                              console.log('error', err);
                              bus.$emit('liquidityRemovalFailure');
                              // this.dialogVisibleConfirmationWaiting = false;
                          })
                      }
                    })
                  .on('changed', changed => console.log('Liquidity changed', changed))
                  .on('error', err => {throw err})
                  .on('connected', str => console.log('Liquidity connected', str))
          
          });
      },
  },
  computed: {
      web3() {
        return this.$store.state.web3.web3;
      },
      walletConnected() {
        return this.$store.state.web3.web3 !== null && this.$store.state.web3.web3 !== undefined;
      },
      contractFactory() {
        return this.$store.state.web3.contracts.uniswap_factory;
      },
      contractRouter() {
        return this.$store.state.web3.contracts.router_v1;
      },
      user() {
        return (this.$store.state.web3.accounts.length > 0) ? this.$store.state.web3.accounts[0] : '';
      },
      minter() {
        return this.$store.state.web3.minter;
      },
      tokenListOrig() {
        return this.$store.state.web3.tokens;
      },
  },
  watch: {
      contractRouter: function(newVal) {
        if (newVal) {
            this.monitorEvents(newVal);
        }
      },
  },
};
</script>

<style>
  /* 解决element-ui的table表格控件表头与内容列不对齐问题 */
  .el-table th.gutter{
    display: table-cell!important;
  }
</style>
