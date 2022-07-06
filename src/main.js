import { createApp, h } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app')
const app = createApp({
  render: () => h(App),
});

app.mount("#app");
