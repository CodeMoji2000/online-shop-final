import I18n from "i18n-js";
import en from "./en";
import fa from "./fa";

I18n.translations = {
  fa,
  en,
};
I18n.fallbacks = true;
I18n.locale = "fa";

export const changeLanguage = (language) => {
  I18n.locale = language;
};

const i18n = I18n;
export default i18n;
