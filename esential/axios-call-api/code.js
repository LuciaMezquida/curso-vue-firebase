const app = new Vue({
  el: "#main",
  data: {
    people: [],
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => (this.people = response.data));
  },
});
