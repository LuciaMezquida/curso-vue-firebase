const app = new Vue({
  el: "#main",
  data: {
    task: null,
    tasksList: [
      {
        title: "Aprender ES6",
        complete: false,
      },
      {
        title: "Aprender Vue",
        complete: true,
      },
      {
        title: "Descansar toda la tarde",
        complete: false,
      },
      {
        title: "Levantarte",
        complete: true,
      },
    ],
  },
  methods: {
    addTask() {
      this.tasksList.unshift({ title: this.task, complete: false });
    },
  },
  computed: {
    showCompleted() {
      return this.tasksList.filter((item) => item.complete);
    },
  },
});
