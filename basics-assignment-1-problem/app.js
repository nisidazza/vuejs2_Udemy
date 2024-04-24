Vue.createApp({
  data() {
    return {
      name: "Niky",
      age: 37,
      image: "assets/corgie_small_icon.jpeg",
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },

    favoriteNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
