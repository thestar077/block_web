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
            axios.get('/dmp-es-admin/ums/user/info').then(res => {
                if (res.data.code !== 200)
                return Message({
                    message: res.data.message,
                    type: 'error',
                });
                let list = [];
                list = list.concat(res.data.data.menuAdminList.map(item => item.code))
                // console.log('用户权限：' + list)
                commit('SET_USER_MENU', list)
                commit('SET_ORIGIN_USER_MENU', res.data.menuAdminList);

                  let menuslist = [
          {
            id: "101",
            authName: "项目管理",
            icon:require('@/assets/picture/myicon/nav1.png'),
            icon1:require('@/assets/picture/myicon/nav11.png'),
            permission: 'projectManagement',
            show:true,
            children: [
              { id: "01",pid: '101', authName: "项目列表", path: "projectList",permission: 'projectList',show:true, },
              { id: "02",pid: '101', authName: "搜索项目", path: "projectSearch",permission: 'searchProject',show:true, }
            ]
          },
          {
            id: "102",
            authName: "见证记录",
            path: "sceneList",
            icon:require('@/assets/picture/myicon/nav2.png'),
            icon1:require('@/assets/picture/myicon/nav21.png'),
            permission: 'witnessRecord',
            show:true,
          },
          {
            id: "103",
            authName: "完工资料",
            path: "docList",
            icon:require('@/assets/picture/myicon/nav3.png'),
            icon1:require('@/assets/picture/myicon/nav31.png'),
            permission: 'asBuiltDoc',
            show:true,
          },
          {
            id: "106",
            authName: "监理报表",
            icon:require('@/assets/picture/myicon/nav4.png'),
            icon1:require('@/assets/picture/myicon/nav41.png'),
            permission: 'supervisionList',
            show:true,
            children: [
              { id: "01",pid: '106', authName: "报告管理", path: "superviseReportList",permission: 'reportManagerment',show:true,},
              { id: "02",pid: '106', authName: "质量问题报表", path: "superviseProblemList",permission: 'qualityProblemReport',show:true,},
              { id: "03",pid: '106', authName: "监理报告", path: "superviseJianliList",permission: 'SupervisionReport',show:true, }
            ]
          },
          {
            id: "105",
            authName: "制造厂",
            path: "manufacturerList",
            icon:require('@/assets/picture/myicon/nav5.png'),
            icon1:require('@/assets/picture/myicon/nav51.png'),
            permission: 'manufacturer',
            show:true,
          },
          {
            id: "107",
            authName: "审核管理",
            path: "contentList",
            icon:require('@/assets/picture/myicon/nav6.png'),
            icon1:require('@/assets/picture/myicon/nav61.png'),
            permission: 'auditManagement',
            show:true,
          },
          {
            id: "108",
            authName: "设置",
            icon:require('@/assets/picture/myicon/nav7.png'),
            icon1:require('@/assets/picture/myicon/nav71.png'),
            permission: 'setting',
            show:true,
            children: [
              { id: "01",pid: '108', authName: "用户管理", path: "userList",permission: 'userManagement',show:true,},
              { id: "02",pid: '108', authName: "部门管理", path: "departmentList",permission: 'divisionManagement',show:true,},
              { id: "03",pid: '108', authName: "权限管理", path: "authorityList",permission: 'authorityManagement',show:true,},
            ]
          },
        ];
        let listArr = [];
        // let { userMenus } = this;
        let userMenus = JSON.stringify(window.myStore.state.userMenus);
        menuslist.forEach(item => {
            let newItem = { ...item, children: [] }
            if (item.children && item.children.length>0) {
                item.children.forEach(child => {
                    if (userMenus.includes(child.permission)) {
                        newItem.children.push(child);
                    }
                })
            }
            if (userMenus.includes(newItem.permission) || newItem.permission == '') {
                listArr.push(newItem)
            }
        })
        // list.map(e=>{
        //   if(e.children.length == 0){
        //     this.$delete(e,'children')
        //   }
        // })
        localStorage.setItem('menu',JSON.stringify(listArr));
                  resolve()
             })
        })
    }
};
