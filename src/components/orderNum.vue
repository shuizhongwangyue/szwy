<template>
  <div>
    <div id="myChart1" :style="{width: '300px', height: '300px'}"></div>
    <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // chart:null
    };
  },
  methods: {
    drawLine() {
      this.$echarts.init(document.getElementById("myChart1")).setOption({
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" }
            ]
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "一周内营业情况" },
        tooltip: {
          //  trigger: 'xAxis'
        },
        xAxis: {
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日"
          ],
          // type:'categoty',
          name: "日期"
        },
        legend: {
          data: ["销量"]
        },
        yAxis: {
          name: "营业情况",
          type: "value"
        },
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20, 10, 10]
          }
        ]
      });
    }
  },
  mounted() {
    this.drawLine();
  }
};
</script >

<style scoped>
.el-aside {
  height: 100% !important;
}
body,
html {
  height: 100%;
}
#myChart1 {
  margin: 0 auto;
}
</style>
