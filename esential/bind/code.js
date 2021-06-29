const app = new Vue({
  el: "#main",
  data: {
    tasksList: [
      { title: "Task-1", complete: false },
      { title: "Task-2", complete: false },
      { title: "Task-3", complete: false },
      { title: "Task-4", complete: false },
    ],
  },
  methods: {
    completeTask(task) {
      task.complete = !task.complete;
    },
  },
});
