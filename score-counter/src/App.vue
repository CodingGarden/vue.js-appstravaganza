<template>
  <div id="app" class="container">
    <h1 class="text-center">Player Score Counter</h1>
    <div class="card">
      <div class="card-body text-center">
        <h3>Player 1</h3>
        <button @click="decreaseScore('player_1')" type="button" class="btn btn-danger">Down</button>
        <span class="player-score">{{player_1.score}}</span>
        <button @click="increaseScore('player_1')" type="button" class="btn btn-success">Up</button>
      </div>
      <div class="card-body text-center">
        <h3>Player 2</h3>
        <button @click="decreaseScore('player_2')" type="button" class="btn btn-danger">Down</button>
        <span class="player-score">{{player_2.score}}</span>
        <button @click="increaseScore('player_2')" type="button" class="btn btn-success">Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'app',
  computed: mapState(['player_1', 'player_2']),
  methods: mapMutations(['increaseScore', 'decreaseScore'])
}
</script>

<style>
.player-score {
  font-size: 4em;
}
</style>
