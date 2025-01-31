import axios from 'axios';

export default {
    // namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(window.console.error);
    },
    addRobotToCart() {
        window.console.log('check')
    }
  },
};