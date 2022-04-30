<template>
  <div class="todoItem">
    <label v-if="!editMode">
        {{ data.message }}
    </label>
    <label v-if="editMode">
       <ApolloMutation
      :mutation="gql => gql`
        mutation MyMutation3($id: Int!, $message: String!) {
          update_todoList_by_pk(pk_columns: {id: $id}, _set: {message: $message}) {
            message
          }
        }
      `"
      :variables="{
        id: index,
        message: inputEdit
      }"
     
    >
      <template v-slot="{ mutate, error}">
      <!-- Error -->
      <div v-if="error" class="error apollo">An error occurred
        {{ error }}
      </div>

      <!-- Mutate -->
      <input v-model="inputEdit" />
      <button v-if="editMode" @click="mutate()  && editList()">Input Edit</button>
    </template>
    </ApolloMutation>
        
    </label>

    <ApolloMutation
      :mutation="gql => gql`
        mutation MyDelete($id: Int!) {
          delete_todoList_by_pk(id: $id) {
            message
            id
          }
        }
      `"
      :variables="{
        id: index
      }"

    >
      <template v-slot="{ mutate, error}">
      <!-- Error -->
      <div v-if="error" class="error apollo">An error occurred
        {{ error }}
      </div>

      <!-- Mutate -->
      <button @click="mutate()">Delete</button>
    </template>
    </ApolloMutation>
    
    <button v-if="!editMode" @click="editList">Edit</button>

  </div>
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
  props: {
    data: Object,
    index: Number,
  },
  methods: {
    hapusList(index) {
      this.$emit("hapus-todo", index);
    },

    editList() {
       this.editMode = !this.editMode;
    },

    editListBaru(index) {
      this.$emit("edit-list-baru", index, this.inputEdit);
      this.editList();
    },

  },
  computed:{
  
  }
};
</script>