import SnakeCanvas from "./components/SnakeCanvas/SnakeCanvas.vue"
import TestComponent from "./components/Test/TestComponent.vue"

export default {
  name: 'App',
  components: {
    SnakeCanvas,
    TestComponent
  },
  data() {
    return {
      cellSize: 10,
      boardSize: 20,
      speed: 10,
      scores: 0,
      isPlaying: false
    }
  }
}
