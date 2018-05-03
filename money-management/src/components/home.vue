<template>
  <div class="home">
      <h1>{{ welcomeMsg }}</h1>
      <h2>{{ info }}</h2>
  </div>

</template>

<script>
import ResouceManager from '../js/resource-manager';

var resourceManager = new ResouceManager();

export default {
  name: "home",
  data(){
    return {
      welcomeMsg: resourceManager.get("home.title"),
      info: resourceManager.get("home.description")
    }
  }
}
</script>

<style scoped>
    .home {
      text-align: center; 
    }
</style>

