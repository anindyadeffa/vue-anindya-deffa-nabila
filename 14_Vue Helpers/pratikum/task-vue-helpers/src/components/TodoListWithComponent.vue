<template>
  <div>
    <ol>
      <TodoListItem v-for="(Todo, index) in listTodo" :key="index" :todo="Todo" :index="index"
        @edit-list-baru="editTodoTask" @hapus-todo="hapusTodoTask"
      />
    </ol>

    <input class="form-add" type="text" v-model="Todo" />
    <button class="btn-submit" @click="submitTodo()">Tambahkan</button>
  </div>
  
</template>
<script>
import TodoListItem from "../components/TodoListItem.vue";

export default {
  name: "TodoListWithComponent",
  components: {
    TodoListItem,
  },
  data() {
    return {
      Todo: "",
      listTodo: [
        { todolist: "Belajar Frontend", isEdit: 0 },
      ],
    };
  },
  methods: {
    submitTodo() {
      console.log(this.Todo);
      this.listTodo.push({ todolist: this.Todo, isEdit: 0 });
      this.Todo = "";
    },
    hapusTodoTask(index) {
      this.listTodo.splice(index, 1);
    },
    editTodoTask(index, value) {
      this.listTodo[index].todolist = value;
    },
  },
};
</script>
<style scoped>
.form-add {
  width: 50%;
}
.btn-submit {
  margin-left: 20px;
}
</style>