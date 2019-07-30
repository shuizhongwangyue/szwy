<template>
  <div class="content">
    <div class="header">
      <div class="order_date">
        <span class="demonstration"></span>
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </div>
      <div class="type">
        <span>订单类别</span>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="status">
        <span>订单状态</span>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="number">
        <span>订单单号</span>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="excel_container">
        <el-button type="primary" round @click="find()">查询</el-button>
      </div>
    </div>

    <el-table class="table" :data="tableData" style="width: 100%;">
      <el-table-column prop="ordre_num" label="订单号" width="180"></el-table-column>
      <el-table-column prop="ordre_time" label="下单时间" width="180"></el-table-column>
      <el-table-column prop="ordre_money" label="金额"></el-table-column>
      <el-table-column prop="ordre_type" label="类型"></el-table-column>
      <el-table-column prop="ordre_status" label="订单状态"></el-table-column>
      <!-- <el-table-column prop="ordre_do" label="操作">
        <el-button type="primary" icon="el-icon-edit" circle>编辑</el-button>
        <el-button type="danger" icon="el-icon-delete" circle>删除</el-button>
      </el-table-column>-->
    </el-table>
    <!-- 表格展示 -->
    <!-- <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="订单号"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.ordre_num }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="下单时间"
      width="180">
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
    <el-table-column
      label="金额"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.ordre_money }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="类型"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.ordre_type }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="订单状态"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.ordre_status }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>-->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4,5,6,7,8]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalNum"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      //   tableData: [
      //   {'index':'0',"nickName": "沙滩搁浅我们的旧时光", "name": "小明"},
      //   {'index':'1',"nickName": "女人天生高贵", "name": "小红"},
      //   {'index':'2',"nickName": "海是彩色的灰尘", "name": "小兰"}
      // ]
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
        },{
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
      // pageIndex: 2,
      currentPage: 1,
      pageSize: 2,
      totalNum: 0,
      // tableData:[],
      // totalSize: '200',
      // currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4,
      // currentPage4: 4
      
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //导出的方法
    // exportToExcel() {
    //   require.ensure([], () => {
    //     const { export_json_to_excel } = require('../vendor/Export2Excel');
    //     const tHeader = ['序号', '昵称', '姓名'];
    //     // 上面设置Excel的表格第一行的标题
    //     const filterVal = ['index', 'nickName', 'name'];
    //     // 上面的index、nickName、name是tableData里对象的属性
    //     const list = this.tableData;  //把data里的tableData存到list
    //     const data = this.formatJson(filterVal, list);
    //     export_json_to_excel(tHeader, data, '列表excel');
    //   })
    // },

    // formatJson(filterVal, jsonData) {
    //   return jsonData.map(v => filterVal.map(j => v[j]))
    // }
    // getTableData(currentPage) {
    //   console.log(this.tableData);
    //   // this.tableData = this.tableData.slice(
    //   //   (this.pageIndex - 1) * this.pageSize,
    //   //   this.pageIndex * this.pageSize
    //   // );
    //   let from = (currentPage - 1) * this.pageSize;
    //   let to = currentPage * this.pageSize;
    //   this.tempList = [];
    //   for (; from < to; from++) {
    //     if (list[from]) {
    //       this.tempList.push(list[from]);
    //     }
    //   }
    //   this.tota = this.tableData.length;
    // },
    getList(){},
    find() {
      this.getList();
    },
     handleSizeChange(pageSize) {
       this.pageSize = pageSize;
        console.log(`每页 ${pageSize} 条`);
      },
      handleCurrentChange(currentPage) {
        console.log(`当前页: ${currentPage}`);
      }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.content div,
.block,
.el-pagination {
  display: inline-block;
}
.table {
  /* background-color: #ccc; */
  padding: 10px;
  margin: 0;
}
.header {
  float: left;
  padding: 10px;
}
.el-main,
.el-table th,
.el-table td,
.el-pagination {
  padding: 0;
}
/* .el-button {
  width: 50px;
  height: 30px;
} */
.el-main {
  /* padding: 10px; */
  line-height: 60px;
  padding-top: 10px;
}
</style>
