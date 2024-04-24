const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      addedNumber: 10,
      subtractedNumber: 5,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      // this.counter++;
      this.counter = this.counter + num;
    },
    reduce(num) {
      // this.counter--;
      this.counter = this.counter - num;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    // submitForm(event) {
    //   event.preventDefault();
    //   alert("Submitted");
    // },
    // EVENT MODIFIER in HTML code - No need to use preventDefault
    submitForm() {
      alert("Submitted");
    },
  },
});

app.mount("#events");
