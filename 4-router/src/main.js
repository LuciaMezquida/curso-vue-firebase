import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.directive("alert", {
  bind: (el, binding) => {
    // Focus the element
    el.style.color = "red";
    el.style.fontSize = binding.value + "px";
  },
});

const router = new VueRouter({ routes });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
