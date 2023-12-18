import { SET_LANGUAGE } from "../constants";

export function setLang(lang) {
  return {
    type: SET_LANGUAGE,
    payload: lang,
  };
}
