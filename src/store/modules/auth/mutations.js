const setExpToken = (state) => {
  if (state.token) {
    const base64Url = state.token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const data = JSON.parse(window.atob(base64));
    if (data.exp) {
      state.expToken = data.exp;
    }
  }
};

const SET_TOKEN = (state, payload) => {
  if (payload) {
    state.loginError = false;
  } else {
    state.loginError = true;
  }
  state.token = payload;
  localStorage.setItem('token', state.token);
  setExpToken(state);
};

const LOADING = (state, payload) => {
  state.loading = payload;
};

export default {
  SET_TOKEN,
  LOADING,
};
