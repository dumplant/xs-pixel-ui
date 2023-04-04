import PixelCard from "./card";
import PixelButton from "./button";
import PixelCheckbox from "./checkbox";
import PixelRadio from "./radio";


const components = {
  PixelCard,
  PixelButton,
  PixelCheckbox,
  PixelRadio,
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
