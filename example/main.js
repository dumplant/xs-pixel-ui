import Vue from 'vue'
import App from './App.vue'

import "../components/css/index.scss";
import API from '../components/lib/index.js';

Vue.use(API)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')