<template>
  <el-container class="page_container" id="page_container">
    <!-- 左侧菜单栏，router="ture"开启菜单路由，按照index跳转，default-active属性用于接收高亮激活的index -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div>
          <img v-load class="mr25 cursorPointer pic collapseBtn" @click="isCollapse =!isCollapse" :src="isCollapse?require('@/assets/picture/collapse1.png'):require('@/assets/picture/collapse2.png')">
          <img class="logo" width="200px" src="@/assets/picture/logo.png">
        </div>
        <div class="connectBtn" @click="dialogVisibleWallet = true">Connect</div>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <el-aside width="auto">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen" @close="handleClose" :collapse="isCollapse"
            background-color="#fff"
            text-color="#A39282"
            active-text-color="rgb(143, 128, 486)"
            unique-opened
            router
            :collapse-transition="false"
            :default-active="$route.path">
            <template v-for="item in menuslist">
              <!-- 二级菜单,index使跳转路由 -->
              <el-submenu v-if="item.children && item.children.length>0" :index="item.id+''" :key="item.id">
                <template slot="title">
                  <img class="mr15 pic" :src="index == item.id?item.icon1:item.icon">
                  <span @click="clickSubmenu(item)">{{item.authName}}</span>
                </template>
                <el-menu-item-group 
                  v-for="subitem in item.children"
                  :key="subitem.id">
                  <template slot="title">
                    <el-menu-item @click="clickSubmenu(subitem)" :index="'/'+subitem.path">{{subitem.authName}}</el-menu-item>
                    <span></span>
                  </template>
                </el-menu-item-group>
              </el-submenu>
              <!-- 一级菜单,index必须是字符串，作为唯一标识 -->
              <el-menu-item @click="clickmenu(item)" v-else :key="item.id">
                <img class="mr15 pic" :src="index == item.id?item.icon1:item.icon">
                <span>{{item.authName}}</span>
              </el-menu-item>
            </template>
          </el-menu>
          <div class="infoItem" v-if='!isCollapse'>
            <div class="infoItemTop">
              <div class="info">
                <img class="picIcon" src="@/assets/picture/9.png">
                $0.407
              </div>
              <div class="iconBox">
                <img class="picIcon" src="@/assets/picture/1.png">
                <img class="picIcon" src="@/assets/picture/2.png">
                <img class="picIcon" src="@/assets/picture/3.jpg">
                <div class="phoneShow">
                  <el-dropdown @command="changeLangage">
                    <span class="el-dropdown-link">
                      <img class="mr0 picIcon" src="@/assets/picture/3.png">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="cn">简体中文</el-dropdown-item>
                      <el-dropdown-item command="en">English</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
            </div>
            <div class="infoItemBottom pcShow">
              <el-dropdown @command="changeLangage">
                <span class="el-dropdown-link">
                  <img class="mr0 picIcon" src="@/assets/picture/3.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="cn">简体中文</el-dropdown-item>
                  <el-dropdown-item command="en">English</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            
          </div>
          <div class="settingIcon" v-if='isCollapse'>
            <img class="pic" src="@/assets/picture/myicon/setting.png">
          </div>
        </el-aside>
        <div :class="path === '/exchange' || path === '/liquidity'?'contentBox gpBBCM bg':'contentBox gpBBCM'">
          <router-view></router-view>
        </div>
        <ComponentWallet :showModal="dialogVisibleWallet" @hideModal="dialogVisibleWallet = false" />
      </el-main>
    </el-container>
    <!-- Connect to a wallet -->
    <!-- <el-dialog
      title="Connect to a wallet"
      :visible.sync="dialogVisibleWallet"
      width="25%" append-to-body>
      <ul>
        <li class="walletItem" v-for="(item,index) in walletList" :key="index" @click="handleWallect(item,index)">
          <span class="dpJqVk">{{item.name}}</span>
          <img width="32" height="32" :src="item.pic">
        </li>
      </ul>
    </el-dialog> -->
  </el-container>
</template>

