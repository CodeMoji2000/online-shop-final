import i18n from "./i18";

const rtl = ["fa"];
const ltr = ["en"];
let directions = { direction: null, align: null };

if (ltr.includes(i18n.locale)) {
  directions.direction = "ltr";
  directions.align = "text-left";
} else {
  directions.direction = "rtl";
  directions.align = "text-right";
}

export default directions;
