<template>
  <div>
    <div class="Globalmap">
      <Globalmap :allglobaldata="allcountry"> </Globalmap>
    </div>
    <div class="title">
      <span>全球疫情</span>
      <el-divider></el-divider>
    </div>
    <div class="Content"><Content></Content></div>

    <div class="title">
      <span>新闻资讯</span>
      <el-divider></el-divider>
    </div>
    <div>
      <Globalarticles :globalnewsdata="globalnews"></Globalarticles>
    </div>
  </div>
</template>

<script>
import Globalmap from "./components/Globalmap.vue";
import Content from "./components/Content.vue";
import Globalarticles from "./components/Globalarticles.vue";

import { getAllCountrydata } from "../../api/global";
import { getGlobalNesdata } from "../../api/global";


export default {
  components: {
    Globalmap,
    Content,
    Globalarticles,
  },
  data() {
    return {
      allcountry: [],
      globalnews:[],
    };
  },
  created() {
    getAllCountrydata().then((res) => {
      this.allcountry = res.data;
    });
    getGlobalNesdata().then((res) => {
      this.globalnews = res.data;
    });
  },
  
};
</script>

<style scoped>
.Content {
  position: relative;
  margin: 20px 20px 20px 0px;
}
.title {
  text-align: left;
  font-size: 25px;
  margin: 50px 25px 25px 60px;
}
</style>