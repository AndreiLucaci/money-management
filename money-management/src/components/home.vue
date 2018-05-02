<template>
  <div class="home">
      <h1>{{ welcomeMsg }}</h1>
      <h2>{{ info }}</h2>
  </div>

</template>

<script>
export default {
  name: "home",
  data(){
    return {
      welcomeMsg: getRes("home.time"),
      info: this.getRes("home.description")
    }
  }
}
</script>

<style scoped>
    .home {
      text-align: center; 
    }
</style>

