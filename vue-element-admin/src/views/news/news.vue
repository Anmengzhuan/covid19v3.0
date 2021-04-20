<template>
<div id="city" class="city">
<swiper></swiper>
<right :herodata="hero"></right>
<Newslist :preventdata="prevent"></Newslist>
</div>
 
</template>

<script>

import {getPreventdata} from "../../api/news"
import {getHerodata} from "../../api/news"
import {getxxx} from "../../api/news"

import Swiper from './components/swiper.vue'
import Newslist from './components/newslist.vue'
import Right from './components/right.vue'

export default {
    
    components:{
        Swiper,
        Newslist,
        Right
    },
    data(){
         return {
              prevent:[],
              hero:[],
              xxx:[],
         }
    },
    created(){
         getPreventdata().then(res =>{
           
              this.prevent=res.data;
         });
         
         getHerodata().then(res =>{
             this.hero=res.data;
         });

          getxxx().then(res =>{
              console.log(res);
             this.xxx=res.data;
         });
         

     //     console.log(this.result);
    }
}
</script>

<style scoped>
    /* .city{
        background-color: rgb(247, 239, 132); 
       background-color: black;
    } */
</style>