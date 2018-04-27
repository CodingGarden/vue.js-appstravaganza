import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player_1: {
      score: 0
    },
    player_2: {
      score: 0
    }
  },
  mutations: {
    increaseScore(state, player_name) {
      const player = state[player_name];
      player.score += 1;
    },
    decreaseScore(state, player_name) {
      const player = state[player_name];
      if(player.score > 0) {
        player.score -= 1;
      }
    }
  }
});
