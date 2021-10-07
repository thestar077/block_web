<template>
  <div class="myNTFPage" id="myNTFPage"> 
    <div class="myNTF">
      My NTF
      <img class="arrow" src="@/assets/picture/arrow.png">
      赛波冬A
    </div>
    <div class="line"></div>
    <div>
      <img width="360" src="@/assets/picture/SSR.png">
    </div>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
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
    .myNTF{
      padding: 20px 35px;
      font-size: 28px;
      font-weight: 500;
      line-height: 40px;
      color: #A39282;
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
    .mt20{
      margin-top: 20px;
    }
    .box{
      position: relative;
    }
  }
</style>
