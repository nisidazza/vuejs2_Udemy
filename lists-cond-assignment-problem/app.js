Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      isVisible: true,
    };
  },
  computed: {
    buttonText() {
        return this.isVisible ? "Hide List" : "Show List"
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleTasksList() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
