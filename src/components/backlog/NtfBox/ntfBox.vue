<template>
  <div class="myNtfPage" id="myNtfPage">
    <div class="content pt40">
      <div class="roleArr">
        <div class="roleArrLeft">
          <ul>
            <li v-click @click="changeTag(index)" :class="roleActive == index?'active':''" v-for="(item,index) in roleList" :key="index">{{item.name}}</li>
          </ul>
          <div class="viewBtn" v-click @click="handleView">
            <span>More</span>
            <img class="viewBtn" width="200" :src="isShow?require('@/assets/picture/myicon/view1.png'):require('@/assets/picture/myicon/view.png')">
          </div>
        </div>
        <div class="switchBox">
           <el-switch
            v-model="isHave"
            active-color="#A39282"
            inactive-color="#EEEAF4">
          </el-switch>
          <span class="label">{{isHave?'Already owned':'All'}}</span>
        </div>
      </div>
      <el-carousel :height="imgHeight+'px'" class="phoneShow">
        <!-- bosun todo -->
        <el-carousel-item  v-for="(item,index) in nftArr[roleList[roleActive].name]" :key="'info1'+index">
        <!-- <el-carousel-item  v-for="(item,index) in nftArr[roleActive].info" :key="'info1'+index"> -->
          <div ref="imgBox">
            <img width="80%" :src="item.image">
            <!-- <img width="80%" :src="item.pic"> -->
            <div class="textBox" v-if="isShow">
              <h5>Attribute:{{item.levelStr}}</h5>
              <p>{{item.desc}}</p> 
              <p>Skills:{{item.skills}}</p> 
              <p>Features:{{item.features}}</p>          
            </div>
          </div>
        </el-carousel-item> 
      </el-carousel>
      <el-row class="pcShow">
        <!-- bosun todo -->
        <el-col v-for="(item,index) in nftArr[roleList[roleActive].name]" :key="'info2'+index">
        <!-- <el-col v-for="(item,index) in nftArr[roleActive].info" :key="'info2'+index"> -->
          <!-- bosun todo -->
          <img width="100%" :src="item.image">
          <!-- <img width="100%" :src="item.pic"> -->
          <div class="textBox" v-if="isShow">
            <h5>Attribute:{{item.levelStr}}</h5>
            <p>{{item.desc}}</p> 
            <p>Skills:{{item.skills}}</p> 
            <p>Features:{{item.features}}</p>          
          </div>
        </el-col>
      </el-row>
       <div class="banner">
        <img width="100%" src="@/assets/picture/boxBanner.png">
      </div> 
      <div class="mt20"></div>
      <div class="blindBox">
        <div class="content">
          <div class="col10">
            <div class="box">
              <img width="350vw" src="@/assets/picture/box.png">
              <span v-if="buyTokenIndex == '2'">20% OFF</span>
            </div>
          </div>
          <div class="col12 txtBox">
            <p class="title">Defender-Greek Gods</p>
            <p class="txtInfo">In this collection，There are 5 Greek gods for you to unbox. Try your luck!</p>
            <div class="priceBox">
              <p class="price">Price</p>
              <p class="priceTxt" v-if="buyTokenIndex == '1'">
                <span class="num">{{eggPrice}}</span>
                <span> EGG ≈ {{usdcPrice}} USDC</span>
              </p>
              <div class="priceText" v-else>
                <p class="originalPrice">{{eggPrice}} EGG ≈ {{usdcPrice}} USDC <span>price</span></p>
                <p class="presentPrice">{{usdcPriceAfterDiscount}} USDC <span>20% OFF</span></p>
              </div>
            </div>
            <div class="totleNum">
              <span>Quantity</span>
              <el-input-number v-model="numberToBuy" :min="1" :max="10" label=""></el-input-number>
            </div>
            <div class="checkBox">
              <div class="flex">
                <div class="flex">
                  <span>购买方式</span>
                  <el-radio-group v-model="buyTokenIndex">
                    <el-radio label="1">EGG</el-radio>
                    <el-radio label="2">USDC</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>
            <div class="buyBtnBox">
              <div :class="!approved ? 'buyBtn':'buyBtn disableBTn'" :disabled="!approved ?false:true" v-click @click="handleApprove">
                  Approve
              </div>
              <div  :class="approved?'buyBtn':'buyBtn disableBTn'" :disabled="approved?false:true" v-click @click="handleBuy">
                  Buy
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="GameFi Description" name="GameFi">
          <p class="description">Defender's "God Killing" game background is based on 
