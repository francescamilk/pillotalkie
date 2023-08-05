import { createApp } from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import { createRouter, createWebHistory } from 'vue-router'

import HomeScreen from './components/HomeScreen.vue'

const app = createApp(App)

app.use(firestorePlugin)

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
