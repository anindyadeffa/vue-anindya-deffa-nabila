<template>
  <div>
    <ol>
      <TodoListItem v-for="(Todo, index) in listTodo" :key="index" :todo="Todo" :index="index"
        @edit-list-baru="editTodoTask"
        @hapus-todo="hapusTodoTask"
      />
      <router-view/>
    </ol>

    <input class="form-add" type="text" v-model="Todo" />
    <button class="btn-submit" @click="submitTodo()">Tambahkan</button>
  </div>
  
</template>
<script>
import TodoListItem from "@/components/TodoListItem.vue";

export default {
  name: "TodoListWithComponent",
  components: {
    TodoListItem,
  },
  data() {
    return {
      Todo: "",
    };
  },
  computed: {
    listTodo() {
      return this.$store.state.listTodo;
    },
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
    // submitTodo() {
    //   this.$store.dispatch("addTodo", this.Todo);
    //   this.Todo = "";
    // },
    // hapusTodoTask(index) {
    //   this.$store.dispatch("deleteTodo", index);
    // },
    // editTodoTask(index, value) {
    //   this.$store.dispatch("editTodo", index);
    //   this.Todo = value;
    // },
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