ancient Greek mythology. Players can start the game 
through blind boxes or freely choose mythological 
characters. The player's task is to pass the historical 
background and character experience of each mythical 
ﬁgure, travelled all over the worlds to win the ﬁnal "throne 
of the gods". </p>
        </el-tab-pane>
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
                prop="god"
                label="Gods"
                width="180">
              </el-table-column>
              <el-table-column
                prop="pic"
                label="Rank"
                width="180">
                <template slot-scope="scope">
                  <img width="80px" :src="scope.row.pic?scope.row.pic:''">
                </template>
              </el-table-column>
              <el-table-column
                prop="amount"
                label="Issue amount">
              </el-table-column>
              <el-table-column
                prop="attribute"
                label="Attribute"
                width="180">
              </el-table-column>
              <el-table-column
                prop="probability"
                label="Probability"
                width="180">
              </el-table-column>
            </el-table>
            <p class="mt20">*The NFT attribute coefficient issued by the user is multiplied by the user's Stake Token value in the Farm pool to obtain the Farm reward output of DFD pledge mining. Specific as table.</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
      <el-dialog :visible.sync="buyModelVisible" width="80%" append-to-body>
        <div class="buyBox" id="myNtfPageBuyBox">
          <div class="rightBox">
            <div class="title">Excellent !</div>
            <div>
              <div class="buyBoxBtn" v-click @click="handleNFT">My NFT</div>
              <div class="buyBoxBtn" v-click @click="handleStaking">NFT Staking</div>
              <div class="buyBoxBtn cancelBtn" @click="buyModelVisible = false">Cancel</div>
            </div> 
          </div>
        </div>
      </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs';
  import axios from 'axios';
  import { bus } from '../../../main';
  import { mapState, mapGetters } from 'vuex';
  import { Message } from 'element-ui';
