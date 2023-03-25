import BaseDemo from './src/main.vue'

BaseDemo.install = function (Vue) {
    Vue.component(BaseDemo.name, BaseDemo)
}

export default BaseDemo