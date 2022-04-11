import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoList from '@/views/TodoList.vue';
import ListDetail from '@/views/ListDetail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: ":index",
    name: "ListDetail",
    component: ListDetail,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
