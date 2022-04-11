<template>
  <div>
    <ol>
      <li class="list-todo" v-for="(Todo, index) in listTodo" :key="Todo.id">
        {{ Todo }}

        <button @click="editTodoList(index)">Edit</button>
        <button @click="deleteTodoList(index)">Delete</button>

        <input v-if="isEdit" v-model="changeInput" />
        <button v-if="isEdit" @click="buttonUpdate(index)">Update</button>
      </li>
    </ol>

    <input type="text" v-model="Todo" />
    <button @click="submitTodoList()">Tambahkan</button>
  </div>

</template>
<script>
export default {
  name: "TodoList",
  data() {
    return {
      Todo: "",
      listTodo: [],
      isEdit: false,
      changeInput: "",
    };
  },
  methods: {
    submitTodoList() {
      this.listTodo.push(this.Todo);
      this.Todo = "";
    },

    deleteTodoList(index) {
      this.listTodo.splice(index, 1);
    },

    editTodoList() {
      this.isEdit = true;
    },

    buttonUpdate(index) {
      this.listTodo[index] = this.changeInput;
    },
  },
};
</script>
<style scoped>
.list-todo {
  padding-right: 100px;
}
</style>
