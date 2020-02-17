// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import VuexStore from './vuex/store'
import routes from './router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFhZmFjOTczZTVmNDUzYzVmYmFjYWU1ZDgxNDIzNzk0NmMxYzkwOWRkN2E5OGZhMjBiOTAzNjhmMjg4NDM3NDllZmZlOWU1ZDIxY2M1MWNjIn0.eyJhdWQiOiIyIiwianRpIjoiMWFmYWM5NzNlNWY0NTNjNWZiYWNhZTVkODE0MjM3OTQ2YzFjOTA5ZGQ3YTk4ZmEyMGI5MDM2OGYyODg0Mzc0OWVmZmU5ZTVkMjFjYzUxY2MiLCJpYXQiOjE0ODYzMDc1NjQsIm5iZiI6MTQ4NjMwNzU2NCwiZXhwIjoxNTE3ODQzNTYzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kn-WcuqdF1ailiSktojUM1wWzGn0Tu5yvoSJ8rreW9VVNVtOto_0KJCXee-5w-mCQUGA8L9aF2HUm85hy1m3p9FOUSGqqDmJaGYPDxC9mYEOAv3HPecVib8OpncixjtX7vn1vrUQKRczE7Fk1DyYa_80OHXkmz9wARQ7hGoSfU711_MB8brzh1WUdOXIT6EUKOrnw_8gXPu36JrtB3d5Bl1siNTDGGHmMTwrLBDEA_MRXAHd3P3Zr9NINUs92ZWGhry4RNyYucyHNUQ2PWxCqPgJ_6lrPPBzza6b1C8yCnsep7hesjzTHVMWoiJ81gksgIRFzSIKyQ6Jvq1scPvrA373tjLLLX2tl7zVuZdiQ-_3S5Vkb7N1J3ZwRcixLSQe3BnIx0ukmzQogDMhI6xGv3wlLzn1HGPobU9DHKUTyhKc7eW2VuxzgQLqoonF3hcMLpVF442MsB_YoEJiR6_ajCMciSPPkexBjYV7nk4I6pXlcfRTLXB2DNdM3Ty08atL0EOQXkReQakK1GhqS2_s3ugzkFpYaZnYkBoPyuD_2nJVPgnxqvgO-VToiRmB6ItA2qoGuphz8ZMX2EXSmhN3YOBwv9IYzQMSlDKCMqLPxxRonro6gjQkkUA-V8LenwONqBjl98DMDjBqwON77elF6vD_IcsE76uhABhflGLKc10')
  next()
})

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
