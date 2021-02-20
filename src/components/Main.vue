<template>
  <div id="mainArea">
    <table></table>
    <img id="diamond" src="../assets/diamond.png" alt="baseball diamond" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

export default defineComponent({
  data() {
    return {
      homeTeam: "",
      awayTeam: "",
      homeLineup: [] as string[],
      awayLineup: [] as string[],
    };
  },
  mounted() {
    while (true) {
      let ans = prompt("Who is the home team?");
      if (ans !== null) {
        this.homeTeam = ans;
        break;
      }
    }
    while (true) {
      let ans = prompt("Who is the away team?");
      if (ans !== null) {
        this.awayTeam = ans;
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
          `Who is the ${i}${suffix} person in the ${this.homeTeam}' linup?`
        );
        if (ans !== null) {
          this.homeLineup.push(ans);
          break;
        }
      }
      while (true) {
        let ans = prompt(
          `Who is the ${i}${suffix} person in the ${this.awayTeam}' linup?`
        );
        if (ans !== null) {
          this.awayLineup.push(ans);
          break;
        }
      }
    }
  },
});
</script>

<style scoped>
#diamond {
  float: right;
}
</style>
