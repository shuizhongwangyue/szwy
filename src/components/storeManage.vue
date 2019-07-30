<template>
  <div>
    <div class="btn">
      <!-- 点击添加显示弹出框 -->
      <el-button type="text" @click="dialogVisible = true">添加</el-button>
      <!-- <el-button type="text" @click="addNum()">添加</el-button> -->
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
      <el-button size="mini" type="danger" @click="deleteSome(tableChecked)">批量删除</el-button>
    </div>

    <!-- 表格展示 -->
    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column label="订单号" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ordre_num }}</span>
        </template>
      </el-table-column>
      <el-table-column label="下单时间" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.ordre_time }}</p>
            <p>住址: {{ scope.row.ordre_time }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.ordre_time }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="金额" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ordre_money }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ordre_type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ordre_status }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>-->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" v-if="isShow"></el-table-column>
      <el-table-column label="订单号" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ordre_num }}</span>
        </template>
      </el-table-column>
      <el-table-column label="下单时间" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.ordre_time }}</p>
            <p>住址: {{ scope.row.ordre_time }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.ordre_time }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="金额" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ordre_money }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ordre_type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ordre_status }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      isShow:false,
      tableData: [
        {
          ordre_num: "2016-05-02",
          ordre_time: "王小虎",
          ordre_money: "上海市普陀区金沙江路 1518 弄",
          ordre_type: "上海市普陀区金沙江路 1518 弄",
          ordre_status: "上海市普陀区金沙江路 1518 弄"
        },
        {
          ordre_num: "2016-05-02",
          ordre_time: "王小虎",
          ordre_money: "上海市普陀区金沙江路 1518 弄",
          ordre_type: "上海市普陀区金沙江路 1518 弄",
          ordre_status: "上海市普陀区金沙江路 1518 弄"
        },
        {
          ordre_num: "2016-05-02",
          ordre_time: "王小虎",
          ordre_money: "上海市普陀区金沙江路 1518 弄",
          ordre_type: "上海市普陀区金沙江路 1518 弄",
          ordre_status: "上海市普陀区金沙江路 1518 弄"
        },
        {
          ordre_num: "2016-05-02",
          ordre_time: "王小虎",
          ordre_money: "上海市普陀区金沙江路 1518 弄",
          ordre_type: "上海市普陀区金沙江路 1518 弄",
          ordre_status: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      tableChecked: [],
      ids: "",
      multipleSelection: [],
      ordre_num: "1",
      ordre_time: "2",
      ordre_money: "3",
      ordre_type: "4",
      ordre_status: "5"
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleEdit(index, row) {
      // console.log(index, row);
      this.$router.push("editPage");
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    edit() {},
    cancel() {
      this.isShow=false;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    addNum() {
      // this.$router.push("editPage");
      // this.isHide = true;
    },
    deleteSome() {
      this.isShow = true;
      var _this = this;
      _this
        // .$confirm("是否确认此操作?", "提示", {
        //   confirmButtonText: "确定",
        //   cancelButtonText: "取消",
        //   type: "warning"
        // })
        .then(() => {
          rows.forEach(element => {
            _this.ids.push(element.chargingStationId);
          });
          let param = {
            token: getSessiontoken("token"),
            chargingStationIdList: _this.ids
          };
          deleteAllCharging(param)
            .then(function(res) {
              var obj = JSON.parse(utilFile.decrypt(res.data.a));
              if (obj.code == "200") {
                _this.$message.success("操作成功");
                _this.chargingUserList();
              } else {
                _this.$message.error(obj.msg);
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  }
};
</script>

<style scoped>
.el-main {
  line-height: 60px !important;
}
.btn {
  padding: 10px;
  text-align: left;
  /* height: 100px; */
}
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
.el-col-2 {
  width: 20%;
  height: 40px;
  line-height: 40px;
}
.el-col-4 {
  width: 70%;
  height: 30px;
}
</style>
