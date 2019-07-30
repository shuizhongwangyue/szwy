<template>
  <div class="content">
    <el-row>
      <el-col :span=2>订单号:</el-col>
      <el-col :span=4>
          <el-input v-model="ordre_num" placeholder="请输入用户名" >{{ordre_num}}</el-input>         
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=2>下单时间:</el-col>
      <el-col :span=4>
          <el-input v-model="ordre_time" placeholder="请输入用户名" >{{ordre_time}}</el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=2>金额:</el-col>
      <el-col :span=4>
          <el-input v-model="ordre_money" placeholder="请输入用户名" >{{ordre_money}}</el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=2>类型:</el-col>
      <el-col :span=4>
          <el-input v-model="ordre_type" placeholder="请输入用户名" >{{ordre_type}}</el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=2>订单状态:</el-col>
      <el-col :span=4>
          <el-input v-model="ordre_status" placeholder="请输入用户名" >{{ordre_status}}</el-input>
      </el-col>
    </el-row>
    <el-row class="btn">
        <el-col>
            <el-button class="first-btn" type="primary" round @click="edit()">确定</el-button>
            <el-button class="second-btn" type="danger" round>取消</el-button>
        </el-col>
        
    </el-row>
  </div>
    
</template>

<script>
export default {
    data(){
        return {
          ordre_num: "1",
          ordre_time: "2",
          ordre_money: "3",
          ordre_type: "4",
          ordre_status: "5"
         }
    },
    created(){
        this.getList();
    },
    methods:{
        edit(){
            // this.$message
            console.log(1);
        },
        getList(){

        }
    },
  
}
</script>

<style scoped>
    .content{
        padding: 20px;
    }
    .el-main {
        line-height: 60px;
        padding-left: 40px;
    }
    .el-container .el-col{
        text-align: left;
    }
    .first-btn{
        margin-right: 80px;
    }
    
</style>
