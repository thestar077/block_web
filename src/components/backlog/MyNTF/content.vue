<template>
  <div class="myNTFPage" id="myNTFPage"> 
    <div class="myNTF">
      My NFT
      <img class="arrow" src="@/assets/picture/arrow.png">
      赛波冬A
    </div>
    <div class="line"></div>
    <div class="contentNFTBox">
      <el-row :gutter="50">
        <el-col :span="8">
          <img class="rolePic" src="@/assets/picture/SSR.png">
        </el-col>
        <el-col :span="16">
          <div>
            <div class="tagList">
              <span @click="tagIndex = index" :class="tagIndex == index?'tag active':'tag'" v-for="(item,index) in options" :key="index">{{item.name}}</span>
            </div>
            <div class="txtBox">
              {{options[tagIndex].txt}}
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="footerBox">
        <el-row :gutter="30">
          <el-col :span="8">
            <p class="p1">Conteact:</p>
            <p class="p2">oxhjdhjkahfuifhjksdhgriojgjhj</p>
          </el-col>
          <el-col :span="8">
            <p class="p1">Defender Anthea:</p>
            <p class="p2">A</p>
          </el-col>
          <el-col :span="8">
            <p class="p1">Owner:</p>
            <p class="p2">hjdhfjhdghiuejwopkeoakldngvgrtju</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        tagIndex:0,
        options:[
          {
            name:'Description',
            value:0,
            txt:'Description：Defender’s “God Killing” game background is based on ancient Greek mythology. Players can start the game through blind boxes or freely choose mythological characters. The player’s task is to pass the historical background and character experience of each mythical figure, travelled all over the worlds to win the final “throne of the gods”.'
          },
          {
            name:'About Defender',
            value:1,
            txt:'Description：Defender’s “God Killing” game background is based on ancient Greek mythology. Players can start the game through blind boxes or freely choose mythological characters. The player’s task is to pass the historical background and character experience of each mythical figure, travelled all over the worlds to win the final “throne of the gods”.'
          },
          {
            name:'Detail',
            value:2,
            txt:'Description：Defender’s “God Killing” game background is based on ancient Greek mythology. Players can start the game through blind boxes or freely choose mythological characters. The player’s task is to pass the historical background and character experience of each mythical figure, travelled all over the worlds to win the final “throne of the gods”.'
          },
          {
            name:'Attribute',
            value:3,
            txt:'Description：Defender’s “God Killing” game background is based on ancient Greek mythology. Players can start the game through blind boxes or freely choose mythological characters. The player’s task is to pass the historical background and character experience of each mythical figure, travelled all over the worlds to win the final “throne of the gods”.'
          }
        ]
      };
    },
    created() {
      
    },
    methods: {
    }
  };
</script>

<style lang="less" scoped>
  .myNTFPage{
    padding:22px 168px 0 168px;
    .myNTF{
      font-size: 28px;
      font-weight: 500;
      line-height: 40px;
      color: #A39282;
      padding:20px 34px;
      background: #fff;
    }
    .arrow{
      width: 7px;
      margin:0 30px;
    }
    .line{
      width: 100%;
      height: 20px;
      background: #E9D9C9;
    }
    .contentNFTBox{
      padding-top: 50px;
      .rolePic{
        height: 400px;
      }
      .tagList{
        display: flex;
        justify-content:space-between;
        align-items:center;
      }
      .txtBox{
        width: 100%;
        padding:25px 35px 40px 35px;
        background: #fff;
        font-size: 24px;
        font-weight: bold;
        line-height: 40px;
        color: #A39282;
        opacity: 1;
        height: 300px;
        margin-top:30px;
      }
      .tag{
        display: block;
        width: 200px;
        height: 60px;
        line-height: 60px;
        background: #FFFFFF;
        border: 1px solid #E9E0D2;
        opacity: 1;
        border-radius: 30px;
        border-radius: 30px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        color: #A39282;
        cursor: pointer;
        margin-right: 44px;
      }
      .active{
        background: #A39282;
        border: 1px solid #E9D9C9;
        color: #fff;
      }
      .footerBox{
        margin-top: 30px;
        padding:30px 35px;
        background: #fff;
        .p1{
          font-size: 24px;
          font-weight: bold;
          line-height: 28px;
          color: #A39282;
          opacity: 1;
        }
        .p2{
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
          color: #A39282;
          opacity: 1;
        }
      }
    }
    .bg{
      background: #fff;
    }
    .mt20{
      margin-top: 20px;
    }
    .box{
      position: relative;
    }
  }
</style>
