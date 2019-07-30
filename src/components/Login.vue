<template>
  <div class="login-form">
    <div class="login_name_input">
      用户名：<input v-model="login_username" class="login_name" placeholder="请输入用户名">
    </div>
    <div class="login_name_input">
      密<span>&nbsp;&nbsp;</span>码：<input placeholder="请输入密码" v-model="login_psd" class="login_psd" show-password>
    </div>
    <el-button type="primary" round @click="login()">登陆</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_username: "",
      login_psd: ""
    };
  },
  methods:{
    login(){
      localStorage.getItem('token');
      this.$router.push('/Home');
    },
    cancel(){}
  },
  mounted(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  height: 100%;
  margin: 0 !important;
  padding: 0;
  /* background-color: skyblue; */
}
.login-form {
  height: 500px;
  width: 500px;
  margin: 0 auto;
  line-height: 500px;
}
.login_name_input{
  height: 100px;
  font-size:30px;
}
.login-form input{
  border: 1px solid #ccc;
  width: 300px;
  height: 40px;
  padding-left: 10px;
  border-radius:10px;
}
.login_name{
  display: inline-block;
}
.login_psd{
  display: inline-block;
}
.confirm{
  width: 80px;
}
/* .cancel{
  margin-left: 30px;
} */
</style>
