import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSlide: 0,
    slides: [
      { imgSrc: require("../assets/img/Details1.png") },
      { imgSrc: require("../assets/img/Bedroom5.png") },
      { imgSrc: require("../assets/img/Bedroom6.png") },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
