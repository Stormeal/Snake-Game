<template>
  <canvas
    ref="board"
    id="snake-canvas"
    :width="boardSizePx"
    :height="boardSizePx"
  ></canvas>
</template>

<script>
import constants from "./constants";

export default {
  name: "SnakeCanvas",
  props: {
    cellSize: Number,
    boardSize: Number,
    speed: Number,
    isPlaying: Boolean,
    stop: Function,
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
      console.log("Watch: ", value);
      // Subscribes to the value of isPlaying.
      // Used for managing of game state.
      if (value) {
        this.resetSnake();
        this.move();
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
      // TODO: Add random direction
      this.direction = constants[0];
    },
    getMiddleCell() {
      // Use this method in order to get the center cell of the canvas.
      return Math.round(this.boardSize / 2);
    },
    move() {
      if (!this.isPlaying) {
        return;
      }

      this.clear();
      // Creates a new cell head based on the movement direction
      const newHeadCell = {
        x: this.snake[0].x + this.direction.move.x,
        y: this.snake[0].y + this.direction.move.y,
      };

      if (this.isCellOutOfBoard(newHeadCell)) {
        this.stop();
        alert(`Game over! You've scored ${this.scores} points.`);
      } else {
        // Incerts new cell into the start of the array
        this.snake.unshift(newHeadCell);
        this.snake.pop();
      }
  console.log("TEST");

      this.boardContext.beginPath();
      this.snake.forEach(this.drawCell);
      this.boardContext.closePath();

      setTimeout(this.move, this.getMoveDelay());
    },
    clear() {
      this.boardContext.clearRect(0, 0, this.boardSizePx, this.boardSizePx);
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
    isCellOutOfBoard({ x, y }) {
      return x < 0 || y < 0 || x >= this.boardSize || y >= this.boardSize;
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