<script>
import ComponentWallet from './backlog/Wallet/wallet.vue';
export default {
  
  data() {
    return {
      lang:'cn',
      index:'',
      isCollapse: false,
      dialogVisibleWallet:false,
      walletList:[
         {
           name:'Metamask',
           pic:require('@/assets/picture/walle1.png'),
         },
         {
            name:'TrustWallet',
            pic:require('@/assets/picture/tokenpocket.png'),
          },
          {
            name:'MathWallet',
            pic:require('@/assets/picture//mathwallet.png'),
          },
          {
            name:'TokenPocket',
            pic:require('@/assets/picture/tokenpocket.png'),
          },
          {
            name:'WalletConnect',
            pic:require('@/assets/picture/walletconnect.png'),
          }
      ],
      walletIndex:-1,
      //左侧菜单数据
      menuslist: [
        {
          id: "101",
          authName: "Home",
          path: "home",
          icon:require('@/assets/picture/myicon/Home.png'),
          icon1:require('@/assets/picture/myicon/Home1.png'),
        },
        {
          id: "102",
          authName: "Trade",
          icon:require('@/assets/picture/myicon/Trade.png'),
          icon1:require('@/assets/picture/myicon/Trade1.png'),
          children: [
            { id: "01",pid: '102', authName: "Exchange", path: "exchange" },
            { id: "02",pid: '102', authName: "Liquidity", path: "liquidity" }
          ]
        },
        {
          id: "103",
          authName: "Egg Nests",
          path: "eggNests",
          icon:require('@/assets/picture/myicon/Egg Nests.png'),
          icon1:require('@/assets/picture/myicon/Egg Nests1.png'),
        },
        {
          id: "104",
          authName: "NFT Box",
          path: "NFTBox",
          icon:require('@/assets/picture/myicon/NFTBox.png'),
          icon1:require('@/assets/picture/myicon/NFTBox1.png'),
        },
        {
          id: "105",
          authName: "My NFT",
          path: "myNFT",
          icon:require('@/assets/picture/myicon/myNtf.png'),
          icon1:require('@/assets/picture/myicon/myNtf1.png'),
        },
        {
          id: "106",
          authName: "NFT Staking",
          path: "NFTStaking",
          icon:require('@/assets/picture/myicon/staking3.png'),
          icon1:require('@/assets/picture/myicon/staking2.png'),
        },
        {
          id: "107",
          authName: "Gitbook",
          path: "",
          icon:require('@/assets/picture/myicon/Gitbook.png'),
          icon1:require('@/assets/picture/myicon/Gitbook1.png'),
        },
      ],
      path:'',
      screenWidth: document.body.clientWidth,
    };
  },
  components: {
    ComponentWallet
  },
  watch: {
    $route(to,form){
      this.path = to.path;
    }
  },
  // 渲染前获取数据
  mounted() {
    this.path = this.$route.path;
    this.handleResize()
    window.onresize = () => {
      this.handleResize()
    }
  },
  methods: {
    handleResize() {
      this.screenWidth = window.screen.width
      if(this.screenWidth>641){
        this.isCollapse = false;
      }else{
        this.isCollapse = true;
      }
    },
    // 切换语言
    changeLangage(lang) {
      this.lang = lang;
      this.$i18n.locale=lang;  //设置中英文模式
      window.sessionStorage.setItem("language", lang);
      let path = this.$route.path;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath,'111');
    },
    clickmenu(item){
      if(item.authName === 'Gitbook'){
        let link = '';
        if(this.lang == 'cn'){
          link = 'https://anne-tang.gitbook.io/defender-jie-shao/';
        }else{
          link = 'https://anne-tang.gitbook.io/defender-finance/';
        }
        window.open(link, '_blank');
      }else{
        if(item.pid) this.index = item.pid;
        else this.index = item.id;
        this.$router.push(item.path);
        this.$forceUpdate();
      }
    },
    clickSubmenu(item){
      if(item.pid) this.index = item.pid;
      else this.index = item.id;
      this.$router.push(item.path);
      this.$forceUpdate();
    },
  }
};
</script>

<style lang="less" scoped>
  /deep/ .el-dialog__body{
      .walletItem{
        -webkit-box-align: center;
        align-items: center;
        background-color: rgb(239, 244, 245);
        box-shadow: none;
        color: rgb(170, 137, 41);
        cursor: pointer;
        display: inline-flex;
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        height: 68px;
        line-height: 1;
        letter-spacing: 0.03em;
        -webkit-box-pack: center;
        justify-content: space-between;
        opacity: 1;
        margin-bottom: 10px;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        border-radius: 16px;
        outline: 0px;
        padding: 0px 24px;
        transition: background-color 0.2s ease 0s;
      }
      .dpJqVk {
          color: rgb(170, 137, 41);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          margin-right: 16px;
      }
    }
