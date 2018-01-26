const TOGGLE_NAV_LEFT = (state, payload) => {
  state.drawer = payload;
};

const TOGGLE_NAV_RIGHT = (state, payload) => {
  state.rightDrawer = payload;
};

export default {
  TOGGLE_NAV_LEFT,
  TOGGLE_NAV_RIGHT,
};
