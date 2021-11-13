<template>
  <div class="myNTFPage" id="myNTFPage"> 
    <div class="roleArr">
      <ul>
        <li v-click @click="changeTag(index)" :class="roleActive == index?'active':''" v-for="(item,index) in roleList" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <el-carousel height="48vh" class="phoneShow">
      <!-- bosun todo -->
      <!-- <el-carousel-item  v-for="(item,index) in infoArr[roleActive]" :key="'info1'+index"> -->
      <el-carousel-item  v-for="(item,index) in infoArr[roleActive].info" :key="'info1'+index">
        <div ref="imgBox">
          <!-- bosun todo -->
          <!-- <img class="cursorPointer" width="80%" :src="item.img" @touchstart="gotouchstart(index)"> -->
          <img class="cursorPointer" width="80%" :src="item.pic" @touchstart="gotouchstart(index)">
            <div class="shadow" v-if="shadowIndex == index" @touchend="gotouchend(index)">
              <div class="btn">
                <img width="33px" src="@/assets/picture/staking.png">
                <span>NFT Staking</span>
              </div>
              <div class="btn" v-click @click="goContent(item)">
                Check The Content
              </div>
            </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-row class="pcShow">
      <!-- bosun todo -->
      <!-- <el-col v-for="(item,index) in infoArr[roleActive]" class="box" :key="'info2'+index"> -->
      <el-col v-for="(item,index) in infoArr[roleActive].info" class="box" :key="'info2'+index">
        <!-- bosun todo -->
        <!-- <img class="cursorPointer" @mouseover="mouseOver(index)" width="100%" :src="item.img"> -->
        <img class="cursorPointer" @mouseover="mouseOver(index)" width="100%" :src="item.pic">
        <div class="shadow" v-if="shadowIndex == index" @mouseleave="mouseLeave(index)">
          <div class="btn">
            <img width="33px" src="@/assets/picture/staking.png">
            <span>NFT Staking</span>
          </div>
          <div class="btn" v-click @click="goContent(item)">
            Check The Content
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="line mt20"></div>
     <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        isLongPress:false,
        timeOutEvent:0,
        imgHeight:'',
        num:0,
        radio:3,
        isShow:false,
        roleActive:0,
        shadowIndex:-1,
        roleList:[
          {
            name:'All',
          },
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
        myNftArr: [

        ],
        // bosun todo
        // infoArr:[
        //   [],[],[],[],[]
        // ],
        infoArr:[
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
      };
    },
    created() {
      
    },
     mounted(){
      // 监听窗口变化，使得轮播图高度自适应图片高度
      // window.addEventListener("resize", () => {
      //   this.imgHeight = this.$refs.imgBox[0].offsetHeight;
      // });
    },
    watch: {
      '$store.state.baseData.assets': function(newVal) {

          if(newVal){
              console.log('newVal', newVal);
              newVal.forEach((item) => {
                item.img = this.$store.state.url.static.base + this.$store.state.url.static.images + item.hash;
                // bosun todo
                // this.infoArr[0].push(item);
                // if (item.name == 'Athena') {
                //   this.infoArr[1].push(item);
                // } else if (item.name == 'Posiedon') {
                //   this.infoArr[2].push(item);
                // } else if (item.name == 'Venus') {
                //   this.infoArr[3].push(item);
                // } else if (item.name == 'Apollo') {
                //   this.infoArr[4].push(item);
                // } else if (item.name == 'Cupid') {
                //   this.infoArr[5].push(item);
                // }
              });
              console.log('$store.state.baseData.assets', this.infoArr );
          }
      },
    },
    methods: {
      changeTag(index){
        console.log(indexll)
        this.roleActive = index;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      // 鼠标移入效果
      mouseOver(index){
        this.shadowIndex = index;
      },
      // 鼠标移出效果
      mouseLeave(index){
        this.shadowIndex = -1;
      },
      // 点击跳转详情
      goContent(item){
        this.$router.push({path: '/content'});
      },
      gotouchstart(index){
        let that = this;
        clearTimeout(that.timeOutEvent);//清除定时器
        that.timeOutEvent = 0;
        that.timeOutEvent = setTimeout(function(){
             //执行长按要执行的内容，
            that.shadowIndex = index;
            that.isLongPress = true;
           },600);//这里设置定时
      },
      //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
      gotouchend(index){
          clearTimeout(this.timeOutEvent);
            if(this.imeOutEvent!=0){
              this.shadowIndex = -1;
              this.isLongPress = false;
           }
      },
      //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按 
      // gotouchmove(){
      //      clearTimeout(this.timeOutEvent);//清除定时器
      //      this.timeOutEvent = 0;
      //      this.isLongPress = false;
      // },
    }
  };
</script>

<style lang="less" scoped>
  .myNTFPage{
    padding:22px 168px 0 168px;
    background-size: cover;
    background-repeat: no-repeat;
    height:100%;
    background-image: url('~@/assets/picture/tradeBg.jpg');
    .pcShow,.phoneShow{
    }
    .el-pagination{
      text-align: center;
      margin-top: 200px;
    }
    .el-pagination button:disabled{
      width:60px;
      height:60px;
    }
    .el-pagination /deep/ button:disabled  i {
      font-size: 20px!important;
      font-weight: bold!important;
    }
    /deep/ .el-pager li.active{
      background: #A39282;
      color: #fff;
    }
    /deep/ .el-pagination .btn-next,/deep/ .el-pagination .btn-prev,/deep/ .el-pager li{
      padding: 0;
      width: 60px;
      height: 60px;
      border-radius: 100px;
      line-height: 60px;
      text-align: center;
      display: inline-block;
      color: #A39282;
      font-size:20px;
      margin-right:10px;
    }
    .myNTF{
      padding: 20px 35px;
      font-size: 28px;
      font-weight: 500;
      line-height: 40px;
      color: #A39282;
      background: #fff;
    }
    .line{
      width: 100%;
      height: 20px;
    }
    .roleArr{
      width: 100%;
      display: flex;
      justify-content:space-between;
      align-items:center;
      padding:40px 0 27px;
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
        overflow-x: scroll;
        li{
          width: 160px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size: 28px;
          font-weight: 500;
          color: #A39282;
          opacity: 1;
          border-radius: 30px;
          cursor: pointer;
          margin-right: 25px;
          background: #fff;
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
    .box{
      position: relative;
    }
    .shadow{
      width: 90%;
      height: 93%;
      background: #000000a3;
      position: absolute;
      left: 20px;
      top: 15px;
      border-radius: 30px;
      .btn:first-of-type{
        margin-bottom:33px;
        margin-top: 40%;
      };
      .btn{
        margin:0 auto;
        cursor: pointer;
        border-radius: 20px;
        width: 90%;
        height: 80px;
        background-color: #A39282;
        display: flex;
        justify-content:center;
        align-items:center;
        font-size: 24px;
        font-weight: bold;
        line-height: 33px;
        color: #FFFFFF;
        opacity: 1;
        img{
          width: 33px;
          margin-right: 33px;
        }
      }
    }
  }
  @media(max-width:641px) {
    .roleArr{
      ul{
        width:auto!important;
        padding:0 16px!important;
        overflow: auto!important;
        li{
            width:auto!important;
            padding:0 16px!important;
            margin-right:20px!important;
        }
      }
    }
    .el-carousel__item  .shadow img {
      margin: 0 12px 0 0!important;
    }
  }

</style>
