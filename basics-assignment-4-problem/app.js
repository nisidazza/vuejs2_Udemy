Vue.createApp({
  data() {
    return { input: "", isVisible: true, inputBackgroundColor: "" };
  },
  computed: {
    pClasses() {
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        visibile: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleButton() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
