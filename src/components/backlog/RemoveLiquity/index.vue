<template>
  <div class="authorization" id="authorizationPage"> 
    <div class="box">
      <div class="header">
        <span @click="goBack" class="el-icon-back"></span>
        <span>Remove {{liquiditySelected ? liquiditySelected.tokenA.symbol : ''}} - {{liquiditySelected ? liquiditySelected.tokenB.symbol : ''}}</span>
      </div>
      <div class="box1">
        <div class="headerTxt">
          <span>Amount</span>
          <!-- <span>Detailed</span> -->
        </div>
        <p class="p1">{{percentage}} %</p>
        <el-slider v-model="percentage"></el-slider>
        <div class="sliderBox">
          <span :class="activeNum == index?'active':''" v-for="(item,index) in sliderBoxArr" @click="selectPercentage(item,index)" :key="index">{{item.percentage}} %</span>
        </div>
      </div>
      <div class="el-icon-bottom"></div>
      <div class="box1">
        <p class="swapTxt">
          <span>{{amountAReceiving}}</span>
          <span><img :src="liquiditySelected.tokenA.pic"> {{liquiditySelected.tokenA.symbol}}</span>
        </p>
        <p class="swapTxt">
          <span>{{amountBReceiving}}</span>
          <span><img :src="liquiditySelected.tokenB.pic"> {{liquiditySelected.tokenB.symbol}}</span>
        </p>
      </div>
      <p class="swapTxt">
        <span>Price</span>
        <span>1 {{liquiditySelected.tokenA.symbol}} = {{liquiditySelected.priceAB}} {{liquiditySelected.tokenB.symbol}}</span>
      </p>
      <p class="swapTxt">
        <span></span>
        <span>1 {{liquiditySelected.tokenB.symbol}} = {{liquiditySelected.priceBA}} {{liquiditySelected.tokenA.symbol}}</span>
      </p>
      <div class="sc-edoZmE hyACfo handleBtn">
        <button type="button" :disabled="isApproved || percentage === 0" :class="isApproved || percentage === 0?'c-dlfnbm btoybd disableBtn':'c-dlfnbm btoybd bgActive'" @click="approve()">Approve</button>
        <button type="button" :disabled="!isApproved" @click="removeLiquidity()" :class="!isApproved?'c-dlfnbm btoybd disableBtn':'c-dlfnbm btoybd bgActive'" >{{percentage === 0?'Enter an amount':'Remove'}}</button>
      </div>
    </div>
    <div class="box2">
      <p class="swapTxt"><span>LP TOKEN IN YOUR WALLET</span></p>
      <p class="swapTxt">
        <span>{{liquiditySelected.tokenA.symbol}}/{{liquiditySelected.tokenB.symbol}}</span>
        <span>{{liquiditySelected.liquidity}}</span>
      </p>
      <p class="swapTxt">
        <span>{{liquiditySelected.tokenA.symbol}}:</span>
        <span>{{liquiditySelected.amountA}}</span>
      </p>
      <p class="swapTxt">
        <span>{{liquiditySelected.tokenB.symbol}}:</span>
        <span>{{liquiditySelected.amountB}}</span>
      </p>
    </div>
    <!-- ConfirmSwap -->
  <el-dialog
    title="You will receive"
    class="dialogVisibleConfirmSwap"
    :visible.sync="dialogVisibleConfirmSwap"
    width="40%" append-to-body>
    <p class="swapTxt">
      <span>{{amountAReceiving}}</span>
      <span><img :src="liquiditySelected.tokenA.pic"> {{liquiditySelected.tokenA.symbol}}</span>
    </p>
    <p class="el-icon-plus"></p>
   <p class="swapTxt">
      <span>{{amountBReceiving}}</span>
      <span><img :src="liquiditySelected.tokenB.pic"> {{liquiditySelected.tokenB.symbol}}</span>
    </p>
    <p class="swapTips2">Output is estimated.If the price changes by more than 0.8% your transaction will revert.</p>
    <p class="swapTxt">
      <span>LP {{liquiditySelected.tokenA.symbol}}/{{liquiditySelected.tokenB.symbol}} Burned</span>
      <span><img :src="liquiditySelected.tokenA.pic"><img :src="liquiditySelected.tokenB.pic"> {{liquidityRemoving}}</span>
    </p>
    <p class="swapTxt">
      <span>Price</span>
      <span>1 {{liquiditySelected.tokenA.symbol}} = {{liquiditySelected.priceAB}} {{liquiditySelected.tokenB.symbol}}</span>
    </p>
    <p class="swapTxt">
      <span></span>
      <span>1 {{liquiditySelected.tokenB.symbol}} = {{liquiditySelected.priceBA}} {{liquiditySelected.tokenA.symbol}}</span>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button class="sc-dlfnbm btoybd center block" @click="cofirmRemoveLiquidity()">Cofirm</el-button>
    </span> 
  </el-dialog>
  <el-dialog
    title="Waiting for confirmation"
    :visible.sync="dialogVisibleConfirmationWaiting"
    width="40%" append-to-body>
    <div class="el-icon-loading submittedIcon"></div>
    <!-- <p class="submittedVisible waitingTxt">
      <span>Swapping 0.26543 BAKE for 0.94442 BUSD</span>
    </p> -->
    <p class="watingTips">Confirm this transaction in your wallet</p>
  </el-dialog>
   <!-- Transaction submitted -->
  <el-dialog
    title="Transaction submitted"
    :visible.sync="dialogVisibleTransactionsSubmitted"
    width="40%" append-to-body>
    <div class="el-icon-bottom submittedIcon"></div>
    <p class="submittedVisible">
      <span>View on bscscan</span>
      <span class="el-icon-link"></span>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button class="closeBtn center block" @click="dialogVisibleTransactionsSubmitted = false">Close</el-button>
    </span> 
  </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs';
  import abiUniswapV2Pair from '../../../assets/abi/UniswapV2Pair.json';
  export default {
    data() {
      return {
        isApproved:false,
        dialogVisibleConfirmSwap:false,
        dialogVisibleConfirmationWaiting:false,
        dialogVisibleTransactionsSubmitted:false,
        activeNum:-1,
        percentage:0,
        dialogVisible:false,
        liquidityRemoving: 0,
        amountAReceiving: 0,
        amountBReceiving: 0,
        pairContract: '',
        sliderBoxArr:[
          {
            percentage:25,
          },
          {
            percentage:50,
          },
          {
            percentage:75,
          },
          {
            percentage:100,
          }
        ],
      };
    },
    created() {
      console.log("params", this.$route.params.liquidity);
      if (this.web3 == null || this.web3 == undefined) {
        this.$router.push({path: '/liquidity'});
        return;
      }
      if (this.contractRouter !== null && this.contractRouter !== undefined) {
        this.monitorEvents(this.contractRouter);
      } 
    },
    computed: {
      web3() {
        return this.$store.state.web3.web3;
      },
      walletConnected() {
        return this.$store.state.web3.web3 !== null && this.$store.state.web3.web3 !== undefined;
      },
      accounts () {
        return this.$store.state.web3.accounts;
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
      serverUrl() {
        return this.$store.state.api.base;
      },
      transactions() {
        return this.$store.state.baseData.transactions;
      },
      displayDecimals() {
        return this.$store.state.baseData.consts.display_decimals;
      },
      defaultContractDecimals() {
        return this.$store.state.baseData.consts.contract_decimals;
      },
      liquidities() {
        return this.$store.state.web3.liquidities;
      },
      liquiditySelected() {
        return (this.$store.state.web3.liquidities.length > 0) ? this.$store.state.web3.liquidities[this.$route.params.liquidity] : null;
      }
    },
    watch: {
      transactions: function(val) {
        if (val && val.length > 0) {
          this.$store.dispatch('getMyLiquidities');
        }
      },
      contractRouter: function(newVal) {
        if (newVal) {
            this.monitorEvents(newVal);
        }
      },
    },
    methods: {
      handleChange(){},
      selectPercentage(item,index){
        this.activeNum = index;
        this.percentage = item.percentage;
        if (this.web3 == null || this.web3 == undefined) {
          alert('Please connect to your wallet first.');
          return;
        }

        console.log('this.liquiditySelected', this.liquiditySelected);
        this.liquidityRemoving = (parseFloat(this.liquiditySelected.liquidity) * item.percentage * 0.01).toFixed(this.displayDecimals);
        console.log('this.liquidityRemoving', this.liquidityRemoving);
        this.amountAReceiving = (parseFloat(this.liquiditySelected.amountA) * item.percentage * 0.01).toFixed(2);
        this.amountBReceiving = (this.amountAReceiving * parseFloat(this.liquiditySelected.priceAB)).toFixed(2);
      },
      goBack(){
        this.$router.go(-1);
      },
      async approve() {
        if (this.web3 == null || this.web3 == undefined) {
          alert('Please connect to your wallet first.');
          return;
        }

        let addrPair = await this.contractRouter.methods.getPair(this.liquiditySelected.tokenA.address, this.liquiditySelected.tokenB.address).call();
        console.log('addrPair', addrPair);

        this.pairContract = new this.web3.eth.Contract(
            abiUniswapV2Pair,
            addrPair,
        );
        console.log('this.pairContract', this.pairContract);
        let liquidityRemoving = parseFloat(this.liquidityRemoving) * 10 ** this.displayDecimals + '00000000000000';
        console.log('liquidityRemoving', liquidityRemoving);
        await this.pairContract.methods.approve(this.contractRouter.options.address, liquidityRemoving).send({ from: this.user });

        let allowancePair = await this.pairContract.methods.allowance(this.user, this.contractRouter.options.address).call();

        console.log('allowancePair', allowancePair);
        this.isApproved = true;
      },
      removeLiquidity() {
        this.dialogVisibleConfirmSwap = true
      },
      async cofirmRemoveLiquidity() {
        if (this.web3 == null || this.web3 == undefined) {
          alert('Please connect to your wallet first.');
          return;
        }

        this.dialogVisibleConfirmSwap = false;
        this.dialogVisibleConfirmationWaiting = true;
        
        let timeNow = Math.floor(Date.now() / 1000);
        let expiry = 10 * 60;  // 10 mins
        let deadline = timeNow + expiry;

        let liquidityRemoving = parseFloat(this.liquidityRemoving) * 10 ** this.displayDecimals + '00000000000000';
        console.log('liquidityRemoving', liquidityRemoving);

        await this.contractRouter.methods.removeLiquidity(this.liquiditySelected.tokenA.address, this.liquiditySelected.tokenB.address, liquidityRemoving, 0, 0, this.user, deadline).send({from: this.user});

        console.log('removeLiquidity succeed.')
        setTimeout(() => {
          this.dialogVisibleConfirmationWaiting = false;
          this.goBack();
        }, 3000);
      },
      monitorEvents(contract) {
      //     if (this.web3 == null || this.web3 == undefined) {
      //       return;
      //     }
      //     this.web3.eth.getBlock('latest').then((res) => {
      //           let latestBlockNumber = res.number;
      //           console.log('block', latestBlockNumber);

      //           let options = {
      //               fromBlock: latestBlockNumber,      //Number || "earliest" || "pending" || "latest"
      //           };

      //           contract.events.RemoveLiquidity(options)
      //               .on('data', evt => {
      //                   console.log('Liquidity data', evt)
      //                   let data = evt.returnValues;
      //                   if (data.sender == this.user) {
      //                       let addrA = data.tokenA;
      //                       let addrB = data.tokenB;
      //                       let tokenA = '';
      //                       let tokenB = '';
      //                       this.tokenList.forEach((token) => {
      //                         if (token.address == addrA) {
      //                           tokenA = token.symbol;
      //                         }

      //                         if (token.address == addrB) {
      //                           tokenB = token.symbol;
      //                         }
      //                       })
      //                       let amountA = data.amountA;
      //                       let amountB = data.amountB;
      //                       let liquidity = data.liquidity;
      //                       let transactionHash = evt.transactionHash;
      //                       let blockHash = evt.blockHash;
      //                       let blockNumber = evt.blockNumber;
      //                       let url = this.$store.state.url.api.base + this.$store.state.url.api.transaction.addTransaction;
      //                       let body = {
      //                         tokenA: this.tokenA.symbol,
      //                         tokenB: this.tokenB.symbol,
      //                         amountA: amountA,
      //                         amountB: amountB,
      //                         amountPair: liquidity,
      //                         rateAB: amountB / amountA,
      //                         rateBA: amountA / amountB,
      //                       };
      //                       console.log('body', body);
      
      //                       axios({
      //                           url: url,
      //                           method: 'post',
      //                           data: {
      //                             owner: this.user,
      //                             category: 1,   // Remove Liquidity
      //                             transactionHash: transactionHash,
      //                             blockHash: blockHash,
      //                             blockNumber: blockNumber,
      //                             value: JSON.stringify(body)
      //                           }
      //                       }).then((res) => {
                                
      //                           let result = JSON.parse(res.data);
      //                           if (result.status == 'success') {
      //                               this.$store.dispatch('getMyTransactions', this.user);
      //                           }
                                
      //                           this.dialogVisibleConfirmationWaiting = false;
      //                       }, (err) => {
      //                           console.log('error', err);
      //                           this.dialogVisibleConfirmationWaiting = false;
      //                       })
      //                   }
      //                 })
      //               .on('changed', changed => console.log('Liquidity changed', changed))
      //               .on('error', err => {throw err})
      //               .on('connected', str => console.log('Liquidity connected', str))
      //       });
      },
    }
  };
</script>

<style lang="less" scoped>
  .bgActive{
    background: #A29181 !important;
    color: #fff !important;
  }
  .disableBtn{
    background: #E9EAEB !important;
    color: #C0C4C6 !important;
    margin-top: 20px;
  }
   /deep/ .el-input-number{
      display: block;
      margin:0 auto;
    }
    /deep/ .el-button--primary{
      background: #4080FC;
      border-color: #4080FC;
    }
  .dialogVisibleConfirmSwap{
    .el-icon-plus{
      color: #d7c799;
      display: block;
      text-align: center;
    }
    .swapTxt{
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin:10px 0;
      img{
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-left: 10px;
      }
      span{
        font-size: 24px;
        color: #d7c799;
      }
    }
  }
  .sc-dlfnbm{
    padding:20px 25px;
    border-radius: 30px;
    background: #9E8948;
    color: #fff;
    cursor: pointer;
  }
  .submittedIcon{
  font-size: 150px;
  display: block;
  margin:0 auto;
  text-align: center;
  color: #AA8929;
}
.waitingTxt{
  width: auto !important;
  text-align: center;
}
.watingTips{
  margin-top: 10px;
  font-size: 24px;
  color: #d7c799;
  text-align: center;
}
  .submittedVisible{
  margin:0 auto;
  width: 280px;
  margin-top: 30px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  span{
    font-size: 24px;
    text-align: center;
    color: #AA8929;
    display: block;
    margin-right: 20px;
  }
}
  .authorization{
    padding:22px 168px 0 168px;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    background-image: url('~@/assets/picture/tradeBg.jpg');
    .box{
      padding:30px;
      display: block;
      margin:30px auto;
      background: #fff;
      border-radius: 30px;
      width: 40%;
      .header{
        color:  #AA8929;
        font-size: 30px;
        display: flex;
        align-items: center;
        span:last-of-type{
          text-align:center;
          display: block;
          margin-left: 20px;
        }
      }
      .box1{
        margin-top: 20px;
        border:1px solid #d4d4d4;
        border-radius: 20px;
        padding:20px;
        .headerTxt{
          display: flex;
          align-items: center;
          justify-content:space-between;
          font-size: 24px;
          color: #AA8929;
        }
        .p1{
          margin-top: 20px;
          font-size: 50px;
          color: #AA8929;
        }
        /deep/ .el-slider__bar{
          background: #AA8929;
        }
        /deep/ .el-slider__button{
          border-color: #AA8929;
        }
        .sliderBox{
          display: flex;
          align-items: center;
          justify-content:space-between;
          .active{
            background: #AA8929;
            color: #fff;
          }
          span{
            border:1px solid  #AA8929;
            color: #AA8929;
            padding:10px 15px;
            border-radius: 30px;
            cursor: pointer;
          }
        }
      }
      .swapTxt{
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin:20px 0;
        img{
          width: 30px;
          height: 30px;
          border-radius: 100%;
          margin-left: 10px;
        }
        span{
          font-size: 24px;
          color: #d7c799;
        }
      }
      .el-icon-bottom{
        text-align: center;
        margin:20px 0;
        font-size: 30px;
        color: #AA8929;
        display: block;
      }
      .handleBtn{
        display: flex;
        justify-content:space-between;
        align-items: center;
        button{
          margin-right: 20px;
          padding:20px 30px;
          background:#e8e8e8;
          color: #aaa;
          border:none;
          border-radius: 30px;
          font-size: 25px;
          cursor: pointer;
        }
      }
      .confirmBtn{
        width: 100%;
        padding:30px;
        background: #4080FC;
        font-size: 26px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        border-radius: 10px;
      }
    }
    .box2{
      width: 30%;
      margin-top: 20px;
      margin:0 auto;
      display: block;
      background: #fff;
      border-radius: 20px;
      padding:20px;
      .swapTxt{
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin:20px 0;
        img{
          width: 30px;
          height: 30px;
          border-radius: 100%;
          margin-left: 10px;
        }
        span{
          font-size: 22px;
          color: #d7c799;
        }
      }
    }
  }
</style>
