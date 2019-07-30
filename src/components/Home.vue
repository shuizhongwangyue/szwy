<template>
  <el-container>
    <el-header>
      <span @click="goBack" class="header_left">首页</span>
      <!-- <el-page-header @back="goBack" styl="float:left"></el-page-header> -->
      <span class="header_right">{{username()?username():"无昵称"}}</span>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
        <!-- <el-menu-item index="addNum"><i class="el-icon-message"></i>主界面</el-menu-item> -->
        <el-menu-item index="orderNum"><i class="el-icon-message"></i>订单数量</el-menu-item>
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">首<span>&nbsp;&nbsp;</span>页</span>
          </el-menu-item> -->
          <!-- </el-submenu> -->
          <!-- <el-menu-item index="orderNum">
            <i class="el-icon-menu"></i>
            <span slot="title">订单数量</span>
          </el-menu-item> -->
          <!-- <el-menu-item index="orderManage">
            <i class="el-icon-menu"></i>
            <span slot="title">订单管理</span>
          </el-menu-item> -->
          <el-menu-item index="orderManage">
            <i class="el-icon-document"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="storeManage">
            <i class="el-icon-document"></i>
            <span slot="title">库存管理</span>
          </el-menu-item>
          <el-menu-item index="shelfManage">
            <i class="el-icon-setting"></i>
            <span slot="title">上架管理</span>
          </el-menu-item>
          <el-menu-item index="addNum">
            <i class="el-icon-setting"></i>
            <span slot="title">添加数量</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goBack() {
        this.$router.push('/')
    },
    username(){
      return sessionStorage.getItem('username');
    }
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  /* background-color: skyblue; */
}
#app{
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  /* height: 200px !important; */
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.header_left{
  float: left;
}
.header_left:hover{
  cursor:pointer
}
.header_right{
  float: right;
}
.el-page-header{
    height: 60px;
    line-height: 60px;
}
.el-aside {
  height: 100%;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-menu{
  height: 100%;
}

.el-main {
  height: 100% !important;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  padding: 0;
}

/* body > .el-container {
  margin-bottom: 40px;
} */
</style>
