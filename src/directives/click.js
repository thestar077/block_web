export const click = {
	name: 'click',
	define: {
    // 只调用一次，指令第一次绑定到元素时调用
		bind(el, binding) {
      el.onclick = function(){
        alert("点击事件监听");
      }
		},
    // 被绑定元素插入父节点时调用
    inserted(){

    },

	}
}