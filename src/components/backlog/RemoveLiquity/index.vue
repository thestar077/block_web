<template>
  <div class="authorization" id="authorizationPage"> 
    <div class="box">
      <div class="header">
        <span @click="goBack" class="el-icon-back"></span>
        <span>Remove BNB Token</span>
      </div>
      <div class="box1">
        <div class="headerTxt">
          <span>Amount</span>
          <!-- <span>Detailed</span> -->
        </div>
        <p class="p1">{{num}} %</p>
        <el-slider v-model="num"></el-slider>
        <div class="sliderBox">
          <span :class="activeNum == index?'active':''" v-for="(item,index) in sliderBoxArr" @click="selectNum(item,index)" :key="index">{{item.num}} %</span>
        </div>
      </div>
      <div class="el-icon-bottom"></div>
      <div class="box1">
        <p class="swapTxt">
          <span>-</span>
          <span><img src="@/assets/picture/bi/3.png"> BAKE</span>
        </p>
        <p class="swapTxt">
          <span>-</span>
          <span><img src="@/assets/picture/bi/6.png"> BUSD</span>
        </p>
      </div>
      <p class="swapTxt">
        <span>Price</span>
        <span>1 BAKE = 178.22 BUSD</span>
      </p>
      <p class="swapTxt">
        <span></span>
        <span>1 BUSD = 2.765 BUSD</span>
      </p>
      <div class="sc-edoZmE hyACfo handleBtn">
        <button type="button" :disabled="!isApprove && num !== 0" :class="isApprove || num === 0?'c-dlfnbm btoybd disableBtn':'c-dlfnbm btoybd bgActive'" @click="dialogVisibleConfirmSwap = true">Approve</button>
        <button type="button" :disabled="!isApprove" @click="dialogVisibleConfirmSwap = true" :class="!isApprove?'c-dlfnbm btoybd disableBtn':'c-dlfnbm btoybd bgActive'" >{{num === 0?'Enter an amount':'Remove'}}</button>
      </div>
    </div>
    <div class="box2">
      <p class="swapTxt"><span>LP TOKEN IN YOUR WALLET</span></p>
      <p class="swapTxt">
        <span>BAKE/BUSD</span>
        <span>178.22</span>
      </p>
      <p class="swapTxt">
        <span>BAKE:</span>
        <span>178.22</span>
      </p>
      <p class="swapTxt">
        <span>BUSD:</span>
        <span>0.9876</span>
      </p>
    </div>
    <!-- ConfirmSwap -->
  <el-dialog
    title="Your will receive"
    class="dialogVisibleConfirmSwap"
    :visible.sync="dialogVisibleConfirmSwap"
    width="40%" append-to-body>
    <p class="swapTxt">
      <span>0.45152</span>
      <span><img src="@/assets/picture/bi/3.png"> BAKE</span>
    </p>
    <p class="el-icon-plus"></p>
   <p class="swapTxt">
      <span>0.81234</span>
      <span><img src="@/assets/picture/bi/6.png"> BUSD</span>
    </p>
    <p class="swapTips2">Output is estimated.If the price changes by more than 0.8% your transaction will revert.</p>
    <p class="swapTxt">
      <span>LP BAKE/BUSD Burned</span>
      <span><img src="@/assets/picture/bi/3.png"><img src="@/assets/picture/bi/6.png"> 0.5653</span>
    </p>
    <p class="swapTxt">
      <span>Price</span>
      <span>1 BAKE = 178.22 BUSD</span>
    </p>
    <p class="swapTxt">
      <span></span>
      <span>1 BUSD = 2.765 BUSD</span>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button class="sc-dlfnbm btoybd center block" @click="cofirmSwap">Cofirm</el-button>
    </span> 
  </el-dialog>
  <el-dialog
    title="Waiting for confirmation"
    :visible.sync="dialogVisibleConfirmationWaiting"
    width="40%" append-to-body>
    <div class="el-icon-loading submittedIcon"></div>
    <p class="submittedVisible waitingTxt">
      <span>Swapping 0.26543 BAKE for 0.94442 BUSD</span>
    </p>
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
  export default {
    data() {
      return {
        isApprove:false,
        dialogVisibleConfirmSwap:false,
        dialogVisibleConfirmationWaiting:false,
        dialogVisibleTransactionsSubmitted:false,
        activeNum:-1,
        num:0,
        dialogVisible:false,
        sliderBoxArr:[
          {
            num:25,
          },
          {
            num:50,
          },
          {
            num:75,
          },
          {
            num:100,
          }
        ],
      };
    },
    created() {
      
    },
    methods: {
      handleChange(){},
      selectNum(item,index){
        this.activeNum = index;
        this.num = item.num;
      },
      goBack(){
        this.$router.go(-1);
      },
      cofirmSwap(){
        this.dialogVisibleConfirmSwap = false;
        this.isApprove = true;
        const TIME_COUNT = 3;
        if(!this.timer){
        this.timer = setInterval(() => {
          if(this.count > 0 && this.count <= TIME_COUNT){
            this.dialogVisibleConfirmationWaiting = true;
            this.count++;
          }else{
            this.dialogVisibleConfirmationWaiting = false;
            this.dialogVisibleTransactionsSubmitted = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000)
        }
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
