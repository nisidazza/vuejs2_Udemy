Vue.createApp({
  data() {
    return {
      userName: "Nisida",
      registeredUserName: "",
      registeredUserSurname: "",
    };
  },
  methods: {
    showAlert() {
      alert(`Hello ${this.userName}!`);
    },
    registerUserName(e) {
      this.registeredUserName = e.target.value;
    },
    registerUserSurname(e) {
      this.registeredUserSurname = e.target.value;
    },
  },
}).mount("#assignment");
