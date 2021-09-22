import axios from "axios";
import {
    Message,
    MessageBox
} from 'element-ui'
export default {
  SetSuperviseDetailListData({ commit, state }) {
    state.superViseDetailListData = selectedDetailRows;
  },
  //  SET_USER_MENU({ commit, state }) {
  //  	console.log(commit, state, 'commit, state')
  //   state.userMenus = state.userMenus;
  // },
  GET_USER_MENU({ commit }) {
        return new Promise((resolve, reject) => {
            
        })
    }
};
