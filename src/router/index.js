import Vue from 'vue'
import VueRouter from 'vue-router'

import firebase from 'firebase/app'
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // ROUTE GUARDS FOR AUTHENTICATED USERS/GUESTS

  Router.beforeEach((to, from, next) => {
    // Check for requiresAuth Guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // Check if NOT logged In
      if (!firebase.auth().currentUser) {
        // Go to Login
        next('/signIn')
      } else {
        // proceed to route
        next()
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      // Check if logged In
      if (firebase.auth().currentUser) {
        // Go to Dashboard
        next('/')
      } else {
        // Proceed to route
        next()
      }
    }
  })

  // ........................................................................
  return Router
}
