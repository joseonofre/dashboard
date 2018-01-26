const toggleNavLeft = (context, payload) => {
  context.commit('TOGGLE_NAV_LEFT', payload);
};

const toggleNavRight = (context, payload) => {
  context.commit('TOGGLE_NAV_RIGHT', payload);
};

export default {
  toggleNavLeft,
  toggleNavRight,
};
