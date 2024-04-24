Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    sum() {
      if (this.result < 37) {
        return "Not there yet";
      }
      if (this.result > 37) {
        return "Too much!!!";
      }
      return this.result;
    },
  },
  methods: {
    add(number) {
      this.result = this.result + number;
    },
  },
  watch: {
    sum() {
      console.log("watcher executing....");
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
}).mount("#assignment");
