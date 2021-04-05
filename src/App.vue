<template>
  <ActionBar />
</template>

<script>
import ActionBar from "@/components/TheActionBar";
import { defineComponent } from "vue";

/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

export default defineComponent({
  components: {
    ActionBar,
  },
  mounted() {
    while (true) {
      let ans = prompt("Who is the home team?");
      if (ans !== null) {
        this.$store.commit("setHomeTeam", ans);
        break;
      }
    }
    while (true) {
      let ans = prompt("Who is the away team?");
      if (ans !== null) {
        this.$store.commit("setAwayTeam", ans);
        break;
      }
    }
    for (let i = 1; i < 10; i++) {
      let suffix;
      if (i == 1) {
        suffix = "st";
      } else if (i == 2) {
        suffix = "nd";
      } else if (i == 3) {
        suffix = "rd";
      } else {
        suffix = "th";
      }
      while (true) {
        let ans = prompt(
          `Who is the ${i}${suffix} person in the ${this.$store.state.homeTeam}' linup?`
        );
        if (ans !== null) {
          this.$store.commit("addHomeLineup", ans);
          break;
        }
      }
      while (true) {
        let ans = prompt(
          `Who is the ${i}${suffix} person in the ${this.$store.state.awayTeam}' linup?`
        );
        if (ans !== null) {
          this.$store.commit("addAwayLineup", ans);
          break;
        }
      }
    }
  },
});
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
