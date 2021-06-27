<template>
  <div class="count-text">Count: {{ count }}</div>
</template>

<script>
export default {
  props: {
    count: Number,
  },
};
//Javascript
</script>

<!-- CSS -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.count-text {
  color: pink;
  font-size: 3rem;
}
</style>
