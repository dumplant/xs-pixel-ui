import BaseCard from "./card";
import PixelButton from "./button";

const components = {
  BaseCard,
  PixelButton
};
const install = function (Vue) {
  if (install.installed) {
    return;
  }
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

const API = {
  install
};

export default API;
