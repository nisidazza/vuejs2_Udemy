const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomNumber(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomNumber(8, 15);
      this.playerHealth -= attackValue;
    },
  },
}).mount("#game");
