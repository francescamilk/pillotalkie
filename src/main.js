import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomeScreen from './components/HomeScreen.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeScreen
    }
  ]
})
app.use(router)

app.mount('#app')
