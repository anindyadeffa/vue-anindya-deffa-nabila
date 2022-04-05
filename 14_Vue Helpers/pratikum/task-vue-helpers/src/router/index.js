import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoList from '../views/TodoList';
import ListDetail from '../views/ListDetail';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/list-detail',
    name: 'ListDetail',
    component: ListDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
