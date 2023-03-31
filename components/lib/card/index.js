import PixelCard from "./src/main.vue";

PixelCard.install = function (Vue) {
  Vue.component(PixelCard.name, PixelCard);
};

export default PixelCard;
