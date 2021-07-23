import Vue from 'vue'
import App from './App.vue'
import './assets/base.css'
import './assets/index.css'
import router from './router/router.js'
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
