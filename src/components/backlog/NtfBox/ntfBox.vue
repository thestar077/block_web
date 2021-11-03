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
        <!-- <el-carousel-item  v-for="(item,index) in nftArr[roleList[roleActive].name]" :key="'info1'+index"> -->
        <el-carousel-item  v-for="(item,index) in nftArr[roleActive].info" :key="'info1'+index">
          <div ref="imgBox">
            <!-- <img width="80%" :src="item.image"> -->
            <img width="80%" :src="item.pic">
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
        <!-- <el-col v-for="(item,index) in nftArr[roleList[roleActive].name]" :key="'info2'+index"> -->
        <el-col v-for="(item,index) in nftArr[roleActive].info" :key="'info2'+index">
          <!-- bosun todo -->
          <!-- <img width="100%" :src="item.image"> -->
          <img width="100%" :src="item.pic">
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
              <img width="90%" src="@/assets/picture/box.png">
              <span v-if="buyToken == 'usdc'">20% OFF</span>
            </div>
          </div>
          <div class="col12 txtBox">
            <p class="title">Defender-Greek Gods</p>
            <p class="txtInfo">In this collection，There are 5 Greek gods for you to unbox. Try your luck!</p>
            <div class="priceBox">
              <p class="price">Price</p>
              <p class="priceTxt" v-if="buyToken == 'egg'">
                <span class="num">{{800}}</span>
                <span> EGG ≈ 5690 USDC</span>
              </p>
              <div class="priceText" v-else>
                <p class="originalPrice">{{dggPriceEgg}} EGG ≈ 5690 USDC <span>price</span></p>
                <p class="presentPrice">4552 USDC <span>20% OFF</span></p>
              </div>
            </div>
            <div class="totleNum">
              <span>Quantity</span>
              <el-input-number v-model="num" :min="1" :max="10" label=""></el-input-number>
            </div>
            <div class="checkBox">
              <div class="flex">
                <div class="flex">
                  <span>购买方式</span>
                  <el-radio-group v-model="buyToken">
                    <el-radio label="egg">EGG</el-radio>
                    <el-radio label="usdc">USDC</el-radio>
                  </el-radio-group>
                </div>
                <div class="buyBtn" v-click @click="handleBuy">
                  Buy
                </div>
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
  import { mapState, mapGetters } from 'vuex';
  import { Message } from 'element-ui';
  export default {
    data() {
      return {
        isHave:false,
        buyModelVisible:false,
        imgHeight:'350',
        num:0,
        buyToken:'egg',
        nftBought: [],
        isShow:false,
        roleActive:0,
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
        // nftArr:[],
        nftArr:[
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'Big Whale Athena',
                features:'goddess of war, face the evil',
                skill:'Show-hand mainstream, stable profit',
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'Freedom of wealth Athena',
                features:'goddess of war, face the evil',
                skill:'Show-hand mainstream, stable profit',
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'Rich and noble Athena',
                features:'goddess of war, face the evil',
                skill:'Show-hand mainstream, stable profit',
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'Small profit Athena',
                features:'goddess of war, face the evil',
                skill:'Show-hand mainstream, stable profit',
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'Show-hand Fan Athena',
                features:'goddess of war, face the evil',
                skill:'Show-hand mainstream, stable profit',
              }
            ],
          },
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'Big Whale Poseidon',
                features:'The god of the sea who shakes the earth.',
                skill:' Show-hand copycat, get rich overnight.',
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'Freedom of wealth Poseidon',
                features:'The god of the sea who shakes the earth.',
                skill:' Show-hand copycat, get rich overnight.',
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'Rich and noble Poseidon',
                features:'The god of the sea who shakes the earth.',
                skill:' Show-hand copycat, get rich overnight.',
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'Small profit Poseidon',
                features:'The god of the sea who shakes the earth.',
                skill:' Show-hand copycat, get rich overnight.',
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'Show-hand Fan Poseidon',
                features:'The god of the sea who shakes the earth.',
                skill:' Show-hand copycat, get rich overnight.',
              }
            ],
          },
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'Big Whale Venus',
                features:'arouse love and beauty in hearts of all things in the universe',
                skill:'Show-hand DFD, reach the peak of life',
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'Freedom of wealth Venus',
                features:'arouse love and beauty in hearts of all things in the universe',
                skill:'Show-hand DFD, reach the peak of life',
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'Rich and noble Venus',
                features:'arouse love and beauty in hearts of all things in the universe',
                skill:'Show-hand DFD, reach the peak of life',
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'Small profit Venus',
                features:'arouse love and beauty in hearts of all things in the universe',
                skill:'Show-hand DFD, reach the peak of life',
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'Show-hand Fan Venus',
                features:'arouse love and beauty in hearts of all things in the universe',
                skill:'Show-hand DFD, reach the peak of life',
              }
            ],
          },
          {
            info:[
                            {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'Big Whale Apollo',
                features:'God of the sun and protector of human civilization',
                skill:'EGG full position, get nice lover',
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'Freedom of wealth Apollo',
                features:'God of the sun and protector of human civilization',
                skill:'EGG full position, get nice lover',
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'Rich and noble Apollo',
                features:'God of the sun and protector of human civilization',
                skill:'EGG full position, get nice lover',
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'Small profit Apollo',
                features:'God of the sun and protector of human civilization',
                skill:'EGG full position, get nice lover',
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'Show-hand Fan Apollo',
                features:'God of the sun and protector of human civilization',
                skill:'EGG full position, get nice lover',
              }
            ],
          },
          {
            info:[
              {
                pic:require('@/assets/picture/SSR.png'),
                leval:'SSR',
                name:'Big Whale Cupid',
                features:'My arrow has been aimed at people bathed in love',
                skill:'Band master, K-line divine hand',
              },
              {
                pic:require('@/assets/picture/SR.png'),
                leval:'SR',
                name:'Freedom of wealth Cupid',
                features:'My arrow has been aimed at people bathed in love',
                skill:'Band master, K-line divine hand',
              },
              {
                pic:require('@/assets/picture/S.png'),
                leval:'S',
                name:'Rich and noble Cupid',
                features:'My arrow has been aimed at people bathed in love',
                skill:'Band master, K-line divine hand',
              },
              {
                pic:require('@/assets/picture/A+.png'),
                leval:'A+',
                name:'Small profit Cupid',
                features:'My arrow has been aimed at people bathed in love',
                skill:'Band master, K-line divine hand',
              },
              {
                pic:require('@/assets/picture/A.png'),
                leval:'A',
                name:'Show-hand Fan Cupid',
                features:'My arrow has been aimed at people bathed in love',
                skill:'Band master, K-line divine hand',
              }
            ],
          }
        ],
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
      // setTimeout(() => {
      //   console.log('AAA', this.nftsAll);
      // }, 3000);
    },
    mounted(){
      // 监听窗口变化，使得轮播图高度自适应图片高度
      window.addEventListener("resize", () => {
        this.imgHeight = this.$refs.imgBox[0].offsetHeight;
        console.log(this.imgHeight,'this.imgHeight');
      });
    },
    watch: {
      '$store.state.baseData.nfts': function(newVal) {
          if(newVal){
            // bosun todo
            // this.nftArr = newVal;
            // console.log('this.nftArr', this.nftArr)
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
      eggTokenContract() {
        return this.$store.state.web3.contracts.token.egg;
      },
      dggTokenContract() {
        return this.$store.state.web3.contracts.token.dgg;
      },
      dggSaleContract() {
        return this.$store.state.web3.contracts.dgg_sale;
      },
      randContract() {
        return this.$store.state.web3.contracts.rand;
      },
      user() {
        return (this.$store.state.web3.accounts.length > 0) ? this.$store.state.web3.accounts[0] : '';
      },
      minter() {
        return this.$store.state.web3.minter;
      },
      dggPriceEgg() {
        return parseInt((this.$store.state.baseData.config.hasOwnProperty('dgg_price_egg')) ? this.$store.state.baseData.config.dgg_price_egg : this.$store.state.baseData.consts.dgg_price_egg_default);
      }
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
      // buy btn
      async handleBuy(){
        this.buyModelVisible = true;
        // this.$router.push({path: "/authorization"});//跳转授权
        // Step 1: Check balances
        let buyer = this.user;
        let minter = this.minter;
        if (buyer === '') {
          alert('Please connect to your wallet first.');
          return;
        } 
        console.log('buyer', buyer);
        let balanceDgg = await this.dggTokenContract.methods.balanceOf(minter).call();
        console.log(`Before purchase: balanceDgg of seller = ${balanceDgg}`);
        let buyerTokenAddress = '';
        let numberToBuy = this.num;
        let price = this.dggPriceEgg;
        let total = numberToBuy * price;
        if (this.buyToken === 'egg') {
          let balanceEgg = await this.eggTokenContract.methods.balanceOf(buyer).call();
          console.log(`Before purchase: balanceEgg of buyer = ${balanceEgg}`);
          buyerTokenAddress = this.eggTokenContract.options.address;

          console.log('this.dggSaleContract.options.address', this.dggSaleContract.options.address);
          console.log('total', total);
          console.log('buyer', buyer);
          await this.eggTokenContract.methods.approve(this.dggSaleContract.options.address, total).send({from: buyer});
          let allowance = await this.eggTokenContract.methods.allowance(buyer, this.dggSaleContract.options.address).call();
          console.log(`EGG allowance to dgg-sale contract = ${allowance}`);
        } else if (this.buyToken === 'usdc') {
          // Add later.
        }

        console.log(`buyer = ${buyer}, buyerToken = ${buyerTokenAddress}, number = ${numberToBuy}, price = ${price}`);

        let data = {
          buyer: buyer,
          buyerToken: buyerTokenAddress,
          number: numberToBuy,
          price: price,
        };
        
        this.$store.dispatch('tradeNftToken', data);
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
          .buyBtn{
            width: 341px;
            height: 76px;
            background: #C91731;
            opacity: 1;
            border-radius: 20px;
            font-size: 40px;
            font-family: PingFang SC;
            font-weight: bold;
            line-height: 76px;
            text-align: center;
            cursor: pointer;
            color: #FFFFFF;
            margin-left:150px;
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
</style>
