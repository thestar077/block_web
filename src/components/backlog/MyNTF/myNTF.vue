<template>
  <div class="myNTFPage" id="myNTFPage"> 
    <div class="myNTF">My NTF</div>
    <div class="line"></div>
    <div class="roleArr">
      <ul>
        <li @click="changeTag(index)" :class="roleActive == index?'active':''" v-for="(item,index) in roleList" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <el-row>
      <el-col v-for="(item,index) in infoArr[roleActive].info" :key="index">
        <img width="100%" :src="item.pic">
      </el-col>
    </el-row>
    <div class="line mt20"></div>
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
            name:'所有角色',
          },
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
      };
    },
    created() {
      
    },
    methods: {
      changeTag(index){
        this.roleActive = index;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="less" scoped>
  .myNTFPage{
    .myNTF{
      padding: 20px 35px;
      font-size: 28px;
      font-weight: 500;
      line-height: 40px;
      color: #A39282;
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
  }
</style>
