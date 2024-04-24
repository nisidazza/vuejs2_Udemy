const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    // it's not bound to an event, so it returns something
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Smith";
    },
  },
});

app.mount("#events");
