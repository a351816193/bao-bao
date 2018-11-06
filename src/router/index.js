import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import article from '@/pages/article'
import search from '@/pages/search'
import feedbackSuccess from '@/pages/feedbackSuccess'

import template from '@/components/template/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/article/:nodepath*',
      name: 'article',
      component: article
    }, {
      path: '/search',
      name: 'search',
      component: search
    }, {
      path: '/feedbackSuccess',
      name: 'feedbackSuccess',
      component: feedbackSuccess
    }, {
      path: '/template/:nodepath',
      name: 'template',
      component: template
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
