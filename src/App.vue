<template>
  <div id="app">
    <NavMenu></NavMenu>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu/NavMenu.vue";

export default {
  name: "App",
  components: {
    NavMenu,
  },
};
</script>

<style></style>
