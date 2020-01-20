import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import {Swipe,SwipeItem} from 'mint-ui'
import 'mint-ui/lib/swipe/style.css'
import 'mint-ui/lib/style.css'
import './assets/js/global'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Vuex)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
var store = new Vuex.Store({
  state:{
    phone_number:""
  },
  mutations:{
    setPhoneNumber(state, val){
      state.phone_number = val
    }
  },
  getters:{
    getPhoneNumber(state){
      return state.phone_number;
    }
  },
  actions:{
    setPhoneNumberFun(context, val){
      context.commit("setPhoneNumber", val)
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  watch:{
    '$route':function(from,to){
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
    }
  }
})
