const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  // Used them to improve performance, for outputting values (in most cases)
  // Vue cached the computed property value, and only re-calculate and re-evaluate it if the dependency (in this case name) changed. 
  computed: {
    fullname() {
      console.log("Running again");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Smith";
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
