import MainVue from '@/main';

const login = (context, form) => {
  context.commit('LOADING', true);
  MainVue.$http.post(`${MainVue.$store.state.config.api}/api/Account/token`, form)
    .then(
      (response) => {
        context.commit('LOADING', false);
        if (response.body.token) {
          context.commit('SET_TOKEN', response.body.token);
          MainVue.$router.push('/');
        } else {
          context.commit('SET_TOKEN', '');
        }
      },
      () => {
        context.commit('LOADING', false);
        context.commit('SET_TOKEN', '');
      },
    );
};

const isLogged = (context) => {
  if (context.state.token) {
    return true;
  } else if (localStorage.getItem('token')) {
    context.commit('SET_TOKEN', localStorage.getItem('token'));
    return true;
  }
  return false;
};

export default {
  login,
  isLogged,
};
