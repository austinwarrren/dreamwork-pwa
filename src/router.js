import Vue from 'vue'
import Router from 'vue-router'
import LogComponent from './views/Log'
import DataComponent from './views/Data'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/log', 
      component: LogComponent,
      props: true 
    },
    {
      path: '/data',
      component: DataComponent,
      props: true
    }
  ]
})
