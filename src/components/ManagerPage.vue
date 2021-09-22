<template>
  <el-container class="page_container">
    <!-- 左侧菜单栏，router="ture"开启菜单路由，按照index跳转，default-active属性用于接收高亮激活的index -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <img class="logo" width="205" height="26" src="@/assets/picture/LogoTextNewWhite.png">
        <div class="connectBtn">Connect</div>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <el-aside width="240px">
          <el-menu
            background-color="#fff"
            text-color="#1F1D37"
            active-text-color="#40beff"
            unique-opened
            router
            :default-active="$route.path"
          >
          <template  v-for="item in menuslist">
            <!-- 一级菜单,index必须是字符串，所以用一个加号转换成字符串，作为唯一标识 -->
            <el-submenu v-if="item.children" @click="clickmenu(item)" :index="item.id+''" :key="item.id">
              <template slot="title">
                <img width="16" class="mr15" :src="index == item.id?item.icon1:item.icon">
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级菜单,index使跳转路由 -->
              <el-menu-item
                :index="'/'+subitem.path"
                v-for="subitem in item.children"
                @click="clickSubmenu(subitem)"
                :key="subitem.id">
                <template slot="title">
                  <span>{{subitem.authName}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="'/'+item.path" @click="clickmenu(item)" v-else :key="item.id">
                <template slot="title">
                  <img width="16" class="mr15" :src="index == item.id?item.icon1:item.icon">
                  <span>{{item.authName}}</span>
                </template>
              </el-menu-item>
          </template>
          </el-menu>
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
      missPassword: false,
      type:null,
      username:'',
      userId:'',
      index:'',
      //左侧菜单数据
      menuslist: [
        {
          id: "101",
          authName: "Home",
          path: "sceneList",
          icon:require('@/assets/picture/myicon/nav2.png'),
          icon1:require('@/assets/picture/myicon/nav21.png'),
        },
        {
          id: "1012",
          authName: "Trade",
          icon:require('@/assets/picture/myicon/nav1.png'),
          icon1:require('@/assets/picture/myicon/nav11.png'),
          children: [
            { id: "01",pid: '101', authName: "Exchange", path: "exchange" },
            { id: "02",pid: '101', authName: "Liquidity", path: "liquidity" }
          ]
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
    this.info();
    this.index = window.localStorage.getItem("navIndex");
    this.username = localStorage.getItem('username') || '';
    this.getUmsMenuAdminList();
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>

.page_container {
  height: 100%;
  .logo{

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
  .el-aside{
    height: 100vh;
    .el-submenu__title,.el-menu-item{
      color: rgb(143, 128, 186) !important;
      font-size: 16px;
    }
  }
}

</style>