import { toFixed } from '../../../utils/math';
  export default {
    data() {
      return {
        isHave:false,
        buyModelVisible:false,
        imgHeight:'350',
        numberToBuy:0,
        buyTokenIndex:'1',
        buyTokenSelected: {},
        priceCeiling: 1.01,
        nftBought: [],
        isShow:false,
        roleActive:0,
        eggPrice: 0,
        usdcPrice: 0,
        usdcPriceAfterDiscount: 0,
        usdcDiscount: 0,
        eggAmountRequired: 0,
        usdcAmountRequired: 0,
        eggAllowance: 0,
        usdcAllowance: 0,
        roleList:[
          {
            name:'Athena',
          },
          {
            name:'Poseidon',
          },
          {
            name:'Venus',
          },
          {
            name:'Apollo',
          },
          {
            name:'Cupid',
          }
        ],
        // bosun todo
        nftArr:[],
        activeName: 'GameFi',
        tableData: [{
          god:'Show-hand Fan Gods',
          pic:require('@/assets/picture/rank/1.png'),
          amount:4000,
          attribute:'1x',
          probability:'40%'
        }, 
        {
          god:'Small profit Gods',
          pic:require('@/assets/picture/rank/2.png'),
          amount:4000,
          attribute:'2x',
          probability:'40%'
        },
        {
          god:'Rich and noble Gods',
          pic:require('@/assets/picture/rank/3.png'),
          amount:750,
          attribute:'4x',
          probability:'7.5%'
        }, 
        {
          god:'Freedom of wealth Gods',
          pic:require('@/assets/picture/rank/4.png'),
          amount:750,
          attribute:'8x',
          probability:'7.5%'
        },
        {
          god:'Big Whale Gods',
          pic:require('@/assets/picture/rank/5.png'),
          amount:500,
          attribute:'10x',
          probability:'5%'
        }, 
        ]
      };
    },
    created() {
      if (this.walletConnected) {
        this.nftArr = this.$store.state.baseData.nfts;
        this.prepare();
      }

      bus.$on('dggTokenTraded', () => {
          this.buyModelVisible = true;   
          return Message({
              message: 'NFT tokens have been successfully traded.',
              type: 'success',
          });
      });
    },
    mounted(){
      // 监听窗口变化，使得轮播图高度自适应图片高度
      window.addEventListener("resize", () => {
        this.imgHeight = this.$refs.imgBox[0].offsetHeight;
        console.log(this.imgHeight,'this.imgHeight');
      });
    },
    watch: {
      numberToBuy: function(newVal) {
        if (newVal > 0) {
          this.eggAmountRequired = this.eggPrice * newVal;
          this.usdcAmountRequired = this.usdcPriceAfterDiscount * newVal;
        }
      },
      '$store.state.web3.contracts.dgg_sale': function(newVal) {
        if (newVal) {
           this.prepare();
        }
      },
      '$store.state.baseData.nfts': function(newVal) {
          if(newVal){
            // bosun todo
            this.nftArr = newVal;
            console.log('this.nftArr', this.nftArr)
          }
      },
      '$store.state.web3.nft_bought': function(newVal) {
          if(newVal){
              this.nftBought = JSON.parse(newVal);
              console.log('nftBought', this.nftBought);
              if (this.nftBought.length > 0) {
                setTimeout(() => {
                  this.$router.push('myNFT');
                }, 2000);
                
                return Message({
                  message: `Congratulations. You have successfully bought ${this.nftBought.length} DGGs.`,
                  type: 'success',
                });
              } else {
                return Message({
                    message: 'Purchase failed. Please contact our customer service.',
                    type: 'error',
                });
              }
              
          }
      }
    },
    computed: {
      web3() {
        return this.$store.state.web3.web3;
      },
      blockLatest() {
        return this.$store.state.web3.block;
      },
      walletConnected() {
        return this.$store.state.web3.web3 !== null && this.$store.state.web3.web3 !== undefined;
      },
      tokenEgg() {
        return this.$store.state.web3.tokens[10];
      },
      tokenUsdc() {
        return this.$store.state.web3.tokens[3];
      },
      dggTokenContract() {
        return this.$store.state.web3.contracts.token.dgg;
      },
      dggSaleContract() {
        return this.$store.state.web3.contracts.dgg_sale;
      },
      // usdcTokenContract() {
      //   return this.$store.state.web3.contracts.token.usdc;
      // },
      randContract() {
        return this.$store.state.web3.contracts.rand;
      },
      user() {
        return (this.$store.state.web3.accounts.length > 0) ? this.$store.state.web3.accounts[0] : '';
      },
      minter() {
        return this.$store.state.web3.minter;
      },
      approved() {
        return this.walletConnected && ((this.buyTokenIndex == '1') ? this.eggAmountRequired > 0 && this.eggAllowance > 0 && this.eggAmountRequired <= this.eggAllowance : this.usdcAmountRequired > 0 && this.usdcAllowance > 0 && this.usdcAmountRequired <= this.usdcAllowance);
      },
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
      async prepare() {
        if (this.walletConnected === false) {
          alert("Please unlock your wallet first.");
          return;
        }

        // let myDggs = await this.dggTokenContract.methods.getUserTokens(this.user, 0).call();
        // console.log('myDggs', myDggs);

        let eggPrice = await this.dggSaleContract.methods.basePrice().call();
        this.eggPrice = eggPrice / Math.pow(10, this.tokenEgg.decimals);
        this.eggAmountRequired = this.eggPrice;

        let usdcPrice = await this.dggSaleContract.methods.getApproxPrice(this.tokenUsdc.contract.options.address, '1').call();
        let usdcDiscount = await this.dggSaleContract.methods.discounts(this.tokenUsdc.contract.options.address).call();
        console.log(`usdcPrice = ${usdcPrice}, usdcDiscount = ${usdcDiscount}`)
        this.usdcPrice = (usdcPrice * this.priceCeiling / Math.pow(10, this.tokenUsdc.decimals)).toFixed(2);
        this.usdcPriceAfterDiscount = (usdcPrice * this.priceCeiling * usdcDiscount / Math.pow(10, this.tokenUsdc.decimals + 2)).toFixed(2);
        this.usdcDiscount = usdcDiscount / 100.0;
        this.usdcAmountRequired = (usdcPrice * this.priceCeiling * usdcDiscount / Math.pow(10, this.tokenUsdc.decimals + 2));
        let allowanceEgg = await this.tokenEgg.contract.methods.allowance(this.user, this.dggSaleContract.options.address).call();
        let allowanceUsdc = await this.tokenUsdc.contract.methods.allowance(this.user, this.dggSaleContract.options.address).call();
        this.eggAllowance = allowanceEgg / Math.pow(10, this.tokenEgg.decimals);
        this.usdcAllowance = allowanceUsdc / Math.pow(10, this.tokenUsdc.decimals);
        console.log(`eggAmountRequired = ${this.eggAmountRequired}, eggAllowance = ${this.eggAllowance}, this.usdcAmountRequired = ${this.usdcAmountRequired}, usdcAllowance = ${this.usdcAllowance}`)
      },
      async handleApprove(){
        if (this.walletConnected === false) {
          alert("Please unlock your wallet first.");
          return;
        }

        let amountSrc = 0;
        let amountSrcWei = 0;
        if (this.buyTokenIndex == '1') {
          this.buyTokenSelected = this.tokenEgg;
          amountSrc = this.eggPrice * this.numberToBuy;
          amountSrcWei = toFixed(amountSrc * Math.pow(10, this.buyTokenSelected.decimals)) + '';
          this.eggAmountRequired = amountSrc;
        } else if (this.buyTokenIndex == '2') {
          this.buyTokenSelected = this.tokenUsdc;
          amountSrc = await this.dggSaleContract.methods.getApproxPrice(this.tokenUsdc.contract.options.address, this.numberToBuy + '').call();
          amountSrcWei = toFixed(amountSrc * this.priceCeiling * this.usdcDiscount) + '';
          this.usdcAmountRequired = amountSrcWei / Math.pow(10, this.buyTokenSelected.decimals);
        }

        console.log(`this.eggAmountRequired = ${this.eggAmountRequired}, this.usdcAmountRequired = ${this.usdcAmountRequired}, amountSrcWei = ${amountSrcWei}`);

        let balance = await this.buyTokenSelected.contract.methods.balanceOf(this.user).call();
        console.log(`Token = ${this.buyTokenSelected.symbol}, amountSrc = ${amountSrc}, Balance is ${balance}`);

        await this.buyTokenSelected.contract.methods.approve(this.dggSaleContract.options.address, amountSrcWei).send({ from: this.user, gasLimit: this.blockLatest.gasLimit});

        let allowance = await this.buyTokenSelected.contract.methods.allowance(this.user, this.dggSaleContract.options.address).call();

        if (this.buyTokenIndex == '1') {
          this.eggAllowance = allowance / Math.pow(10, this.tokenEgg.decimals);
        } else {
          this.usdcAllowance = allowance / Math.pow(10, this.tokenUsdc.decimals);
        }

        console.log(`Token = ${this.buyTokenSelected.symbol}, allowance = ${allowance}`);
      },
      // buy btn
      async handleBuy(){
        if (this.walletConnected === false) {
          alert("Please unlock your wallet first.");
          return;
        }

        this.buyTokenSelected = (this.buyTokenIndex === '1') ? this.tokenEgg : this.tokenUsdc;
        let tokenSrc = this.buyTokenSelected.address;
        let amountRequired = (this.buyTokenIndex === '1') ? this.eggAmountRequired : this.usdcAmountRequired;
        let amountMax = amountMax = toFixed(amountRequired * Math.pow(10, this.buyTokenSelected.decimals)) + '';
        
        let url = this.$store.state.url.api.base + this.$store.state.url.api.nft.generate_rand;
        console.log(`url = ${url}`)
        let randomSeed = parseInt(Math.random() * 10000);
        await this.dggSaleContract.methods.tradeToken(tokenSrc, this.user, this.numberToBuy, amountMax, randomSeed).send({from: this.user, gasLimit: this.blockLatest.gasLimit});
        let currentTokenId = await this.dggTokenContract.methods.currentTokenId().call();
        let currentUri = await this.dggTokenContract.methods.currentUri().call();
        console.log(`currentTokenId = ${currentTokenId}, currentUri = ${currentUri}`)
        let tokensBought = await this.dggSaleContract.methods.getUserTokens(this.user).call();
        console.log('tokensBought', tokensBought);

        this.eggAmountRequired = 0;
        this.usdcAmountRequired = 0;
        

        // axios({
        //     url: url,
        //     method: 'post'
        // }).then(async (data) => {
        //     if (data.status === 200) {
        //         console.log('data', data.data);
        //         await this.dggSaleContract.methods.tradeToken(tokenSrc, this.user, this.numberToBuy, amountMax).send({from: this.user, gasLimit: this.blockLatest.gasLimit});
        //         let currentTokenId = await this.dggTokenContract.methods.currentTokenId().call();
        //         let currentUri = await this.dggTokenContract.methods.currentUri().call();
        //         console.log(`currentTokenId = ${currentTokenId}, currentUri = ${currentUri}`)
        //         let tokensBought = await this.dggSaleContract.methods.getUserTokens(this.user).call();
        //         console.log('tokensBought', tokensBought);

        //         this.eggAmountRequired = 0;
        //         this.usdcAmountRequired = 0;
        //         this.buyModelVisible = true;   
        //     }
        // })
        
        
      },
      handleNFT(){
        this.$router.push({path: '/myNFT'});
      },
      handleStaking(){
        this.$router.push({path: '/NFTStaking'});
      },
    }
  };
