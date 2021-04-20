<template>
  <div class="information-item">
      <div>
          <slot name="title"></slot>
      </div>
      <div>
          <slot name="count"></slot>
      </div>
      <div>
          <slot name="yesterday"></slot>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.information-item {
    width: 310px;
    height: 60px;
    margin: 20px 0px 0px 0px;
    padding: 0px;
    position: relative;
    text-align: center;
    /* border-style: double; */
     font-size: 10px;
     
    
}
</style>