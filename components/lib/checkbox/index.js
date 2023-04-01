import PixelCheckbox from "./src/main.vue";

PixelCheckbox.install = function (Vue) {
  Vue.component(PixelCheckbox.name, PixelCheckbox);
};

export default PixelCheckbox;
