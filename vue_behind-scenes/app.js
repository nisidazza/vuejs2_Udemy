const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// *** JS BEHAVIOUR ***

// let message = 'Hello!';
// let longMessage = message + 'World!';
// console.log(longMessage);

// output: Hello World!

// message = 'Hello!!!'
// console.log(longMessage);
// output: still Hello World!

// *** REACTIVE JS ***

// const data = { message: "Hello!", longMessage: "Hello! World!" };
// const handler = {
//   set(target, key, value) {
//     console.log("target", target);
//     console.log("key", key);
//     console.log("value", value);
//     if (key === "message") {
//       target.longMessage = value + "World!";
//     }
//     target.message = value;
//   },
// };
// const proxy = new Proxy(data, handler);
// proxy.message = "Hello!!!!";

/*OUTPUT:
target {message: 'Hello!'}
app.js:37 key message
app.js:38 value Hello!!! */

// console.log("proxy long message", proxy.longMessage);
// OUTPUT: Hello!!!World
