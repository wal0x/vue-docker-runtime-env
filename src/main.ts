import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

declare global {
  interface Window {
    _env_: string;
  }
}

Vue.prototype._env_ = window._env_;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
