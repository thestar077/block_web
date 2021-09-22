<template>
  <div class="noFoundPage">
  	<img class="pic" src="@/assets/picture/myicon/404.png"/>
    <p class="center tips1">抱歉！您访问的页面不存在</p>
    <p class="center tips2">点击返回<span @click="returnPage">上一页</span></p>
  </div>
</template>
<script>
  import moment from 'moment';
  import qs from 'qs';
  export default {
    data() {
      return {}
    },
    created() {},
    methods: {
    	returnPage(){
    		this.$router.go(-1);
    	},
    }
   }
</script>
<style lang="less" scoped>
.noFoundPage{
	.pic{
		width:480px;
		display: block;
		margin:0 auto;
		margin-bottom:40px;
	}
	.center{
		text-align:center;
	}
	.tips1{
		font-size: 16px;
		color: #5C6166;
		line-height: 21px;
		margin-bottom: 40px;
	}
	.tips2{
		font-size: 16px;
		color: #8D9399;
		line-height: 21px;
		span{
			color: #578FFF;
			cursor: pointer;
		}
	}
}	
</style>