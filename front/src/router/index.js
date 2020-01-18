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
      path: '/Member',
      name: 'Member',
      component: resolve=>require(['@/components/Member'], resolve),
      meta:{
        showTab:false
      }
    }
  ]
})
