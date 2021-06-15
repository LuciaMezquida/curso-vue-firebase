const app = new Vue({
  el: "#main",
  data: {
    task: null,
    tasksList: ["Learn ES6", "Learn Vue", "Rest the weekend"],
  },
  methods: {
    addTask() {
      this.tasksList.unshift(this.task);
    },
  },
});
