<template>
  <div class="myNtfPage" id="myNtfPage"> 
    <div class="roleArr">
      <ul>
        <li @click="changeTag(index)" :class="roleActive == index?'active':''" v-for="(item,index) in roleList" :key="index">{{item.name}}</li>
      </ul>
      <div class="viewBtn" @click="handleView">
        <span>查看</span>
        <img class="viewBtn" width="200" :src="isShow?require('@/assets/picture/myicon/view1.png'):require('@/assets/picture/myicon/view.png')">
      </div>
    </div>
    <el-carousel :height="imgHeight+'px'" class="phoneShow">
      <el-carousel-item  v-for="(item,index) in infoArr[roleActive].info" :key="index">
        <div ref="imgBox">
          <img width="80%" :src="item.pic">
          <div class="textBox" v-if="isShow">
            <h5>属性：{{item.leval}}</h5>
            <p>{{item.name}}</p> 
            <p>技能：{{item.text}}</p> 
            <p>特点：{{item.name}}</p>          
          </div>
        </div>
        
      </el-carousel-item>
    </el-carousel>
    <el-row class="pcShow">
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
    <div class="mt20"></div>
    <div class="blindBox">
      <div class="titleTxt">
        盲盒
      </div>
      <div class="content">
        <div class="col10">
          <div class="box">
            <img width="90%" src="@/assets/picture/box.png">
            <span v-if="radio == 'usdc'">20% OFF</span>
          </div>
        </div>
        <div class="col12 txtBox">
          <p class="title">Code Green - Starry Troop</p>
          <p class="txtInfo">In this collection，There are 5 The Greek god character for you to unbox. Try your luck!</p>
          <p class="price">Price</p>
          <p class="priceTxt" v-if="radio == 'egg'">
            <span class="num">800</span>
            <span> EGG ≈ 5690 USDC</span>
          </p>
          <div class="priceText" v-else>
            <p class="originalPrice">800 EGG ≈ 5690 USDC <span>原价</span></p>
            <p class="presentPrice">4552 USDC <span>20% OFF</span></p>
          </div>
          <div class="totleNum">
            <span>Quantity</span>
            <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
          <div class="checkBox">
            <div class="flex">
              <span>购买方式</span>
              <el-radio-group v-model="radio">
                <el-radio label="egg">EGG</el-radio>
                <el-radio label="usdc">USDC</el-radio>
              </el-radio-group>
            </div>
            <div class="buyBtn">
              Buy
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="GameFi Description" name="GameFi">GameFi Description</el-tab-pane>
      <el-tab-pane label="NFT Detail" name="NFT">
        <div class="detailBox">
          <div class="detailTitle">
            <span>NFT Detail：</span>
            <span class="txt">发行者：Defender Team 数量：10000</span>
          </div>
          <el-table
            :data="tableData"
            stripe
            style="width: 95%">
            <el-table-column
              prop="date"
              label="Gods"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Rank"
              width="180">
              <template slot-scope="scope">
                <img width="80px" :src="scope.row.name?require('@/assets/picture/rank/5.png'):''">
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="Issue amount">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Attribute"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Probability"
              width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        imgHeight:'',
        num:0,
        radio:'egg',
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
        activeName: 'GameFi',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    created() {
      
    },
    mounted(){
      // 监听窗口变化，使得轮播图高度自适应图片高度
      window.addEventListener("resize", () => {
        this.imgHeight = this.$refs.imgBox[0].offsetHeight;
      });
    },
    methods: {
      changeTag(index){
        this.roleActive = index;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleView(){
        this.isShow = !this.isShow;
        this.$nextTick(function(){
          this.imgHeight = this.$refs.imgBox[0].offsetHeight;
        })
      },
    }
  };
</script>

