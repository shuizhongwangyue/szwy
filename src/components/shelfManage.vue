<template>
  <div class="container">
    <el-row class="demo-avatar demo-basic">
      <el-col :span="12">
        <div class="sub-title">商品种类</div>
        <!-- <div class="demo-basic--circle"> -->
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <!-- </div> -->
      </el-col>
    </el-row>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    <!-- <el-dropdown>
      <span class="el-dropdown-link">
        货物类型
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>一等品</el-dropdown-item>
        <el-dropdown-item>二等品</el-dropdown-item>
        <el-dropdown-item>三等品</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    <div class="store_type">
      <div class="store_text">货物状态(上架状态)</div>
      <span class="already_shelf" :class="classes">{{shelf_status===2? "已上架":"未上架"}}</span>
    </div>   
    <el-button type="primary" round @click="find()" class="btn">查询</el-button>
    <div class="excel_container">
      <el-table ref="filterTable" :data="tableData" style="width: 100%">
        <el-table-column
          prop="date"
          label="图片"
          sortable
          width="180"
          column-key="date"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        ></el-table-column>
        <el-table-column prop="name" label="上架状态" width="180"></el-table-column>
        <el-table-column prop="address" label="库存" :formatter="formatter"></el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions
            >{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      value: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司"
        }
      ],
      options: [{
          value: '选项1',
          label: '一等品'
        }, {
          value: '选项2',
          label: '二等品'
        }, {
          value: '选项3',
          label: '三等品'
        }, {
          value: '选项4',
          label: '四等品'
        }],
        value:'商品等级',
      shelf_status: 2,
      isActive: null,
      isNoActive: null,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    };
  },
  computed: {
    classes() {
      return {
        active: this.shelf_status === 2,
        "text-fail": this.noActive && this.noActive.type === "fail"
      };
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    find(){},
  }
};
</script>

<style scoped>
.block {
  display: inline-block;
}
.el-container {
  position: relative;
  height: 300px;
}
.container{
  height: 100%;
  width: 100%;
}
.el-row {
  position: absolute;
  left: 330px;
  top: 70px;
  z-index: 11;
  font-size: 20px;
}
.store_type {
  position: absolute;
  left: 900px;
  top: 70px;
  z-index: 11;
  font-size: 20px;
}
.el-select {
  display: inline-block;
  position: absolute;
  left: 600px;
  top: 70px;
  z-index: 11;
  font-size: 20px;
}
.btn{
  position: absolute;
  top: 70px;
  left: 1200px;
}
.excel_container {
  position: absolute;
  top: 230px;
  width: 2000px;
  overflow: hidden;
}
/* .el-table{
  width: 1000px;
} */
.already_shelf {
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  background-color: green;
  border-radius: 5px;
}
.already_shelf:hover{
  cursor:pointer;
}
.active {
  background-color: red;
}
.noActive {
  background-color: green;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
#app{
  height: 100%;
  width: 100%;
}
el-table tr{
  height: 60px;
  margin: 0;
  padding: 0;
}
</style>
