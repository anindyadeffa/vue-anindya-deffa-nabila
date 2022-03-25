<template>
  <div>
    <ol>
        <li v-for="(todo, index) in listTodo" :key="todo.selectedIndex">
            {{ todo }}

            <button @click="deleteTodo(index, todo)">Hapus</button>
            <button @click="editTodo(index, todo)">Edit</button>
        </li>
    </ol>

    <div v-if="!isEditing">
        <input type="text" v-model="todo">
        <input type="submit" value="Tambahkan" @click="addTodo()">
    </div>

    <div v-else>
        <input type="text" v-model="todo">
        <input type="submit" value="Update" @click="updateTodo()">
    </div>

    <!-- <button @click="addTodo()" type="submit">Tambahkan</button> -->
    <!-- <div v-if="listTodo.length >= 4">Hebat!</div> -->
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
      return {
          todo: '',
          listTodo: [],
          selectedIndex: null,
          isEditing: false,
      };
  },
  methods: {
    addTodo(){
        this.listTodo.push(this.todo);
        this.todo = "";
    },
    editTodo(index, todo) {
        this.todo = todo;
        this.selectedIndex = index;
        this.isEditing = true;
    },
    updateTodo() {
        this.listTodo.splice(this.selectedIndex, 1, this.todo);
        this.isEditing = false;
    },
    deleteTodo(index) {
        this.listTodo.splice(index, 1)
    },
  },
};
</script>

<style>
</style>
