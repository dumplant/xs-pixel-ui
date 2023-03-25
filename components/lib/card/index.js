import BaseCard from "./src/main.vue";

BaseCard.install = function (Vue) {
  Vue.component(BaseCard.name, BaseCard);
};

export default BaseCard;
