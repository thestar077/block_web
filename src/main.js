import Vue from "vue";
import App from "./App.vue"; //引入跟组件
import router from "./router";
import "./plugins/element.js";
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// 导入全局样式
import "./assets/css/global.css";
import "./assets/css/common.css";
import "./assets/css/style.min.css";
import "./assets/css/hd.css";
import "./assets/css/global.less";
//导入字体图标
import "./assets/fonts/iconfont.css";
import Router from 'vue-router'
import store from './store'
import { storePlugin } from './store'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
import {
    Message,
    MessageBox
} from 'element-ui'
import qs from 'qs';
import axios from "axios";
import $ from 'jquery'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

let Base64 = require('js-base64').Base64
//配置请求根路径
const UPLOAD_URL = {
        dev: "",
        test: "http://192.168.202.128:8282",
        prod: "https://www.mofcube.com:9382"
    }
    // axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'https://www.mofcube.com:8850';
axios.defaults.baseURL = UPLOAD_URL.prod;
axios.defaults.transformResponse = [function(data) {
        // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
        //console.log(data);
        if (typeof data === 'string') {
            try {
                data = Vue.prototype.$JsonBigInt.parse(data)
            } catch (e) {
                console.log(e);
            }
        }
        return data
    }]
    //请求到达服务器之前先调用这个回调函数，对headers做预处理
axios.interceptors.request.use(config => {
    if (config.url.indexOf('atch/fetch/') != -1 || config.url.indexOf('smsWitnRecProb/exportExcel') != -1) { //smsWitnRecProb/exportExcel
        config.responseType = 'blob';
    }
    config.headers['content-type'] = 'application/json';
    config.headers.Authorization = 'Bearer ' + (window.sessionStorage.getItem("token") || window.localStorage.getItem("token"));
    return config;
});
axios.interceptors.response.use(result => {
    if (result.data && result.data.code == 401) {
        router.push('/login').then();
        // Message({
        //     message: result.data.message,
        //     type: 'error',
        // });
        return;
    }
    return result;
});

//将引入的axios挂载到vue的原型对象上，全局配置axios，
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(storePlugin)

// router.beforeEach((to, from, next) => {
//     if(!localStorage.token) {
//         if(to.path == '/') {
//             return next()
//         }
//         next('/')
//     }
//     else {
//         if(to.path == '/') {
//             return next();
//         }
//         let userMenus = store.state.userMenus;
//         console.log(userMenus,'userMenus');
//         if(!userMenus.length) {
//             store.dispatch('GET_USER_MENU').then(() => {
//                 checkCanToNext(to, next)
//             })
//         }
//         else {
//             checkCanToNext(to, next)
//         }
//     }
// })
// function checkCanToNext(to, next) {
//     const userMenus = store.state.userMenus;
//     next()
//     return 
//     if(userMenus.includes(to.path)) {
//         next()
//     }
//     else {
//         next('/')
//     }
// }

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
