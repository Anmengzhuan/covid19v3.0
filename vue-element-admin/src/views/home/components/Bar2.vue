<template>
  <div style="width: 400px; height: 400px" id="bar2"></div>
</template>

<script>
export default {
  name: "page",
  mounted() {
    // 在通过mounted调用即可
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      this.$echarts.init(document.getElementById("bar2")).setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 150],
            type: "bar",
            // showBackground: true,
            // backgroundStyle: {
            //   color: "rgba(180, 180, 180, 0.2)",
            // },
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>