<template>
  <div class="authorization" id="authorizationPage"> 
    <div class="box">
      <div class="header">
        <img src="@/assets/picture/LogoTextNewWhite.png">
        <p class="p1">bsc.Defender.finance</p>
        <p class="p2">申请Defender转账授权</p>
        <div class="tips">
          <span>请勿给任何来历不明的链接，空投进行此授权</span>
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
      <div class="showBox">
        <div class="inputBox">
          <span class="p1">付款钱包</span>
          <span class="p2"></span>
        </div>
        <div class="inputBox">
          <span class="p1">授权合约</span>
          <span class="p2"></span>
        </div>
        <div class="inputBox">
          <span class="p1">授权数量</span>
          <div>
            <span class="p2 w200"></span>
            <span @click="dialogVisible = true" class="iconTxt el-icon-edit"></span>
          </div>
        </div>
        <div class="inputBox">
          <span class="p1">矿工费</span>
          <div>
            <span class="p2 w200"></span>
            <span class="iconTxt el-icon-arrow-right"></span>
          </div>
        </div>
      </div>
      <div class="confirmBtn">确认支付</div>
    </div>
    <el-dialog
      title="授权数量" append-to-body
      :visible.sync="dialogVisible"
      width="20%">
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label=""></el-input-number>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
   </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        num:1,
        dialogVisible:false,
      };
    },
    created() {
      
    },
    methods: {
      handleChange(){},
    }
  };
</script>

<style lang="less" scoped>
   /deep/ .el-input-number{
      display: block;
      margin:0 auto;
    }
    /deep/ .el-button--primary{
      background: #4080FC;
      border-color: #4080FC;
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
        img{
          width: 100px;
          height: 100px;
          display: block;
          margin:0 auto 20px auto;
          border-radius: 100px;
          background: #8027A2;
        }
        .p1{
          color: #C2C2C2;
          text-align: center;
          font-size: 18px;
        }
        .p2{
          font-size: 28px;
          color: #000;
          margin-bottom: 20px;
          text-align: center;
        }
        .tips{
          width: 100%;
          padding:30px;
          background: #FDEBEB;
          color: #BE3940;
          font-size: 24px;
          justify-content:space-between;
          align-items: center;
          display: flex;
          border-radius: 10px;
        }
      }
      .w200{
        width: 200px;
      }
      .showBox{
        .inputBox{
          padding:30px 0;
          border-bottom: 1px solid #F5F5F5;
          margin-bottom: 20px;
          display: flex;
          justify-content:space-between;
          align-items: center;
        }
        .p1{
          color: #C2C2C2;
          font-size: 24px;
          width: 200px;
          margin-right: 20px;
          text-align: left;
        }
        .p2{
          color: #000;
          font-size: 24px;
          width: 200px;
        }
        .iconTxt{
          cursor: pointer;
          font-size: 24px;
          color: #4D69F1;
          font-weight: bold;
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
  }
</style>
