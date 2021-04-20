<template>
  <div class="newslist">
    <div class="name">
      国内资讯
      <el-divider></el-divider>
    </div>
    <div class="items" v-for="(item, index) in chinanewsdata" :key="index">
      <a :href="item.url" target="_blank" class="news">
        {{ item.title }}
        <span class="spans">{{ item.newsource }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chinanewsdata: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.newslist {
  width: 500px;
  height: 400px;
  float: left;
  text-align: left;
  padding: 0px 0px 0px 0px;
}

.items {
  margin: 0px 0px 0px 0px;
  /* padding: 40px 20px; */
  width: 400px;
  height: 40px;
  overflow: hidden;

  white-space: nowrap;

  text-overflow: ellipsis;
}
.name {
  text-align: left;
  font-size: 18px;
  /* margin: 50px 25px 80px 20px; */
}
.news {
  line-height: 30px;
  height: 30px;
  font-size: 15px;
  color: black;
  text-align: left;
  padding: 0 10px;
  border-bottom: #e0e0e0 1px dashed;
}
.items :hover {
  color: burlywood;
}
.spans {
  line-height: 30px;
  height: 30px;
  float: right;
}
</style>