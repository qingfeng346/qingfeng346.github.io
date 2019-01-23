import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require("@/components/Main").default
    },
    {
      path: '/sco',
      name: 'sco',
      component: require("@/components/sco/Main").default
    },
    {
      path: '/sco/changelog',
      name: 'sco-changelog',
      component: require("@/components/sco/ChangeLog").default
    },
    {
      path: '/sco/releasenote',
      name: 'sco-releasenote',
      component: require("@/components/sco/ReleaseNotes").default
    },
    {
      path: '/sco/about',
      name: 'sco-about',
      component: require("@/components/sco/About").default
    },
    {
      path: '/scorpio-package-tool',
      name: 'scorpio-package-tool',
      component: require("@/components/scorpio-package-tool/Main").default
    },
    {
      path: '/scorpio-package-tool/releasenote',
      name: 'scorpio-package-tool-releasenote',
      component: require("@/components/scorpio-package-tool/ReleaseNotes").default
    },
    {
      path: '/scorpio-package-tool/about',
      name: 'scorpio-package-tool-about',
      component: require("@/components/scorpio-package-tool/About").default
    },
    {
      path : "/own/fangdai",
      name: 'own-fangdai',
      component: require("@/components/own/fangdai").default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
