import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import VueResizeDirective from 'vue-resize-directive'
Vue.directive('resize', VueResizeDirective)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
