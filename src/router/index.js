import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import Results from '../views/Results.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/results', name: 'Results', component: Results },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // C'est l'export par défaut