export default {
  data() {
    return {
      json: {},
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    getRes(key) {
      return this.json[key];
    },
    loadData() {
      this.json = require('../assets/resources.json');
    },
  },
};
