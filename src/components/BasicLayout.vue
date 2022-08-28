<template>
  <div class="chartLine_wrap">
    <div id="myChart" :style="{ width: '100%', height: '80%' }"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
require("echarts/theme/macarons"); //引入主题
export default {
  name: "hello",
  data() {
    return {
      a: [],
      b: [],
      c: [],
      list: [],
      date: [],
    };
  },

  mounted() {
    this.searchData();
  },
  methods: {
    searchData() {
      let x = [
        "2022-01",
        "2022-02",
        "2022-03",
        "2022-04",
        "2022-05",
        "2022-06",
        "2022-07",
        "2022-08",
        "2022-09",
      ];
      let infos = [
        {
          projectName: "xxxdd",
          code_nums: [500, 600, 700, 800, 1200, 1233, 6000, 5220, 7000],
        },
        {
          projectName: "xxddddvf",
          code_nums: [200, 600, 700, 900, 1200, 1233, 6000, 5220, 7000],
        },
        {
          projectName: "ssdczz",
          code_nums: [100, 300, 700, 600, 1200, 1233, 5000, 5220, 7000],
        },
        {
          projectName: "bbbxxx",
          code_nums: [500, 600, 700, 800, 1200, 1233, 6000, 6220, 9000],
        },
        {
          projectName: "xxfdfx",
          code_nums: [600, 600, 8000, 1500, 2100, 1233, 4000, 5220, 8500],
        },
        {
          projectName: "ddd",
          code_nums: [350, 600, 700, 800, 6522, 7000, 7162, 5220, 7000],
        },
        {
          projectName: "oohdhd",
          code_nums: [500, 600, 5955, 6000, 6100, 6200, 6522, 10000, 12000],
        },
        {
          projectName: "cccc",
          code_nums: [
            500, 9000, 9655, 10214, 12000, 12330, 60000, 52200, 70000,
          ],
        },
      ];
      //这里写的是假数据，实际应该是调接口，本文主要是样式的实现，这里就不写啦~
      let data = [
        { year: "2020-10", a: "-2", b: "20", c: "0" },
        { year: "2020-11", a: "23", b: "6", c: "10" },
        { year: "2020-12", a: "-4", b: "9", c: "5265" },
        { year: "2021-01", a: "88", b: "37", c: "25" },
        { year: "2021-02", a: "65", b: "20", c: "1652" },
        { year: "2021-03", a: "23", b: "56", c: "9" },
        { year: "2021-04", a: "-10", b: "-5", c: "49" },
        { year: "2021-05", a: "33", b: "6", c: "33" },
        { year: "2021-06", a: "22", b: "76", c: "34" },
        { year: "2021-07", a: "56", b: "76", c: "65" },
        { year: "2021-08", a: "98", b: "81", c: "33" },
        { year: "2021-09", a: "76", b: "36", c: "1230" },
        { year: "2021-10", a: "76", b: "66", c: "2690" },
        { year: "2021-11", a: "100", b: "261", c: "10000" },
        { year: "2021-12", a: "-20", b: "212", c: "22201" },
        { year: "2021-09", a: "12.5", b: "201", c: "2215" },
        { year: "2021-09", a: "100.9", b: "29", c: "210" },
      ];
      // this.date = data.map((i) => {
      //   return i.year;
      // });
      this.date = x;
      this.a = data.map((i) => {
        return i.a;
      });
      this.b = data.map((i) => {
        return i.b;
      });
      this.c = data.map((i) => {
        return i.c;
      });
      infos.forEach((item) => {
        this.list.push({
          name: item.projectName,
          type: "line",
          data: item.code_nums,
          //  color: "#3F53FF", // 不指定颜色
          symbolSize: 8, //折线点的大小
        });
      });

      this.drawLine(); //折线图
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "项目代码行数趋势折线", // 图表标题
          top: "30",
          left: "32",
          textStyle: {
            fontSize: 16, //字体大小
            color: "#ff0f0", //字体颜色
            fontWeight: "500",
          },
        },
        tooltip: {
          //触发类型：坐标轴触发
          trigger: "axis", //触发类型  'item'图形触发：散点图，饼图等无类目轴的图表中使用； 'axis'坐标轴触发；'none'：什么都不触发。
          axisPointer: {
            type: "cross", //默认为line，line直线，cross十字准星，shadow阴影
            lineStyle: {
              type: "dashed",
              color: "#808BA9",
            },
          },
          backgroundColor: "#fff", //也可以通过设置rgba调节背景颜色与透明度
          color: "#333",
          borderWidth: "1",
          borderColor: "#D9E1F8",
          textStyle: {
            color: "#333",
            fontSize: "12",
            lineHeight: "17",
          },
          formatter: function (arg) {
            // 自定义提示
            return (
              arg[0].name +
              "<br>" +
              '<span style="margin:0 5px 2px 0;display:inline-block;width:6px;height:6px;border-radius:5px;background-color:' +
              arg[0].color +
              ';"></span>' +
              arg[0].seriesName +
              '<span style="margin-left:10px;">' +
              arg[0].data +
              "</span>" +
              "<br>" +
              '<span style="margin:0 5px 2px 0;display:inline-block;width:6px;height:6px;border-radius:5px;background-color:' +
              arg[1].color +
              ';"></span>' +
              arg[1].seriesName +
              '<span style="margin-left:10px;">' +
              arg[1].data +
              "</span>" +
              "<br>" +
              '<span style="margin:0 5px 2px 0;display:inline-block;width:6px;height:6px;border-radius:5px;background-color:' +
              arg[2].color +
              ';"></span>' +
              arg[2].seriesName +
              '<span style="margin-left:10px;">' +
              arg[2].data +
              "</span>"
            );
          },
        },
        legend: {
          icon: "circle",
          itemHeight: 10, //修改icon图形大小
          textStyle: {
            fontSize: 14,
            color: "#333",
          },
          x: "left", //可设定图例在左、右、居中
          y: "top", //可设定图例在上、下、居中
          padding: [81, 0, 0, 32], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        },
        grid: {
          top: "145",
          left: "17",
          right: "17",
          bottom: "41",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: this.date,
          //使坐标轴刻度与标签对齐
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            // 改变x轴颜色
            lineStyle: {
              // color: "#D9E1F8",
              color: "#666",
              width: "1",
            },
          },
          axisLabel: {
            // 改变x轴字体颜色和大小
            formatter(val) {
              return "{a|" + `${val}` + "}";
            },
            rich: {
              a: {
                height: 40, // 设置字体行高
                color: "#666",
                fontSize: 14,
              },
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false, //y轴线消失
          },
          axisTick: {
            show: false, //y轴坐标点消失
          },
          boundaryGap: [0.1, 0], //有负数设置这个
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#D9E1F8",
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: "#92A5E3",
            },
          },
        },
        series: this.list,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.chartLine_wrap {
  width: auto;
  height: 800px;
  background: #fff;
}
</style>
