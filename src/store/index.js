import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import baseData from './baseData'
import url from './url'
import web3 from './web3'
import abi from './abi'
import {CHANGESPERVISEDETAIL, GET_USER_MENU} from './mutation-types'
//挂载Vuex
Vue.use(Vuex)
//创建VueX对象
const store = window.myStore = new Vuex.Store({
  state, 
  getters,
  mutations,
  actions:{...actions},
  modules:{
  	CHANGESPERVISEDETAIL,
  	GET_USER_MENU,
	baseData,
	url,
	web3,
	abi,
  }
})

const storePlugin = {
	install(vue) {
		try {
			const stateData = JSON.parse(localStorage.getItem('stateData'));
			store.superViseDetailListData = {
				...stateData.superViseDetailListData
			};
		} catch {
			//
		}
		vue.prototype.$store = store;
		vue.prototype.$mutations = mutations;
	}
}

export default store
export {storePlugin}