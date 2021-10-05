<template>
  <div class="ntfBoxPage" id="ntfBoxPage"> 
    <div class="banner"></div>
    <div class="line"></div>
    <div class="roleArr">
      <ul>
        <li @click="changeTag(index)" :class="roleActive == index?'active':''" v-for="(item,index) in roleList" :key="index">{{item.name}}</li>
      </ul>
      <div class="viewBtn" @click="isShow = !isShow">
        <span>查看</span>
        <img class="viewBtn" width="200" :src="isShow?require('@/assets/picture/myicon/view1.png'):require('@/assets/picture/myicon/view.png')">
      </div>
    </div>
    <el-row>
      <el-col v-for="(item,index) in infoArr[roleActive].info" :key="index">
        <img width="100%" :src="item.pic">
        <div class="textBox" v-if="isShow">
          <h5>属性：{{item.leval}}</h5>
          <p>{{item.name}}</p> 
          <p>技能：{{item.text}}</p> 
          <p>特点：{{item.name}}</p>          
        </div>
      </el-col>
    </el-row>
    <div class="line mt20"></div>
    <div class="blindBox">
      <div class="titleTxt">
        盲盒
      </div>
      <div class="content">
        <div class="box"></div>
        <div class="txtBox">
          <p class="title">Code Green - Starry Troop</p>
          <p class="txtInfo">In this collection，There are 5 The Greek god character for you to unbox. Try your luck!</p>
          <p class="price">Price</p>
          <p class="priceTxt">
            <span class="num">800</span>
            <span> EGG ≈ 5690 USDC</span>
          </p>
          <div class="totleNum">
            <span>Quantity</span>
            <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
          <div class="checkBox">
            <div class="flex">
              <span>购买方式</span>
              <el-radio-group v-model="radio">
                <el-radio :label="3">EGG</el-radio>
                <el-radio :label="6">USDC</el-radio>
              </el-radio-group>
            </div>
            <div class="buyBtn">
              Buy
            </div>
          </div>
        </div>
      </div>
    </div>
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
        roleActive:0,
        roleList:[
          {
            name:'雅典娜',
          },
          {
            name:'波塞冬',
          },
          {
            name:'维纳斯',
          },
          {
            name:'阿波罗',
          },
          {
            name:'丘比特',
          }
        ],
        infoArr:[
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'喜欢梭哈的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              }
            ],
          },
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'喜欢梭哈的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              }
            ],
          },
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'喜欢梭哈的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              }
            ],
          },
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'喜欢梭哈的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              }
            ],
          },
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'喜欢梭哈的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'小有盈利的波赛冬',
                text:'梭哈山赛，一夜暴富',
                dot:'撼大地的海之神'
              }
            ],
          }
        ],
      };
    },
    created() {
      
    },
    methods: {
      changeTag(index){
        this.roleActive = index;
      },
    }
  };
</script>

<style lang="less" scoped>
  .ntfBoxPage{
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
      display: flex;
      justify-content:space-between;
      align-items:center;
      border-bottom: 1px solid #E9D9C9;
      .active{
        background: #A39282;
        color: #fff;
      }
      .viewBtn{
        font-size: 24px;
        font-weight: 500;
        line-height: 33px;
        color: #A39282;
        opacity: 1;
        cursor: pointer;
        display: flex;
        justify-content:space-between;
        align-items:center;
        img{
          margin-left: 10px;
          width: 33px;
          margin-right: 34px;
        }
      }
      ul{
        display: flex;
        justify-content:space-between;
        align-items:center;
        li{
          font-size: 28px;
          font-weight: 500;
          line-height: 40px;
          color: #A39282;
          opacity: 1;
          padding:20px 48px;
          cursor: pointer;
        }
      }
    }
    .el-col-24{
      width: 20%;
    }
    .textBox{
      background: #7E7E7E;
      color: #fff;
      padding:22px;
      border-radius: 30px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      width: 80%;
      margin:0 auto;
      display: block;
      h5{
        color: #fff;
        font-size: 30px;
        font-weight: normal;
      }
      p{
        font-size: 24px;
      }
    }
    .mt20{
      margin-top: 20px;
    }
    .blindBox{
      .titleTxt{
        padding: 20px 35px;
        font-size: 28px;
        font-weight: 500;
        line-height: 40px;
        color: #A39282;
        opacity: 1;
        border-bottom:1px solid #E9D9C9;
      }
      .content{
        padding:40px 35px;
        justify-content:space-between;
        align-items:center;
        display: flex;
        .box{
          width: 578px;
          height: 578px;
          background: #A39282;
          opacity: 1;
          border-radius: 30px;
          margin-right: 60px;
        }
        .txtBox{
          .title{
            font-size: 56px;
            margin-bottom: 6px;
            font-weight: 800;
            line-height: 78px;
            color: #050505;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
          .txtInfo{
            font-size: 34px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 40px;
            color: #A39282;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .price{
            font-size: 42px;
            font-weight: bold;
            line-height: 59px;
            color: #000000;
            margin:40px 0;
          }
          .priceTxt{
            font-size: 42px;;
            font-weight: bold;
            line-height: 59px;
            color: #333333;
            padding-bottom: 20px;
            border-bottom:1px solid #E9D9C9;
            .num{
              font-size: 80px;
              font-weight: bold;
              line-height: 112px;
              color: #EEB739;
              margin-right: 40px;
            }
          }
          .totleNum{
            padding:35px 0;
            font-size: 30px;
            font-weight: bold;
            line-height: 42px;
            color: #000000;
            span{
              margin-right: 55px;
            }
            /deep/ .el-input-number{
              width: 237px;
              height: 54px;
              line-height: 54px;
              border-radius: 100%;
              .el-input__inner{
                background: #A39282;
                color: #fff;
                height: 54px;
                line-height: 54px;
                border-radius: 100px;
                font-size: 40px;
              }
              .el-input-number__decrease, .el-input-number__increase{
                width: 54px;
                height: 54px;
                background: #E9D9C9;
                color: #A39282;
                font-weight: bold;
                border-radius: 100%;
              }
            }
          }
          .flex{
            justify-content:space-between;
            align-items:center;
            display: flex;
          }
          .checkBox{
            padding:35px 0;
            font-size: 30px;
            font-weight: bold;
            line-height: 42px;
            color: #000000;
            justify-content:space-between;
            align-items:center;
            display: flex;
            span{
              margin-right: 55px;
            }
            /deep/ .el-radio-group{
              justify-content:space-between;
              align-items:center;
              display: flex;
            }
            /deep/ .el-radio{
              justify-content:space-between;
              align-items:center;
              display: flex;
              .el-radio__inner{
                width: 24px;
                height: 24px;
              }
              .el-radio__input.is-checked .el-radio__inner{
                border-color: #A39282;
                background: #A39282;
              }
              .el-radio__inner:hover{
                border-color:#A39282; 
              }
              .el-radio__label{
                font-size: 30px;
                font-weight: bold;
                line-height: 42px;
                color: #000000 !important;
              }
              .el-radio__input.is-checked+.el-radio__label {
                color: #000000 !important;
              }
            }
            .buyBtn{
              width: 422px;
              height: 95px;
              text-align: center;
              line-height: 95px;
              font-size: 50px;
              color: #fff;
              background: #C91731;
              opacity: 1;
              border-radius: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
