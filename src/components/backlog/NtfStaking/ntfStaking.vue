<template>
  <div class="stakeNFTPage" id="stakeNFTPage"> 
    <div class="banner"></div>
    <div class="line"></div>
    <div class="roleArr">
      <span>Stake NFT</span>
    </div>
    <el-row>
      <el-col v-for="(item,index) in infoArr[0].info" :key="index">
        <img width="100%" :src="item.pic">
        <h5 class="title">{{item.leval}}</h5>
        <p class="txt">{{item.name}}</p>
        <div class="btn" v-if="item.sta == 'Unstake'">{{item.sta}}</div>     
        <div class="btn" v-else>{{item.sta}}</div>      
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        num:0,
        radio:3,
        isShow:false,
        infoArr:[
          {
            info:[
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
          },
        ],
        activeName: 'GameFi',
      };
    },
    created() {
      
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="less" scoped>
  .stakeNFTPage{
    .banner{
      width: 100%;
      height: 460px;
      background: #E9D9C9;
      margin-bottom: 40px;
    }
    .line{
      width: 100%;
      height: 20px;
      background: #E9D9C9;
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
    }
    .mt20{
      margin-top: 20px;
    }
  }
</style>
