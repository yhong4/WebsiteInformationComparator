import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home.vue'
import SelectData from '@/containers/SelectData.vue'
import DisplayData from '@/containers/DisplayData.vue'
import ManageCompetitor from "@/containers/ManageCompetitor.vue"
import ManageAssignment from "@/containers/ManageAssignment.vue"
import ManageSetMargin from "@/containers/ManageSetMargin.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/fetch-data',
      name:'selectData',
      component: SelectData
    },
    {
      path:'/display-data',
      name:'displayData',
      component: DisplayData
    },
    {
      path:'/manage-competitor',
      name:'manageCompetitor',
      component: ManageCompetitor
    },
    {
      path:'/manage-assignment',
      name:'manageAssignment',
      component: ManageAssignment
    },
    {
      path:'/manage-margin',
      name:'manageSetMargin',
      component: ManageSetMargin
    },
  ]
})

