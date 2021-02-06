import Vue from 'vue'

// Components
const HelloWorld = () => import('./components/HelloWorld')

// Vue instance

new Vue({
  el: '#vue-app',
  components: {
    HelloWorld
  }
})
