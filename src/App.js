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
      boardSize: 5,
      speed: 1,
    }
  }
}
