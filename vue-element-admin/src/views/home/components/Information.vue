<template>
  <div id="information" class="information">
      <slot></slot>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.information {
  width: 1300px;
  height: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 0px;
}
</style>