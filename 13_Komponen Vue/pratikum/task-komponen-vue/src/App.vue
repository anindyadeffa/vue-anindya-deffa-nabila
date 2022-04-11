<template>
  <div id="app">
    <h3>Todo List</h3>
    <TodoListWithComponent/>
  </div>
</template>

<script>
import TodoListWithComponent from '@/components/TodoListWithComponent';

export default {
  name: 'App',
  components: {
    TodoListWithComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
