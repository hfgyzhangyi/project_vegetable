import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve=>require(['@/components/Home'], resolve),
      meta:{
        showTab:true
      }
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: resolve=>require(['@/components/Cart'], resolve),
      meta:{
        showTab:false
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: resolve=>require(['@/components/Register'], resolve),
      meta:{
        showTab:false
      }
    },
    {
      path: '/Member',
      name: 'Member',
      component: resolve=>require(['@/components/Member'], resolve),
      meta:{
        showTab:true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve=>require(['@/components/Login'], resolve),
      meta:{
        showTab:false
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: resolve=>require(['@/components/Order'], resolve),
      meta:{
        showTab:true
      }
    }
  ]
})
