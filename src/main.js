// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify);
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
