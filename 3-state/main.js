const person = {
  name: "Muka",
};

new Vue({
  el: "#app1",
  data: {
    person: {
      name: person,
    },
  },
});
new Vue({
  el: "#app2",
  data: {
    person: {
      name: person,
    },
  },
});
