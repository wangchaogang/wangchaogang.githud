import Vue from 'vue'
import store from './store/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import index from './index'
import router from './router'
import App from './App.vue'
Vue.use(MintUI)
Vue.use(index)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
