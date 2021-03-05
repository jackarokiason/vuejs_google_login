import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import '@/assets/css/style.css'
import '@/assets/css/main.css'
import './registerServiceWorker'
import '@/assets/css/animate.css'
import '@/assets/css/bootstrap.min.css'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '747471076663-iha9b1qs34lrum1ketkneugfs6re3hl4.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
