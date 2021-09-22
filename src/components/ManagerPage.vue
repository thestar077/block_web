<template>
  <el-container class="page_container">
    <!-- 左侧菜单栏，router="ture"开启菜单路由，按照index跳转，default-active属性用于接收高亮激活的index -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div>
          <img width="24" class="ml15 mr25 cursorPointer" @click="isCollapse =!isCollapse" :src="isCollapse?require('@/assets/picture/collapse1.png'):require('@/assets/picture/collapse2.png')">
          <img class="logo" width="205" height="26" src="@/assets/picture/LogoTextNewWhite.png">
        </div>
        <div class="connectBtn">Connect</div>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <el-aside width="auto">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen" @close="handleClose" :collapse="isCollapse"
            background-color="#fff"
            text-color="rgb(143, 128, 186)"
            active-text-color="rgb(143, 128, 186)"
            unique-opened
            router
            :collapse-transition="false"
            :default-active="$route.path">
            <template v-for="item in menuslist">
              <!-- 二级菜单,index使跳转路由 -->
              <el-submenu v-if="item.children && item.children.length>0" :index="item.id+''" :key="item.id">
                <template slot="title">
                  <img width="16" class="mr15" :src="item.icon">
                  <span>{{item.authName}}</span>
                </template>
                <el-menu-item-group 
                  v-for="subitem in item.children"
                  :key="subitem.id">
                  <template slot="title">
                    <el-menu-item :index="'/'+subitem.path">{{subitem.authName}}</el-menu-item>
                    <span @click="clickSubmenu(subitem)"></span>
                  </template>
                </el-menu-item-group>
              </el-submenu>
              <!-- 一级菜单,index必须是字符串，作为唯一标识 -->
              <el-menu-item :index="'/'+item.path" @click="clickmenu(item)" v-else :key="item.id">
                <img width="16" class="mr15" :src="item.icon">
                <span>{{item.authName}}</span>
              </el-menu-item>
            </template>
          </el-menu>
          <div class="infoItem">
            <div class="info">
              <img width="24" height="24" src="@/assets/picture/9.png">
              $0.407
            </div>
            <div class="iconBox">
              <img width="20" height="20" src="@/assets/picture/1.png">
              <img width="20" height="20" src="@/assets/picture/2.png">
              <el-dropdown @command="changeLangage">
                <span class="el-dropdown-link">
                  <img class="mr0" width="20" height="20" src="@/assets/picture/3.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="cn">简体中文</el-dropdown-item>
                  <el-dropdown-item command="en">English</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-aside>
        <div class="contentBox">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      index:'',
      isCollapse: false,
      //左侧菜单数据
      menuslist: [
        {
          id: "101",
          authName: "Home",
          path: "home",
          icon:require('@/assets/picture/myicon/nav2.png'),
        },
        {
          id: "102",
          authName: "Trade",
          icon:require('@/assets/picture/myicon/nav1.png'),
          children: [
            { id: "01",pid: '1021', authName: "Exchange", path: "exchange" },
            { id: "02",pid: '1021', authName: "Liquidity", path: "liquidity" }
          ]
        },
        {
          id: "103",
          authName: "Farms",
          path: "farms",
          icon:require('@/assets/picture/myicon/nav3.png'),
        },
      ],
      //图标数据
      iconobj: {
        "101": "iconfont iconshouye",
        "102": "iconfont iconrenyuanguanli",
        "103": "iconfont iconxiangmuguanli",
        "104": "iconfont iconjianzhengjiluguanli",
        "105": "iconfont iconzhizaochangguanli",
        "106": "iconfont iconxiangmubaogaoguanli",
        "107": "iconfont iconshenheliebiaoguanli",
      }
    };
  },
  // 渲染前获取数据
  created() {
  },
  methods: {
    // 切换语言
    changeLangage(lang) {
      this.$i18n.locale=lang;  //设置中英文模式
      localStorage.setItem('language',this.$i18n.locale);
      window.sessionStorage.setItem("language", lang);
      let path = this.$route.path;
      location.reload();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickmenu(item){
      if(item.pid) this.index = item.pid;
      else this.index = item.id;
      this.$router.push(item.path);
      this.$forceUpdate();
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
.page_container {
  height: 100%;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 100vh;
  }
  ::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #8F80BA;
  }
  ::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #8F80BA;
  }
  .infoItem{
    width: 240px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 8px 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 2px solid rgba(133, 133, 133, 0.1);
    .info{
      color: rgb(143, 128, 186);
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;      
    }
    img{
      margin-right: 8px;
    }
  }
  .connectBtn{
    font-size: 16px;
    width: 96px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 50px;
    color: #fff;
    font-size: 600;
    background-color: rgb(170, 137, 41);
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
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    .el-submenu__title,.el-menu-item,/deep/ .el-menu-item-group__title{
      color: rgb(143, 128, 186) !important;
      font-size: 16px;
      cursor: pointer;
    }
    .el-submenu .el-menu-item{
      height: 48px;
      line-height: 48px;
    }
    /deep/ .el-menu-item-group__title{
      height: 48px;
      font-size: 14px;
      background-color: rgb(250, 249, 250);
      color: rgb(143, 128, 186);
      box-shadow: none;
      flex-shrink: 0;
      padding: 0 !important;
      line-height: 48px;
    }
    .el-menu-item-group{
      .el-menu-item{
        font-size: 14px;
      }
    }
    /deep/ .el-submenu__title{
      font-size: 16px;
    }
    .el-menu-item{
      padding-left: 0;
      border-left: 3px solid #fff;
      box-sizing: border-box;
    }
    /deep/ .el-submenu__title,/deep/ .el-menu-item:hover {
      border-left: 3px solid rgb(239, 244, 245);
      background-color: rgb(239, 244, 245) !important;
    }
    .el-menu-item.is-active{
      color: #409eff;
      border-left: 3px solid #AA8929;
    }
    .el-menu{
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
}

</style>
