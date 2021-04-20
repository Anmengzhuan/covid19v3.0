<template>
  <div class="newslist" >
      <div class="name">
          预防资讯
          <el-divider></el-divider>
      </div>
      <div class="items" v-for="(item,index) in preventdata" :key="index">
          <a :href="item.url"  target="_blank" class="news" >
              {{item.title}} 
              <span class="spans">{{item.newsource}}</span>         
            </a> 
      </div>
  </div>
</template>

<script>



export default {
    props: {
        preventdata:{
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
    padding: 40px 20px;
    width:800px; 
    
}

.items{
     margin: 50px 0px 0px 30px;
   /* padding: 40px 20px; */
    height: 50px;
    width: 800px;
    
}
.name{
    /* border-bottom: #600808 1px solid;
    line-height: 0px;
    height: 55px;
    padding: 0px;
    margin: 20px 10px  30px;
    color: rgb(247, 146, 14); */
    text-align: left;
  font-size: 25px;
  margin: 50px 25px 80px 20px;
}
.news {
    line-height: 30px;
    height: 30px;
    font-size: 15px;
    color: #999999;
    text-align: left;
    padding: 0 10px;
    border-bottom: #e0e0e0 1px dashed;
    display: block;
    width: 800px;

}
.items :hover{
   color:burlywood
}
.spans{
     line-height: 30px;
    height: 30px;
    float: right;
}
</style>