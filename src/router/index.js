import Vue from "vue";
import VueRouter from "vue-router";

// backLog 
import Page404 from "../components/backlog/404.vue";
import ManagerPage from "../components/ManagerPage.vue";
// 首页
import Home from "../components/backlog/Home/home.vue";
// 交易模块
// 币币兑换
import Exchange from "../components/backlog/Trade/exchange.vue";
// 流水性
import Liquidity from "../components/backlog/Trade/liquidity.vue";
// 单币和lp挖矿的质押挖矿
import EggNests from "../components/backlog/EggNests/eggNests.vue";
//NtfBox
import NtfBox from "../components/backlog/NtfBox/ntfBox.vue";

Vue.use(VueRouter);

const routes = [
  {
    name:'managerpage',
    path: "/",
    redirect: "/managerpage"
  },
  { 
    name:'page404',
    path: "/404",
    component: Page404
  },
  {
    path: "/managerpage",
    component: ManagerPage,
     // 路由守卫
    // beforeEnter: (to, from, next) => {
    //   const tokenStr = window.localStorage.getItem("token");
    //   console.log(tokenStr,'tokenStr');
    //   if (!tokenStr) return next
    // ("/login");
    //   next();
    // },
    redirect: "/home",
    children: [
      { path: "/home", component: Home },
      { path: "/exchange", component: Exchange },
      { path: "/liquidity", component: Liquidity },
      { path: "/eggNests", component: EggNests },
      { path: "/ntfBox", component: NtfBox },
    ]
  },
  {
    path: '*', // 页面不存在的情况下会跳到404页面
    redirect: '/404',
    name: 'notFound',
    hidden: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

//抛出router之前，为其挂载路由导航守卫，to去哪，from从何来，next通行函数
// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") return next();
//   const tokenStr = window.sessionStorage.getItem("token");
//   if (!tokenStr) return next("/login");
//   next();
// });

export default router;
