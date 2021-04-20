<template>
    

    <Information>

      <InformationItem class="recent">
        <div slot="yesterday" class="add">
           较上日
          <span class="nowcom">-1</span>
        </div>
        <div slot="count" class="nownumber">5</div>
        <div slot="title" class="font-s">现有确诊</div>
      </InformationItem>

      <InformationItem class="recent">
        <div slot="yesterday" class="add">
           较上日
          <span class="all-e-com">-1</span>
        </div>
        <div slot="count" class="all-e-number">500000</div>
        <div slot="title" class="font-s">累计确诊</div>
      </InformationItem>

      <InformationItem class="recent">
        <div slot="yesterday" class="add">
           较上日
          <span class="all-die-com">-1</span>
        </div>
        <div slot="count" class="all-die-number">5</div>
        <div slot="title" class="font-s">累计死亡</div>
      </InformationItem>

      <InformationItem class="recent">
        <div slot="yesterday" class="add">
           较上日
          <span class="all-cure-com">-1</span>
        </div>
        <div slot="count" class="all-cure-number">5</div>
        <div slot="title" class="font-s">累计治愈</div>
      </InformationItem>

      <InformationItem class="recent">
        <div slot="yesterday" class="add">
           较上日
          <span class="all-noshow-com">-1</span>
        </div>
        <div slot="count" class="all-noshow-number">5</div>
        <div slot="title" class="font-s">无症状感染</div>
      </InformationItem>

      <InformationItem class="recent">
        <div slot="yesterday" class="add">
           较上日
          <span class="out-com">-1</span>
        </div>
        <div slot="count" class="out-number">5</div>
        <div slot="title" class="font-s">境外输入</div>
      </InformationItem>

       <InformationItem class="recent">
        <div slot="yesterday" class="add">
           现有疑似
          <span class="out-com">-1</span>
        </div>
        <div slot="count" class="out-number">5</div>
        <div slot="title" class="font-s">境外输入</div>
      </InformationItem>

        <InformationItem class="recent">
            <div slot="yesterday" class="add">
            现有重症
            <span class="out-com">-1</span>
            </div>
            <div slot="count" class="out-number">5</div>
            <div slot="title" class="font-s">境外输入</div>
        </InformationItem>


     


    </Information>
    
   
</template>

<script>
import Information from "./Information.vue";
import InformationItem from "./InformationItem";
export default {
  
  components: { 
    Information, 
    InformationItem 
    },
}
</script>

<style>
/* .recent {
    padding-top: 1.6vw;
    color:black;
    font-size: 10px;
    line-height: 150px;
    height:150px;
    font-weight: 500;
    } */
.nowcom {
  color:rgb(200, 100, 30);
  
}
.nownumber{
  color:rgb(210, 105, 30);
  font-size: 25px;
}
.all-e-com{
  color:#e61c1d;
}
.all-e-number{
  color:#e61c1d;
  font-size: 25px;
}
.all-die-com{
  color: #be2121
}
.all-die-number{
  color: #be2121;
  font-size: 25px;
}
.all-cure-com{
  color:green;
}
.all-cure-number{
  color:green;
  font-size: 25px;
}
.all-noshow-com{
  color:blue;
}
.all-noshow-number{
  color:blue;
  font-size: 25px;
}
.out-com{
  color:slategray;
}
.out-number{
  color:slategray;
  font-size: 25px;
}
.font-s{
  font-size: 20px;
}
</style>