
import {CHANGESPERVISEDETAIL, GET_USER_MENU, SET_USER_MENU} from '@/store/mutation-types'

export default {
  [CHANGESPERVISEDETAIL](state, payload) {
      state.superViseDetailListData = payload
      updateSession();
  },
  [GET_USER_MENU](state, payload) {
      // state.superViseDetailListData = payload
      // mutations.updateSession();
  },
  [SET_USER_MENU](state, payload) {
      state.userMenus = payload
      updateSession();
  },

  // SET_USER_MENU(state, menus) {
  //     state.userMenus = menus
  // },
  SET_ORIGIN_USER_MENU(state, menus) {
      state.originUserMenus = menus
  },
}
function updateSession() {

		try {
			localStorage.setItem('stateData', JSON.stringify(window.myStore.state.userMenus))
		}  catch {
			//
		}
	}
