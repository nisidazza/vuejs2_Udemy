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
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      //this points to the DOM object for the input element
      // with ref we avoid firing the input with every key stroke
    },
  },

  // --- LIFECYCLE HOOKS ---

  // vue app not fully initialized
  beforeCreate() {
    console.log("beforeCreate()");
  },
  // vue app initialized internally but not mounted
  created() {
    console.log("created()");
  },
  // triggered right before the app is mounted (before we see something on the screen)
  beforeMount() {
    console.log("beforeMount()");
  },
  // output shown on the screen
  mounted() {
    console.log("mounted()");
  },

  // --- HOOKS TRIGGERED BY DATA CHANGES ---

  // changes not shown yet
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  // update fully processed
  updated() {
    console.log("updated()");
  },
  // --- UNMOUNTED HOOKS ---
  beforeUnmount() {
    console.log("beforeUnmoun()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <p>{{favouriteMeal}}</p>
  `,
  data() {
    return {
      favouriteMeal: "pizza",
    };
  },
});
app2.mount("#app2");

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
