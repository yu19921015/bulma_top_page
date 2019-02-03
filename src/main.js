import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Font Awesome のメインファイルを import
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'

// 使用するカテゴリーのファイルを import
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

import Bulma from 'bulma'
import 'bulma/css/bulma.css'

Vue.use(Bulma)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
