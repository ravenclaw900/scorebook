import { createStore } from "vuex";

export default createStore({
  state: {
    homeTeam: "",
    awayTeam: "",
    homeLineup: [] as string[],
    awayLineup: [] as string[],
  },
  mutations: {
    setHomeTeam(state, name: string) {
      state.homeTeam = name;
    },
    setAwayTeam(state, name: string) {
      state.awayTeam = name;
    },
    addHomeLineup(state, name: string) {
      state.homeLineup.push(name);
    },
    addAwayLineup(state, name: string) {
      state.awayLineup.push(name);
    },
  },
  actions: {},
});
