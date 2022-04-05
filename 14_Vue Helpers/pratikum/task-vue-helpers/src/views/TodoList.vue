<template>
  <div>
    <h2>Todo List</h2>
    <TodoListWithComponent/>
    <router-link to="/list-detail" tag="button">List Detail</router-link>
    <router-view/>
  </div>
</template>

<script>
import TodoListWithComponent from "../components/TodoListWithComponent.vue";

export default {
  name: 'TodoList',
  components: {
    TodoListWithComponent,
  },
};
</script>

<style scoped>
</style>
