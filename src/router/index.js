import { createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import About from '../views/About.vue'

const routes = [
    {path: '/', name: 'Home',component: Home},
    {path: '/todo', component: Todo},
    {path: '/about', component: About}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router