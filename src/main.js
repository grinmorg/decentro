import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// Global components import
import BaseIcon from "./components/atoms/base/BaseIcon.vue";
import BaseTooltip from "./components/atoms/base/BaseTooltip.vue";

const app = createApp(App);

// Global components add to app
app.component("BaseIcon", BaseIcon);
app.component("BaseTooltip", BaseTooltip);

app.mount("#app");
