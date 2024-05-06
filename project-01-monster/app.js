const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    specialAttackDisabled() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomNumber(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomNumber(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomNumber(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      const healtValue = getRandomNumber(8, 20);
      if (this.playerHealth + healtValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healtValue;
      }
      this.attackPlayer();
    },
  },
}).mount("#game");
