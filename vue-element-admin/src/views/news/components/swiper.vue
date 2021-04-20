<template>
<div class="swiper-container">
  <!-- :options="swiperOption" -->
   <swiper >
    <!-- slides -->
    <swiper-slide>
      <!-- ~assets/common-imgs/news/bussiness-man.png -->
      <!-- ./bussiness-man.png -->
      <!-- ./test1.jpg -->
      <img class="swiper-img" src="~assets/common-imgs/news/bussiness-man.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="~assets/common-imgs/news/test2.jpg" alt="">
    </swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</div>

</template>

<script>

export default {
  data () {
    return {
      
    }
  }

}
var mySwiper = new Swiper('.swiper-container', {
  autoplay: true,//可选选项，自动滑动
  width: 800, 
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
});
</script>

<style>



.swiper-container
{
    height:300px;
    width:800px;
    float: left;
    
}
    
.swiper-img{
   width:900px;
   height:300px;
}
     

</style>

