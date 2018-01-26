import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  clipped: true, // header full
  colorBgNavHeader: 'grey darken-4',
  colorFontNavHeader: true,

  drawer: true, // nav-left
  fixed: false, // footer
  items: [
    { icon: 'home', title: 'Home', to: { path: '/' } },
    { icon: 'supervisor_account', title: 'Usuários', to: { path: 'users' } },
  ],
  miniVariant: false, // nav-left minificado
  right: true, // menu-right
  rightDrawer: false, // menu right aberto
  title: 'Novo dashboard', // title
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
