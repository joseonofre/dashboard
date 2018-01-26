import Vue from 'vue';
import Vuex from 'vuex';
import configModule from './modules/config';
import layoutModule from './modules/layout';
import authModule from './modules/auth';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout: layoutModule,
    auth: authModule,
    config: configModule,
  },
});
