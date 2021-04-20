<template>
  <div class="globalmap">
    <div id="globalchart" style="width: 1300px; height: 800px"></div>
  </div>
</template>


<script>
import echarts from "echarts";
import "echarts/map/js/world";

export default {
  name: "ECharts",
  
  components: {},
  props: {
        allglobaldata:{
            type:Array,
            default(){
                return []
            }
        }
},
// mounted: function () {
//   this.$nextTick(function () {
//    this.MyMap();
//   })
// },
  mounted() {
    // this.MyMap().series.mapData=this.allglobaldata;
    this.MyMap();
  },
  
  // created(){
  //   zhuanhuan(() => {
  //     this.MyMap.series.mapData = res.allglobaldata;
  //   });
  // },

  methods: {
    MyMap() {
      // 1. 实例化对象
      let myMap = this.$echarts.init(document.getElementById("globalchart"));
     
      let mapData = this.allglobaldata;
      let map_option = {
        color: ["#8A3310", "#C64918", "#E55825", "#F2AD92", "#F9DCD1"],
        title: {
          x: "left",
        },
        tooltip: {
          trigger: "item",
        },
        // 左侧导航

        visualMap: {
          show: true,
          x: "4%",
          y: "bottom",
          textStyle: {
            fontSize: 8,
          },
          showLabel: "高",
          // text: ["高", "低"],
          splitList: [
            //{start: 0, end: 0},
            { start: 1, end: 9 },
            { start: 10, end: 99 },
            { start: 100, end: 999 },
            { start: 1000, end: 9999 },
            { start: 10000 },
          ],
          color: ["#8A3310", "#C64918", "#E55825", "#F2AD92", "#F9DCD1"],
        },

        // 配置属性
        series: [
          {
            name: "累计确诊病例",
            type: "map",
            mapType: "world",
            roam: false, //拖动和缩放
            data: this.allglobaldata,
            itemStyle: {
              normal: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: "#009fe8", //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
              },
              // 鼠标滑过相关设置
              emphasis: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: "#4b0082", //区域边框颜色
                areaColor: "#ff8454", //区域颜色
              },
            },
            label: {
              normal: {
                show: true,
                fontSize: 8,
              },
              emphasis: {
                show: true,
                fontSize: 8,
              },
            },
            left: "5%",
            width: "90%",
            height: "90%",
          },
        ],
      };

      // 3. 把配置和数据给实例对象
      myMap.setOption(map_option);
    },
  },
};
</script>



<style>
</style>