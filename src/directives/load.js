export const load = {
	name: 'load',
	define: {
    // 只调用一次，指令第一次绑定到元素时调用
		bind(el, binding) {
      console.log('元素加载时触发');
		},
    // 被绑定元素插入父节点时调用
    inserted(){

    },

	}
}