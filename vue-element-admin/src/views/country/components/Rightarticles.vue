<template>
  <div class="newslist" >
      
      <div class="items" v-for="(item,index) in chinanewsdata" :key="index">
          <a :href="item.url" target="_blank" class="news" >
              {{item.title}} 
              <span class="spans">{{item.date}}</span>         
            </a> 
      </div>
  </div>
</template>

<script>
export default {
    props: {
        chinanewsdata:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.newslist{
    height: auto;
    overflow: hidden;
    margin: 0 ;
    /* padding: 40px 20px; */
    width:1200px; 
     
}

.items{
   
   margin: 20px 0px 0px 80px;
   /* padding: 40px 20px; */
    height: 80px;
}
/* .name{ */
    /* border-bottom: #600808 1px solid;
    line-height: 0px;
    height: 55px;
    padding: 0px;
    margin: 20px 10px  30px;
    color: rgb(247, 146, 14); */
    /* text-align: left;
  font-size: 25px;
  margin: 25px 25px 25px 60px; */
/* } */
.news {
    line-height: 30px;
    height: 30px;
    font-size: 18px;
    color: #999999;
    text-align: left;
    padding: 0 10px;
    border-bottom: #e0e0e0 1px dashed;
}
.items :hover{
   color:#ff8454
}
.spans{
    line-height: 30px;
    height: 30px;
    float: right;
}
</style>