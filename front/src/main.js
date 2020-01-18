import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import {Swipe,SwipeItem} from 'mint-ui'
import 'mint-ui/lib/swipe/style.css'
import 'mint-ui/lib/style.css'
import './assets/js/global'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
