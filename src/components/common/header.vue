<template>
    <div id="site-nav"> 
      <div class="container"> 
        <p class="col-xs-3">欢迎回来</p> 
      <div class="col-xs-9"> 
        <ul class="right"> 
          <li v-if="myToken == null"> 
            <span><router-link to="/login">Log in</router-link></span>
            <span><router-link to="/register">Register</router-link></span>
          </li> 
          <li v-else><span @click="logout">Log out</span></li> 
          <li><router-link to="/account">My</router-link></li> 
        </ul> 
      </div> 
    </div> 
   </div> 
 
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      myToken:null,
      type:null,
    };
  },
  created(){
    this.type = window.sessionStorage.getItem("type");
    this.myToken = window.sessionStorage.getItem("token")?window.sessionStorage.getItem("token"):null;
    console.log(this.type,'myToken2222')
  },
  methods: {
     // 获取目的地列表
     async logout() {
      const { data: res } = await this.$http.get("/logout");
       this.$router.push("/login");
       sessionStorage.removeItem("token");
    },
  }
};
</script>

<style lang="less" scoped>
  #site-nav a i {
    color: #ee4138;
}
.right{
  span{
    cursor: pointer;
  }
  li:first-of-type span {
    margin-right:20px;
  };
}
</style>
