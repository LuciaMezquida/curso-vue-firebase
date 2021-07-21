import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    name: "Lucia",
    age: 38,
    users: [
      { name: "Muka", age: 16, active: true },
      { name: "Mina", age: 16, active: false },
      { name: "Maya", age: 2, active: true },
      { name: "Izzy", age: 8, active: false },
    ],
  },
  getters: {
    numberOfActives: (state) => {
      return state.users.filter((user) => user.active).length;
    },
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
});

store.commit("increment");
store.commit("decrement");
