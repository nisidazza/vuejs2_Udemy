const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname: "",
      lastName: "",
      image:
        "vue_methods_vs_computed_vs_watchers.png",
    };
  },
  // use watch to perfrom "side effects"
  // a watcher is a method that watches a data property with the same name and runs every time that data property value changes.
  // best case scenarios: HTTP requests, timers,
  watch: {
    counter(value) {
      if (value > 50) {
        // this.counter = 0;
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     return (this.fullname = "");
    //   }
    //   this.fullname = value + " " + this.lastName;
    // },
    // // OR: name(newValue, oldValue) {....}
    // lastName(value) {
    //   if (value === "") {
    //     return (this.fullname = "");
    //   }
    //   this.fullname = this.name + " " + value;
    // },
  },
  // Used them to improve performance, for outputting values (in most cases)
  // Vue cached the computed property value, and only re-calculate and re-evaluate it if the dependency (in this case name) changed.
  computed: {
    fullname() {
      console.log("Running again");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  // Use methods when you know you want to recalculate a value whenever anything on the page changed.
  methods: {
    setName(event) {
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
      console.log("Running again");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Smith";
    },
  },
});

app.mount("#events");
