import { createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import About from '../views/About.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/todo', component: Todo},
    {path: '/about', component: About}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router