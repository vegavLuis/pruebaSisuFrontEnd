import axios from "axios";
import VueAxios from "vue-axios";
import { createApp } from "vue";
import App from "./App.vue";

// Vuetify 3
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

axios.defaults.baseURL = "http://localhost:3000/api";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(VueAxios, axios).mount("#app");
