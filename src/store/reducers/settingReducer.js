import { SET_LANGUAGE } from "../constants";

let initialState = {
  lang: "en",
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      console.log(action.payload);
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
export default settingReducer;
