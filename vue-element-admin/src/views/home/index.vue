<template>
  <div>
    <div class="top">
      <img src="~assets/imgs/test2.jpg" alt="" width="1250" height="340">
    </div>

    <div class="title">
      <span>全国疫情</span>
      <el-divider></el-divider>
    </div>

    <div class="chinacontent">
      <Content-2 :totalinchinadata="totalinchina"></Content-2>
    </div>
   

    <div class="zhexiandiv">
      <Test2 class="zhexian" ></Test2>
      
      <Chinanews class="news" :chinanewsdata="chinanews"></Chinanews>
      
    </div>
    <br>

    <div class="bardiv">
      <!-- <div class="bartext">七天条形图概况</div> -->
       <Hero class="news" :herodata="hero"></Hero>
      <Bar class="bar"></Bar>
    </div>

    

    <div class="title">
      <span>全球疫情</span>
      <el-divider></el-divider>
    </div>

     <div class="globalcontent">
      <Content :totalinglobaldata="totalinworld"></Content>
    </div>

    <div class="zhexiandiv">
      <Test class="zhexian"></Test>
      <Globalnews class="news" :globalnewsdata="globalnews"></Globalnews>
    </div>

    <div>
      <div class="bardiv">
        <!-- <Hero></Hero> -->
        <Yimiao class="news" :yimiaodata="yimiao"></Yimiao>
         
        <Bar2 class="bar"></Bar2>
      </div>
    </div>
    <!-- <div class="piediv">
        <Pie2></Pie2>
      </div> -->
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Test from "./components/test.vue";
import Bar from "./components/Bar";
import Pie from "./components/Pie";
import Content2 from "./components/Content2.vue";
import Test2 from "./components/test2";
import Bar2 from "./components/Bar2";
import Pie2 from "./components/Pie2";
import Globalnews from "./components/Globalnews"
import Chinanews from "./components/Chinanews"
import Hero from "./components/Hero"
import Yimiao from "./components/Yimiao"

import { getTotalInChinadata } from "../../api/home";
import { getTotalInWorld } from "../../api/home";
import { getChinanews } from "../../api/home";
import { getWorldnews } from "../../api/home";
import { gethero } from "../../api/home";
import { getyimiao } from "../../api/home";



export default {
  components: {
    Content,
    Test,
    Bar,
    Pie,
    Content2,
    Test2,
    Bar2,
    Pie2,
    Globalnews,
    Chinanews,
    Hero,
    Yimiao,
   
  },

  data() {
    return {
      totalinchina: [],
      totalinworld: [],
      globalnews: [],
      chinanews:[],
      hero:[],
      yimiao:[],
    };
  },

  created() {

    getTotalInChinadata().then((res) => {
      this.totalinchina = res.data;
    });

    getTotalInWorld().then((res) => {
      this.totalinworld = res.data;
    });

    getChinanews().then((res) => {
      this.chinanews = res.data;
      console.log(res);
    });

    getWorldnews().then((res) => {
      this.globalnews = res.data;
    });

     gethero().then((res) => {
      this.hero = res.data;
    });

    getyimiao().then((res) => {
      this.yimiao = res.data;
    });
  },
};
</script>

<style scoped>
.top {
  height: 340px;
  /* background-image: url(~assets/imgs/test2.jpg) width: 1241px;; */
}

.zhexiandiv {
  width: 1500px;
  height: 400px;
}

.zhexian {
  float: left;
}

.zhexianwenzi {
  width: 500px;
  height: 400px;
  float: left;
  text-align: center;
  padding: 150px 50px 50px 50px;
}


.news{
 width: 500px;
  height: 400px;
  float: left;
  text-align: left;
  padding: 15px 0px 0px 0px;
}

.bar{
  float: left;
  width: 600px;
  margin: 0px 0px 0px 200px;
}
.bartext{
  width: 500px;
  height: 50px;
  float: left;
  text-align: center;
  padding: 150px 50px 50px 50px;
}

.chinacontent {
  height: 210px;
}

.globalcontent{
   height: 210px;
}
.bardiv {
  /* display: flex; */
  /* float: left; */
  float: left;
  width: 1500px;
  /* margin: 150px 150px 150px 700px; */
  margin: 0px 0px 0px 50px;
}
.piediv {
  width: 500px;
  /* display: flex; */
  margin: 500px 150px 150px 300px;
  position: relative;
  /* left: 600px; */
}

.title {
  text-align: left;
  font-size: 25px;
  margin: 50px 25px 25px 60px;
}
</style>
