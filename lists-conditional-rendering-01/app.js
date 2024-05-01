const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      user: { name: "Cindy", age: "35" },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
