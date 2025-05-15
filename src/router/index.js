import { createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import About from '../views/About.vue'

const routes = [
    {path: '/', name: 'Home',component: Home},
    {path: '/Portfolio', component: Portfolio},
    {path: '/about', component: About}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router