import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
  loading: false,
  loginError: false,
  token: null,
  expToken: null,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