<style lang="less" scoped>
  .myNtfPage{
    padding:322px 168px;
    background-color: #9898F3;
    .el-row{
        background-color: #fff;
        border: 1px solid #E9D9C9;
        border-top: none;
      }
    .el-carousel__container{
      height: auto!important;
    }
    .roleArr{
      width: 100%;
      display: flex;
      justify-content:space-between;
      align-items:center;
      border: 1px solid #E9D9C9;
      background-color: #fff;
      .active{
        background: #A39282;
        color: #fff;
      }
      .viewBtn{
        font-size: 23px;
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
        background-color: #fff;
        li{
          font-size: 24px;
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
      font-weight: 500;
      line-height: 25px;
      margin-bottom: 30px;
      h5{
        color: #fff;
        font-size: 24px;
        font-weight: 500;
      }
      p{
        font-size: 18px;
        font-weight: 500;
      }
    }
    .mt20{
      margin-top: 20px;
    }
    .blindBox{
      background-color: #fff;
      border: 1px solid #E9D9C9;
      .titleTxt{
        padding: 24px 27px;
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        color: #A39282;
        opacity: 1;
        border-bottom:1px solid #E9D9C9;
      }
      .content{
        padding:40px 35px;
        justify-content:space-between;
        display: flex;
        .col10{
          float: left;
          width: 40%;
        }
        .col12{
          float: left;
          width: 60%;
        }
        .box{
          position: relative;
          height: 100%;
          border-radius: 30px;
          margin-right: 60px;
          img{
            position: absolute;
            right: 0;
            top:0;
          }
          span{
            position: absolute;
            right: 0;
            bottom: 20%;
            color: #fff;
            background-color: #C91731;
            width: 150px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            font-size: 14px;
            border-top-left-radius:100px;
            border-bottom-left-radius:100px;
          }
        }
        .txtBox{
          .title{
            font-size: 30px;
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
            font-size: 26px;
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
            font-size: 30px;
            font-weight: bold;
            line-height: 59px;
            color: #A39282;
            margin:20px 0 0 0;
          }
          .priceTxt{
            font-size: 26px;;
            font-weight: bold;
            line-height: 59px;
            color: #333333;
            padding-bottom: 20px;
            border-bottom:1px solid #E9D9C9;
            .num{
              font-size: 64px;
              font-weight: bold;
              line-height: 112px;
              color: #EEB739;
              margin-right: 40px;
            }
          }
          .priceText{
            .originalPrice{
              color: #B8B8B8;
              font-size: 14px;
              justify-content:flex-start;
              align-items:center;
              display: flex;
              text-decoration: line-through;
              span{
                margin-left: 5px;
                padding: 0 5px;
                color: #fff;
                font-size: 12px;
                height: 30px;
                line-height: 30px;
                background-color: #B8B8B8;
                border-radius: 50px;
                text-decoration: line-through;
              }
            }
            .presentPrice{
              padding-bottom: 50px;
              font-weight: bold;
              color: #A39282;
              justify-content:flex-start;
              align-items:center;
              display: flex;
              font-size: 30px;
              border-bottom:1px solid #E9D9C9;
              span{
                margin-left: 30px;
                background-color: #C91731;
                color:#fff;
                height: 40px;
                line-height: 40px;
                width: 150px;
                text-align: center;
                border-radius: 100px;
                font-size: 12px;
              }
            }
          }
          .totleNum{
            padding:35px 0;
            font-size: 22px;
            font-weight: bold;
            line-height: 42px;
            color:  #A39282;
            span{
              margin-right: 55px;
            }
            /deep/ .el-input-number{
              width: 191px;
              height: 43px;
              line-height: 43px;
              border-radius: 100%;
              .el-input__inner{
                background: #A39282;
                color: #fff;
                height: 43px;
                line-height: 43px;
                border-radius: 100px;
                font-size: 32px;
              }
              .el-input-number__decrease, .el-input-number__increase{
                width: 43px;
                height: 43px;
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
            /*padding:35px 0;*/
            font-size: 22px;
            font-weight: bold;
            line-height: 42px;
            color: #A39282;
            justify-content:space-between;
            align-items:center;
            display: flex;
            span{
              margin-right: 20px;
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
                font-size: 24px;
                font-weight: bold;
                line-height: 42px;
                color: #000000 !important;
              }
              .el-radio__input.is-checked+.el-radio__label {
                color: #000000 !important;
              }
            }
            .buyBtn{
              width: 300px;
              height: 75px;
              text-align: center;
              line-height: 75px;
              font-size: 40px;
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
    /deep/ .el-tabs__item{
      font-size: 22px;
      font-weight: 500;
      line-height: 40px;
      color: #A39282;
    }
    /deep/ .el-tabs__nav-wrap::after{
      background-color: #E9D9C9;
    }
    /deep/ .el-tabs__nav{
      padding-bottom: 20px;
    }
    /deep/ .el-tabs{
      background-color: #fff;
      padding:28px 0 28px 50px;
    }
    /deep/ .el-tabs__active-bar{
      background-color: #EEB739;
      height: 6px;
    }
    /deep/ .el-tabs__header{
      margin-bottom: 38px;
    }
    /deep/ .el-tabs{
      margin-bottom: 76px;
    }
    .detailBox{
      .detailTitle{
        margin-bottom: 17px;
        span{
          font-size: 28px;
          font-weight: bold;
          line-height: 31px;
          color: #A39282;
          margin-right: 35px;
        }
        .txt{
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          color: #A39282;
          opacity: 1;
        }
      }
    }

  }
</style>
