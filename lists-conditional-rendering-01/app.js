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
  },
});

app.mount("#user-goals");
