import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleModalShow: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  actions: {
  },
  modules: {
  },
});
