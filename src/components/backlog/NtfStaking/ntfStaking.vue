<template>
  <div class="stakeNFTPage" id="stakeNFTPage">   
    <div class="content">
      <div class="banner">
        <img width="100%" src="@/assets/picture/skaetBanner.png">
      </div>
      <el-row :gutter="20">
        <el-col v-for="(item,index) in biArr" :key="index">
          <div  class="biArr">
            <img width="100%" :src="item.pic">
            <div class="biTitle">
              {{item.num}}
              <span v-if="index == biArr.length-1">Claim</span>
            </div>
            <p class="biTxt">{{item.txt}}</p>
          </div>     
        </el-col>
      </el-row>
      <div class="stakeNFTBox">
        <div class="cardBoxArr">
          <div class="cardBox" v-for="(item,index) in infoArr" :key="'info1-'+index">
            <img width="100%" :src="item.pic">
            <h5 class="title">{{item.leval}}</h5>
            <p class="txt">{{item.name}}</p>
            <div @click="handleBtn(item)">
              <div class="btnA" v-if="item.sta == 'Unstake'">{{item.sta}}</div>     
              <div class="btnA" v-else>{{item.sta}}</div> 
            </div>
              
          </div>
          <div class="cardBox cursorPointer" v-for="(item,index) in 5-infoArr.length" :key="'info2-'+index" >
            <img v-if="infoArr.length<5" v-click @click="addModelVisible = true" width="95%" class="addCard" src="@/assets/picture/add.png">
          </div>
        </div>
      </div>
    </div>
      <!-- Waiting for confirmation -->
  <el-dialog
    title="Waiting for confirmation"
    :visible.sync="dialogVisibleConfirmationWaiting"
    width="40%" append-to-body>
    <div class="el-icon-loading submittedIcon"></div>
    <p class="submittedVisible waitingTxt">
      <span>Swapping {{itemRole.name}} </span>
    </p>
    <p class="watingTips">Confirm this transaction in your wallet</p>
  </el-dialog>
    <!-- addModelVisible -->
    <el-dialog class="addBox" :visible.sync="addModelVisible" width="80%" append-to-body>
      <el-carousel trigger="click" :interval="0" arrow="always" height="450px">
        <el-carousel-item v-for="(item, index) in newArr" :key="index">
          <ul class="cardUl">
            <li class="cardLi" v-for="(i, k) in item" :key="k">
              <el-radio-group v-model="radio">
                <el-radio :label="k">
                  <img :src="i.pic">
                </el-radio>
              </el-radio-group>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
      <div class="btnBox">
        <div class="flexBox">
          <div class="btn1 sureBtn" v-click @click="addModelVisible = false">Sure</div>
          <div class="btn1 cancelBtn" @click="addModelVisible = false">Cancel</div>
        </div>
      </div>
    </el-dialog>
  <!-- Waiting for confirmation -->
  <el-dialog
    title="Waiting for confirmation"
    :visible.sync="dialogVisibleConfirmationWaiting"
    width="40%" append-to-body>
    <div class="el-icon-loading submittedIcon"></div>
    <p class="submittedVisible waitingTxt">
      <span>Swapping {{itemRole.name}} </span>
    </p>
    <p class="watingTips">Confirm this transaction in your wallet</p>
  </el-dialog>
  <!-- Waiting Staking -->
  <el-dialog
    class="waitingBox"
    title=""
    :visible.sync="dialogVisibleWaitingStaking"
    width="40%" append-to-body>
    <div>
      <img src="@/assets/picture/6731.png">
      <p>Waiting for blockchain confirmation</p>
    </div>
  </el-dialog>
  <!-- Staked -->
  <el-dialog
    class="waitingBox"
    title=""
    :visible.sync="dialogVisibleStaked"
    width="40%" append-to-body>
    <div>
      <img src="@/assets/picture/6727.png">
      <p>Congratulations</p>
      <p>You have Successfully Staked Your NFTs ！</p>
    </div>
  </el-dialog>
  <!-- unStaking -->
  <el-dialog
    class="waitingBox"
    title=""
    :visible.sync="dialogVisibleUnStaking"
    width="40%" append-to-body>
    <div>
      <img class="rolePic" src="@/assets/picture/A+.png">
      <span class="tips">Select NFT Stake</span>
      <div class="waitingBoxFooter">
        <span @click="handleUnstake">Unstake</span>
        <span @click="dialogVisibleUnStaking = false">Cancel</span>
      </div>
    </div>
  </el-dialog>
  <!-- Staked -->
  <el-dialog
    class="waitingBox"
    title=""
    :visible.sync="dialogVisibleWaitingunStaked"
    width="40%" append-to-body>
    <div>
      <img src="@/assets/picture/6727.png">
      <p>Congratulations</p>
      <p>You have Successfully Unstaked Your NFTs ！</p>
    </div>
  </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        radio:-1,
        dialogVisibleStaked:false,
        dialogVisibleWaitingStaking:false,
        dialogVisibleConfirmationWaiting:false,
        dialogVisibleUnStaking:false,
        addModelVisible:false,
        dialogVisibleWaitingunStaked:false,
        num:0,
        itemRole:{},
        isShow:false,
        biArr:[
          {
            pic:require('@/assets/picture/bi1.png'),
            num:'$ 1234',
            txt:'Total Value Locked',
          },
          {
            pic:require('@/assets/picture/bi2.png'),
            num:'1234',
            txt:'Total Staking NFTs',
          },
          {
            pic:require('@/assets/picture/bi3.png'),
            num:'0.02%',
            txt:'Your Weights Percentage',
          },
          {
            pic:require('@/assets/picture/bi4.png'),
            num:'54000',
            txt:'Daily Rewards(DFD)',
          },
          {
            pic:require('@/assets/picture/bi5.png'),
            num:'0.0188',
            txt:'Mining Rewards(DFD)',
          },
        ],
        infoArr:[
          {
            pic:require('@/assets/picture/SSR.png'),
            leval:'SSR',
            name:'喜欢梭哈的波赛冬',
            text:'梭哈山赛，一夜暴富',
            dot:'撼大地的海之神',
            sta:'Approve'
          },
          {
            pic:require('@/assets/picture/SR.png'),
            leval:'SR',
            name:'小有盈利的波赛冬',
            text:'梭哈山赛，一夜暴富',
            dot:'撼大地的海之神',
            sta:'Stake'
          },
          {
            pic:require('@/assets/picture/S.png'),
            leval:'S',
            name:'小有盈利的波赛冬',
            text:'梭哈山赛，一夜暴富',
            dot:'撼大地的海之神',
            sta:'Unstake'
          },
        ],
        cardArr:[
          {
            pic:require('@/assets/picture/SSR.png'),
          },
          {
            pic:require('@/assets/picture/SR.png'),
          },
          {
            pic:require('@/assets/picture/S.png'),
          },
          {
            pic:require('@/assets/picture/A+.png'),
          },
          {
            pic:require('@/assets/picture/A.png'),
          },
          {
            pic:require('@/assets/picture/SSR.png'),
          },
          {
            pic:require('@/assets/picture/SR.png'),
          },
          {
            pic:require('@/assets/picture/A+.png'),
          },
          {
            pic:require('@/assets/picture/A.png'),
          },
          {
            pic:require('@/assets/picture/SSR.png'),
          },
          {
            pic:require('@/assets/picture/SR.png'),
          }
        ],
        newArr:[],
        activeName: 'GameFi',
        count:1,
      };
    },
    mounted() {
      var chunk = 5;
      var len = this.cardArr.length;
      var result = [];
      for (let i = 4; i < len; i += chunk) {
        result.push(this.cardArr.slice(i, i + chunk)) // 每10项分成一组        
      }
      this.newArr = result;
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      ceilArr(arr){
        for ( var i = 0; i++; i < Math.ceil(arr.length/5) ) {
            let obj = {
                item: arr.splice(0,5)
            }
            let newArr = [].push(obj)
            return newArr;
        }
      },
      handleBtn(item){
        console.log(item,'item');
        this.itemRole = item;
        if(item.sta == "Approve"){
          this.dialogVisibleConfirmationWaiting = true;
        }else if(item.sta == "Stake"){
          const TIME_COUNT = 3;
          if(!this.timer){
            this.timer = setInterval(() => {
              this.dialogVisibleWaitingStaking = true;
              if(this.count > 0 && this.count <= TIME_COUNT){
                this.count++;
              }else{
                this.dialogVisibleStaked = true;
                this.dialogVisibleWaitingStaking = false;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000)
          }
        }else{
          this.dialogVisibleUnStaking = true;
        }
      },
      handleUnstake(){
        this.dialogVisibleUnStaking = false;
        this.dialogVisibleWaitingunStaked = true;
      },
    }
  };
</script>

<style lang="less" scoped>
  .waitingBox{
    /deep/ .el-dialog{
      background: none;
      border:none;
      box-shadow: none;
    }
    .rolePic{
      width: 50%;
    }
    img{
      display: block;
      margin:0 auto;
      margin-bottom: 30px;
    }
    p{
      text-align: center;
      color: #fff;
      font-size: 30px;
    }
    .tips{
      text-align: center;
      color: #fff;
      display: block;
      font-size: 30px;
    }
    .waitingBoxFooter{
      display: flex;
      justify-content:space-between;
      align-items: center;
      text-align: center;
      margin:0 auto;
      width:650px;
      span:last-of-type{
        margin-right:0;
        background: #9A9991;
      };
      span{
        margin-top: 30px;
        width: 300px;
        height: 80px;
        background: #A39282;
        opacity: 1;
        border-radius: 10px;
        line-height: 80px;
        font-size: 28px;
        font-weight: bold;
        color: #FFFFFF;
        opacity: 1;
        margin-right: 50px;
        cursor: pointer;
      }
    }
  }
  .submittedIcon{
      font-size: 150px;
      display: block;
      margin:0 auto;
      text-align: center;
      color: #A29181;
    }
    .waitingTxt{
      width: auto !important;
      text-align: center;
      span{
        text-align: center !important;
        display: block !important;
        margin:0 auto !important;
      }
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
        color: #A29181;
        display: block;
        margin-right: 20px;
      }
    }
  .stakeNFTPage{
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('~@/assets/picture/nftBoxBg.png');
    .content{
      background: none !important;
    }
    .banner{
      width: 100%;
      background: #E9D9C9;
      border-radius: 30px;
      overflow: hidden;
      margin-bottom: 40px;
      img{
        border-radius: 30px;
      }
    }
    .roleArr{
      width: 100%;
      border-bottom: 1px solid #E9D9C9;
      padding:20px 0;
      span{
        font-size: 28px;
        padding:20px 35px;
        font-weight: 500;
        line-height: 40px;
        color: #A39282;
      }
    }
    .btnA{
      font-size: 28px;
      width: 80%;
      height: 64px;
      text-align: center;
      border-radius: 20px;
      background: #A39282;
      font-weight: bold;
      line-height: 64px;
      color: #FFFFFF;
      margin:0 auto;
      display: block;
      border:none;
      cursor: pointer;
    }
    .el-col-24{
      width: 20%;
    }
    .title{
      font-size: 24px;
      margin-top: 10px;
      font-weight: bold;
      line-height: 33px;
      color: #A39282;
      text-align: center;
    }
    .txt{
      font-size: 22px;
      margin-top: 7px;
      font-weight: 500;
      line-height: 30px;
      color: #A39282;
      text-align: center;
    }
    .btn{
      font-size: 28px;
      width: 80%;
      height: 80px;
      text-align: center;
      border-radius: 20px;
      background: #A39282;
      font-weight: bold;
      line-height: 40px;
      color: #FFFFFF;
      margin:0 auto;
      display: block;
      border:none;
    }
    .mt20{
      margin-top: 20px;
    }
    .content{
      padding:36px 163px;
      background-color: #F8F2ED;
      .cardBoxArr{
        display: flex;
        justify-content: flex-start;
      }
      .cardBox{
        width:20%;
        padding-bottom: 39px;
        .addCard{
          margin-top: 10px;
        }
      }
      .stakeNFTBox{
        border-radius: 30px;
        background-color: #fff;
        padding:33px 28px;
      }
      .biArr{;
        background: #fff;
        border-radius: 30px;
        padding-top: 24px;
        height: 280px;
        margin-bottom: 40px;
        img{
          width:84px;
          height: 84px;
          display: block;
          margin:40px auto 13px auto;
        }
        .biTitle{
          font-size: 32px;
          font-weight: 900;
          line-height: 44px;
          color: #A39282;
          text-align: center;
          span{
            width: 86px;
            height: 45px;
            background: #FFFFFF;
            border: 3px solid #FFD522;
            opacity: 1;
            border-radius: 10px;
            margin-left: 20px;
            font-size: 21px;
            font-weight: 400;
            line-height: 28px;
            color: #FFD522;
          }
        }
        .biTxt{
          font-size: 22px;
          font-weight: 400;
          line-height: 30px;
          color: #A39282;
          opacity: 1;
          text-align: center;
          margin-bottom: 40px;
        }
      }
    }
  }
  .addBox /deep/ .el-dialog{
    background: none;
    border:none;
  }
  .addBox /deep/ .el-dialog__body,/deep/ .el-dialog .el-dialog__header{
    background: none;
    border:none;
    .btnBox{
        width: 60%;
        display: block;
        margin:0 auto;
      .flexBox{
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .btn1{
        width: 340px;
        height: 80px;
        background: #A39282;
        opacity: 1;
        border-radius: 20px;
        font-size: 34px;
        font-weight: bold;
        line-height: 80px;
        color: #FFFFFF;
        text-align: center;
      }
      .sureBtn{
        margin-right: 85px;
        background-color: #A39282;
      }
      .cancelBtn{
        background-color: #9A9991;
      }
    }
      .el-carousel__arrow{
        top:80%;
        background-color: #fff;
        color:#7B7B7B;
        font-weight: bold;
        width: 65px;
        height: 65px;
        font-size: 30px;
      }
      .el-carousel__arrow--left{
        left:40%;
        .el-icon-arrow-left{
          font-weight: bold;
        }
      }
      .el-carousel__arrow--right{
        right:40%;
        .el-icon-arrow-right{
          font-weight: bold;
        }
      }
      .cardUl{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .cardLi{
          width:20%;
          .el-radio__input{
            display: block;
            margin:0 auto;
            text-align: center;
          }
          .el-radio__inner{
            width: 37px;
            height: 37px;
          }
          .el-radio__input.is-checked .el-radio__inner{
            background-color: #FDE19E;
            border:1px solid #fff;
          }
          .el-radio__inner:hover{
            border-color: #DCDFE6;
          }
        }
      }
    }

    @media(max-width:641px) {
      .stakeNFTPage .el-row{
        margin:0!important;
      }
      .stakeNFTPage .el-col-24{
        width:50%;
      }
      .stakeNFTPage .content .cardBoxArr{
        flex-wrap: wrap;
      }
      .stakeNFTPage .content .cardBox{
        width:50%;
      }
    }
</style>
