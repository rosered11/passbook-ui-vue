import { createStore } from 'vuex';

import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    auth: authModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;