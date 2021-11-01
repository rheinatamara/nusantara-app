import { USER_LOGIN } from "../keys";

const initialState = {
  isLogin: false,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
}

export default reducer;
