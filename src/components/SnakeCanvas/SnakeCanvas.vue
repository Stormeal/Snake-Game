<template>
  <canvas
    ref="board"
    id="snake-canvas"
    :width="boardSizePx"
    :height="boardSizePx"
  ></canvas>
</template>

<script>
export default {
  name: "SnakeCanvas",
  props: {
    cellSize: Number,
    boardSize: Number,
    speed: Number,
    isPlaying: Boolean,
  },
  computed: {
    boardSizePx() {
      return this.cellSize * this.boardSize;
    },
  },
  mounted() {
    this.boardContext = this.$refs.board.getContext("2d");
  },
  created() {
    this.resetSnake();
  },
  watch: {
    isPlaying(value) {
      console.log(value);
      // Subscribes to the value of isPlaying.
      // Used for managing of game state.
      if (value) {
        this.resetSnake();
        this.snakeMovement();
      }
    },
  },
  methods: {
    resetSnake() {
      this.snake = [
        {
          x: this.getMiddleCell(),
          y: this.getMiddleCell(),
        },
      ];
    },
    getMiddleCell() {
      // Use this method in order to get the center cell of the canvas.
      return Math.round(this.boardSize / 2);
    },
    snakeMovement() {
      this.snake.forEach(this.drawCell);
    },
    drawCell({ x, y }) {
      this.boardContext.rect(
        x * this.cellSize,
        y * this.cellSize,
        this.cellSize,
        this.cellSize
      );
      this.boardContext.fillStyle = "black";
      this.boardContext.fill();
    },
    getMoveDelay() {
      // Return a value we can use in milliseconds
      return (2 / Number(this.speed)) * 1000;
    },
  },
};
</script>

<style scoped>
#snake-canvas {
  border: 1px solid #ccc;
  margin: 10px 0;
}
</style>
