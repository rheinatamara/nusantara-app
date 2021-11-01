import { USER_LOGIN } from "../keys";
import axios from "axios";
export function loginUser(payload) {
  return {
    type: USER_LOGIN,
    payload,
  };
}
const baseUrl = `https://tasklogin.herokuapp.com/api/login`;
export function loginUserAsync(data) {
  return function (dispatch) {
    return axios({
      method: "post",
      url: `${baseUrl}`,
      data: data,
    });
  };
}
