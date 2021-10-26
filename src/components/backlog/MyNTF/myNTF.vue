<template>
  <div class="myNTFPage" id="myNTFPage"> 
    <div class="myNTF">My NFT</div>
    <div class="line"></div>
    <div class="roleArr">
      <ul>
        <li v-click @click="changeTag(index)" :class="roleActive == index?'active':''" v-for="(item,index) in roleList" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <el-carousel height="48vh" class="phoneShow">
      <el-carousel-item  v-for="(item,index) in infoArr[roleActive]" :key="'info1'+index">
        <div ref="imgBox">
          <img class="cursorPointer" width="80%" :src="item.img" @touchstart="gotouchstart(index)">
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
      <el-col v-for="(item,index) in infoArr[roleActive]" class="box" :key="'info2'+index">
        <img class="cursorPointer" @mouseover="mouseOver(index)" width="100%" :src="item.img">
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
        infoArr:[
          [],[],[],[],[]
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
                this.infoArr[0].push(item);
                if (item.name == 'Athena') {
                  this.infoArr[1].push(item);
                } else if (item.name == 'Posiedon') {
                  this.infoArr[2].push(item);
                } else if (item.name == 'Venus') {
                  this.infoArr[3].push(item);
                } else if (item.name == 'Apollo') {
                  this.infoArr[4].push(item);
                } else if (item.name == 'Cupid') {
                  this.infoArr[5].push(item);
                }
              });
              console.log('$store.state.baseData.assets', this.infoArr );
          }
      },
    },
    methods: {
      changeTag(index){
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
    .pcShow,.phoneShow{
      background: #fff;
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
      background: #E9D9C9;
    }
    .roleArr{
      width: 100%;
      display: flex;
      background: #fff;
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
        background-color: #fff;
        overflow-x: scroll;
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
</style>