.page_container {
  height: 100%;
  .contentBox{
    /*padding: 16px 12px;*/
    margin:0 auto;
    /*max-width: 95%;*/
    /*min-height: calc(100vh - 64px);*/
    width: 100%;
    overflow-y: scroll;
    background-color: #F8F2ED;
  }
  .gpBBCM {
      -webkit-box-flex: 1;
      flex-grow: 1;
      /*margin-top: 64px;*/
      transform: translate3d(0px, 0px, 0px);
      transition: margin-top 0.2s ease 0s;
      /*background-color: #F8F2ED;*/
      
      background-size: cover;
      background-repeat: no-repeat;
  }
  .bg{
    background-image: url('~@/assets/picture/tradeBg.jpg');
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 100vh;
  }
  ::-webkit-scrollbar {/*滚动条整体样式*/
    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px #A39282;
    background: #A39282;
  }
  ::-webkit-scrollbar-track {/*滚动条里面轨道*/
    /*-webkit-box-shadow: inset 0 0 5px #A39282;*/
    border-radius: 10px;
    background: #fff;
  }
  .settingIcon{
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 8px 48px 8px 10px;
    border-top: 2px solid rgba(133, 133, 133, 0.1);
  }
  .infoItem{
    /*width: 250px;*/
    padding: 20px 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 2px solid rgba(133, 133, 133, 0.1);
    .infoItemTop{
      display: flex;
      justify-content:space-between;
      align-items:center;
    }
    .infoItemBottom{
      display: flex;
      justify-content:flex-end;
      align-items:center;
    }
    .info{
      color: #A39282;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;   
      margin-right: 10px; 
      display: block;  
      display: flex;
      align-items:center;
    }
    .iconBox{
      display: flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom: 10px;
    }
    .picIcon{
      width: 30px;
      height: 30px;
    }
    img{
      margin-right: 8px;
    }
  }
  .connectBtn{
    font-size: 22px;
    width: 160px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    border-radius: 50px;
    color: #fff;
    font-size: 600;
    background-color: #A29181;
    box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
  }
  .el-header{
    padding-left: 8px;
    padding-right: 16px;
    height: 64px;
    border-bottom: 2px solid rgba(133, 133, 133, 0.1);
    display: flex;
    justify-content:space-between;
    align-items:center;
  }
  .el-main{
    padding:0;
    display: flex;
    /*margin-bottom: 76px;*/
  }
  .el-menu--collapse{
    overflow-y: hidden !important;
    .el-menu-item.is-active{
      padding-left: 0;
      border-left: 3px solid #fff;
    }
  }
  .el-aside{
    height: 100vh;
    background-color: #fff;
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    /*overflow-y: scroll;*/
    .pic{
      width: 42px;
      height: 42px;
    }
    /deep/ .el-submenu__title,/deep/ .el-menu-item,/deep/ .el-menu-item-group__title{
      color: #A39282 !important;
      font-size: 24px;
      cursor: pointer;
      height: 80px;
      line-height: 80px;
    }
    .el-submenu .el-menu-item{
      height: 80px;
      line-height: 80px;
    }
    /deep/ .el-menu-item-group__title{
      height: 80px;
      font-size: 24px;
      background-color: rgb(250, 489, 250);
      color: rgb(143, 128, 486);
      box-shadow: none;
      flex-shrink: 0;
      padding: 0 !important;
      line-height: 80px;
    }
    .el-menu-item-group{
      .el-menu-item{
        font-size: 24px;
      }
    }
    /deep/ .el-submenu__title{
      font-size: 24px;
    }
    .el-menu-item{
      padding-left: 0;
      border-left: 3px solid #fff;
      box-sizing: border-box;
    }
    /deep/ .el-submenu__title:hover{
      background: #fff !important;
    }
    /deep/ .el-menu-item:hover {
      border-left: 3px solid rgb(239, 484, 485);
      background-color: #F8F2ED !important;
    }
    .el-menu-item.is-active{
      color: #409eff;
      border-left: 3px solid #AA8929;
    }
    .el-menu{
      overflow-x: hidden;
      /*overflow-y: scroll;*/
    }
  }
}

</style>
