import { createStore } from 'vuex';

import data from '@/lib/data.js';

export default createStore({
  state: {
    data,
  },
  mutations: {},
  actions: {},
  getters: {
    data: (state) => state.data,
  },
  modules: {},
});
