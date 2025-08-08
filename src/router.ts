import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import QuotesRandom from './components/QuotesRandom.vue'
import QuotesList from './components/QuotesList.vue'
import QuotesImage from './components/QuotesImage.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/quotes', component: QuotesRandom, props: { msg: 'Vite + Vue' } },
    { path: '/quotes/list', component: QuotesList, props: { msg: 'Vite + Vue' } },
    { path: '/quotes/image', component: QuotesImage, props: { msg: 'Vite + Vue' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router