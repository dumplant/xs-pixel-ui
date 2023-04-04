import PixelRadio from "./src/main.vue";

PixelRadio.install = function (Vue) {
  Vue.component(PixelRadio.name, PixelRadio);
};

export default PixelRadio;
