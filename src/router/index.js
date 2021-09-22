import Vue from "vue";
import VueRouter from "vue-router";

// backLog 
import Page404 from "../components/backlog/404.vue";
import ManagerPage from "../components/ManagerPage.vue";

// 项目管理
// 项目管列表
import ProjectList from "../components/backlog/projectManagement/list.vue";

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
    redirect: "/projectList",
    children: [
      // 项目管理
      { path: "/projectList", component: ProjectList },
     
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
