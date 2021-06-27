<template>
  <div class="hello">
    <div class="title">{{ msg }}</div>
    <p class="undertitel">
      Var god njut av denna bild av en underbar anka!
    </p>
    <img alt="Duck logo" src="@/assets/duck.jpg" class="duck">
    <Count :count="count"/>
    <button @click="count++" class="button">
      Klicka här!
    </button>
  </div>
</template>

<script>
import Count from "./Count"
export default {
  name: 'HelloWorld',
  components:{
    Count
  },
  props: {
    msg: String
  },
  data(){
    return{
      count: 0
    }
  }
}
//Javascript
</script>

<!-- CSS -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button{
  color: black;
  font-size: 3rem;
  background-color: white;
  border-color: white;
  font-family: 'Times New Roman', Times, serif;
}
.duck {
  height: 10rem;
}
.title{
  font-size: 10rem;
  font-weight: 800;
}
.undertitel{
  margin-top: 5rem;
}
</style>
