<template>
<div>
  <Select></Select>

    <div class="title">
      <span>当地疫情</span>
      <el-divider></el-divider>
    </div>

    <div id="city">
    <Content></Content>
    
    <!-- <test-vue></test-vue> -->
  </div>

  <div class="title">
  <span>当地新闻</span>
      <el-divider width=982.5></el-divider>
    </div>
    
    
    <LocalArticle></LocalArticle>
</div>


  
</template>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>

import axios from "axios"
import Content from "./components/Content.vue";
import LocalArticle from './components/LocalArticle.vue';
import Select from './components/Select'


export default {
   components: {
    Content,
      LocalArticle,
      Select
    
   
  },
  created(){
  
   
    
  },
  data(){
      return{
        
      }
    }
};
</script> 
<style scope>
.title{
  text-align: left;
  font-size: 25px;
  margin: 50px 25px 25px 60px;
  width: 982.5px;
}
</style>