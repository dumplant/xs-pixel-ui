import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import "../components/css/card.scss";

import BaseDemo from '../components/lib/demo/index.js'
import BaseCard from "../components/lib/card/index.js";

Vue.use(BaseDemo)
Vue.use(BaseCard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')