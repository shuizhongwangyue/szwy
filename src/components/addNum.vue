<template>
  <div class="content">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-row>
          <el-col :span="2">订单号:</el-col>
          <el-col :span="4">
            <el-input v-model="ordre_num" placeholder="请输入用户名">{{ordre_num}}</el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">下单时间:</el-col>
          <el-col :span="4">
            <el-input v-model="ordre_time" placeholder="请输入用户名">{{ordre_time}}</el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">金额:</el-col>
          <el-col :span="4">
            <el-input v-model="ordre_money" placeholder="请输入用户名">{{ordre_money}}</el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">类型:</el-col>
          <el-col :span="4">
            <el-input v-model="ordre_type" placeholder="请输入用户名">{{ordre_type}}</el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">订单状态:</el-col>
          <el-col :span="4">
            <el-input v-model="ordre_status" placeholder="请输入用户名">{{ordre_status}}</el-input>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordre_num: "1",
      ordre_time: "2",
      ordre_money: "3",
      ordre_type: "4",
      ordre_status: "5",
      dialogVisible: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    edit() {
      // this.$message
      console.log(1);
    },
    getList() {},
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
}
.el-main {
  line-height: 60px;
  padding-left: 40px;
}
.el-container .el-col {
  text-align: left;
}
.first-btn {
  margin-right: 80px;
}
.el-col-2{
    width: 20%;
    height: 40px;
    line-height: 40px;
}
.el-col-4{
    width: 70%;
    height: 30px;
}
</style>

