<template>
  <li>
    <label v-if="!editMode">
      {{ todo.todolist }}
    </label>
    <label v-if="editMode">
      <input v-model="inputEdited" />
    </label>

    <button class="btn-delete" @click="hapusList(index)">Hapus</button>
    <button class="btn-edit" v-if="!editMode" @click="editList">Edit</button>
    <button class="btn-edit" v-if="editMode" @click="editListBaru(index)">Update</button>
  </li>
</template>
<script>
export default {
  name: "TodoListItem",
  data() {
    return {
      inputEdit: "",
      inputEdited: "",
      editMode: false,
    };
  },
  mounted() {
    this.inputEdited = this.todo.todolist;
  },
  watch: {
    todo(value) {
      this.inputEdited = value.todolist;
    },
  },
  props: {
    todo: Object,
    index: Number,
  },
  methods: {
    hapusList(index) {
      this.$emit("hapus-todo", index);
    },
    editList(index) {
      this.$emit("editTodo", index);
      this.editMode = !this.editMode;
    },
    editListBaru(index) {
      this.$emit("edit-list-baru", index, this.inputEdited);
      this.editList();
    },
  },
};
</script>
<style scoped>
.btn-edit {
  margin: 10px 0 0 20px;
}
.btn-delete {
  margin: 0 0 0 20px;
}
</style>