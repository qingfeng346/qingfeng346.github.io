import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ChangeLog from '@/components/ChangeLog'
import ReleaseNotes from '@/components/ReleaseNotes'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/changelog',
      name: 'ChangeLog',
      component: ChangeLog
    },
    {
      path: '/releasenote',
      name: 'ReleaseNotes',
      component: ReleaseNotes
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
