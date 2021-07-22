import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.directive("alert", {
  bind: (el, binding) => {
    el.style.color = "red";
    el.style.fontSize = binding.value + "px";
  },
});
Vue.directive("topfix", {
  bind: (el, binding) => {
    el.style.position = "fixed";

    if (binding.expression) el.style.top = binding.expression + "px";
    if (binding.arg) {
      let color = "beige";
      let modifiers = Object.keys(binding.modifiers);
      if (modifiers.length > 0) color = modifiers[0];
      el.style.backgroundColor = color;
    }
  },
});

const router = new VueRouter({ routes });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
