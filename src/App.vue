<template>
  <ActionBar />
  <Main />
</template>

<script>
import ActionBar from "@/components/TheActionBar";
import Main from "@/components/Main";

export default {
  components: {
    ActionBar,
    Main,
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: sans-serif;
}
</style>
