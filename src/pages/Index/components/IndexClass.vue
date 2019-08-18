<template>
  <div class="index-class">

  </div>
</template>

<script>
export default {
  name: 'IndexClass'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixins.styl';

.index-class {
  background-color: $headerColor;
  border: 0.02rem solid $headerborderColor;
  width: 90%;
  height: 8.4rem;
  margin: 0.5rem auto;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
}

  
</style>
