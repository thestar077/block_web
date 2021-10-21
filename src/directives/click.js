import {
    Message,
    MessageBox
} from 'element-ui'
export const click = {
	name: 'click',
	define: {
    // 只调用一次，指令第一次绑定到元素时调用
		bind(el, binding) {
      let Msgtype = true;
      el.onclick = function(){
        if(Msgtype){
          return Message({
              message: '成功',
              type: 'success',
          });
        }else{
          return Message({
              message: '错误',
              type: 'error',
          });
        }
      }
		},
    // 被绑定元素插入父节点时调用
    inserted(){

    },

	}
}