</script>

<style lang="less" scoped>
  /deep/ .el-dialog{
      background: none;
      border:none;
      box-shadow:none;
      .el-dialog__header{
        border: none;
      }
      .el-dialog__body{
        overflow:hidden;
      }
    }
    .pt40{
      padding-top: 40px !important;
    }
    .buyBox{
      .leftBox{
        img{
          width: 100%;
        }
        .txtBox{
          width: 336px;
          height: 271px;
          background: #0000008c;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          padding:24px 40px;
          border-radius: 30px;
          margin:0 auto;
          display: block;
          .title{
            font-size: 40px;
            font-weight: bold;
            line-height: 56px;
            color: #FFFFFF;
          }
          .dec{
            font-size: 24px;
            margin-top: 10px;
            font-weight: 500;
            line-height: 33px;
            color: #FFFFFF;
          }
          p{
            font-size: 19px;
            margin-top: 10px;
            font-weight: 500;
            line-height: 26px;
            color: #FFFFFF;
          }
        }
      }
      .rightBox{
        text-align: center;
        .title{
          font-size: 60px;
          font-weight: 500;
          line-height: 84px;
          margin-bottom: 60px;
          color: #FFFFFF;
        }
        .buyBoxBtn{
          width: 340px;
          height: 80px;
          background: #A39282;
          text-align: center;
          line-height: 80px;
          opacity: 1;
          border-radius: 20px;
          color: #fff;
          cursor: pointer;
          font-size: 34px;
          font-weight: bold;
          display: block;
          margin:0 auto;
          margin-bottom: 45px;
        }
        .cancelBtn{
          background: #707070;
        }
      }
    }
  .myNtfPage{
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('~@/assets/picture/nftBoxBg.png');
    padding-bottom: 50px;
    .content{
      padding:0 168px;
    }
    .banner{
      width: 100%;
      background: #E9D9C9;
      margin:36px auto 40px auto;
      border-radius: 30px;
      overflow: hidden;
    }
    .el-row{
   /*     background-color: #fff;
        border: 1px solid #E9D9C9;*/
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
      margin-bottom:60px;
      /*background-color: #fff;*/
      .roleArrLeft{
        display: flex;
        justify-content:flex-start;
        align-items:center;
      }
      .switchBox{
        display: flex;
        justify-content:flex-start;
        align-items:center;
        .label{
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: bold;
          line-height: 33px;
          color: #A39282;
          opacity: 1;
          background: none;
          margin-left: 23px;
        }
      }
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
        /*background-color: #fff;*/
        li{
          width: 160px;
          text-align: center;
          line-height: 60px;
          height: 60px;
          display: block;
          font-size: 24px;
          font-weight: 500;
          color: #A39282;
          border-radius: 31px;
          cursor: pointer;
          margin-right: 25px;
          background: #FFFFFF;
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
      height: 350px;
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
      border-radius: 30px;
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
          width: 35%;
        }
        .col12{
          float: left;
          width: 65%;
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
            bottom: 30%;
            color: #fff;
            background-color: #C91731;
            width: 150px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            font-size: 18px;
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
            color: #827569;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
          .priceBox{
            justify-content:flex-start;
            align-items:center;
            display: flex;
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
            margin-right: 20px;
          }
          .priceTxt{
            margin-top: 20px;
            font-size: 26px;;
            font-weight: bold;
            line-height: 59px;
            color: #333333;
            .num{
              margin-right: 40px;
              height: 80px;
              font-size: 30px;
              font-weight: bold;
              line-height: 80px;
              padding:0 20px;
              font-size: 40px;
              font-family: PingFang SC;
              font-weight: bold;
              border-radius: 20px;
              color: #000000;
              background:#E9EAEB;
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
              padding-bottom: 20px;
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
            justify-content:flex-start;
            align-items:center;
            display: flex;
            color: #A39282;
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
            color: #000;
            justify-content:space-between;
            align-items:center;
            display: flex;
            span{
              color: #A39282  ;
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
          }
          .buyBtnBox{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 20px;
            padding-bottom: 40px;
          }
          .disableBTn{
            background: #E9EAEB !important;
            color: #999999 !important;
          }
          .buyBtn{
            width: 500px;
            height: 76px;
            background: #A39282;
            opacity: 1;
            border-radius: 20px;
            font-size: 30px;
            font-family: PingFang SC;
            font-weight: bold;
            line-height: 76px;
            text-align: center;
            cursor: pointer;
            color: #FFFFFF;
            margin-right:150px;
          }
        }
      }
    }
    /deep/ .el-tabs{
      border-radius: 30px;
      overflow: hidden;
      margin-top: 20px;
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
    .description{
      font-size: 22px;
      line-height: 40px;
      color:#A39282;
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
  @media(max-width:641px) {
    .roleArr{
      display: inline!important;
      .roleArrLeft{
        display: inline!important;
        ul{
          width:auto;
          padding:0 16px;
          overflow: auto;
          justify-content:flex-start;
          li{
            width:auto;
            padding:0 16px;
            margin-right:20px;
          }
        }
        .viewBtn{
          justify-content: flex-start;
          display: inline-block;
          margin:20px;
        }
      }
      .switchBox{
        display: inline-block!important;
        .label{
          margin-left:0!important;
          display: inline-block!important;
        }
      }
    }
    /deep/ .el-table{
      table{
        width:auto!important;
      }
    }
    .content.pt40{
      padding:40px 20px 0!important ;
    }
    .buyBtnBox{
      margin-left:30px;
    }
    .el-table{
      width:100%!important;
    }
    .myNtfPage .detailBox .detailTitle .txt{
      margin-right:0;
      word-break:break-all;
    }
    .myNtfPage .el-tabs{
      padding:20px;
    }
    .myNtfPage .detailBox .detailTitle span{
      margin-right:0;
    }
    .blindBox .box{
      margin:0!important;
    }
    .blindBox .box img{
      width:80%!important;
      padding:20px;
    }
  }
</style>
