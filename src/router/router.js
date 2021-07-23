import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexCom from '../components/IndexCom.vue'
// import Echart from '../components/Echart.vue'
Vue.use(VueRouter)

const routes = [
    {path:'/',redirect: '/todoList'},
    {
      path:'/todoList',
      component:IndexCom,
      // redirect: '/all',
      children:[
        {path:'/todoList/all',name:'all',component:IndexCom},
        {path:'/todoList/active',name:'active'},
        {path:'/todoList/complete',name:'complete'}
    ]
  },
  {
    path:'/echart',
    name:'echart',
    component: () => import(/* webpackChunkName: "SecChart" */ '../components/SecChart.vue')}
]

const router = new VueRouter({
    routes
  })

// router.beforeEach((to, from, next) => {
  
// })
  
export default router