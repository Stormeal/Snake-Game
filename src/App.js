import SnakeCanvas from "./components/SnakeCanvas"

export default {
  name: 'App',
  components: {
    SnakeCanvas
  },
  data() {
    return {
      cellSize: 10,
      boardSize: 5,
      speed: 1,
    }
  }
}
