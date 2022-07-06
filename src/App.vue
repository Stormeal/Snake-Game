<template>
  <div id="app">
    <h1>Snake Game</h1>

    <div class="column">
      Cell size (pixels):
      <input type="number" min="10" v-model.number="cellSize" />
    </div>
    <div class="column">
      Border size (cells):
      <input type="number" min="5" v-model.number="boardSize" />
    </div>
    <div class="column">
      Speed (Default 1):
      <input type="number" min="1" v-model.number="speed" />
    </div>
    <br />
    <SnakeCanvas
      :cellSize="cellSize"
      :boardSize="boardSize"
      :speed="speed"
    ></SnakeCanvas>
    <div>Scores: {{ scores || 0 }}</div>
    <button id="play-btn">
      {{ isPlaying ? "Stop" : "Play"}}
    </button>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>
