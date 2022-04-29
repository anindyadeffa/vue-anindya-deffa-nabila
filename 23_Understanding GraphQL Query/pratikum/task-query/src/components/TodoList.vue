<template>
    <div class="Todo">
      <div class="form">
        <input type="text" v-model= "search" placeholder="todo-search" >
      </div>

      <hr>

      <ApolloQuery 
      :query="search!=''?(gql => gql`
        query MyQuery($id: Int!) {
          todoList_by_pk(id: $id) {
            message
            id
          }
        }
      `) : (gql =>gql`query list{
          todoList{
            message
            id
          }
        }`)"
      
      :variables="searchComputed"
      >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading ...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred
          {{ error }}
        </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <div v-if="data.todoList_by_pk">{{ data.todoList_by_pk.message }}</div>
          <div v-else-if="data.todoList_by_pk == null && !data.todoList">{{ "Belum ada List To Do" }}</div>
          <div v-if="data.todoList">
            <div v-for="todo in data.todoList" :key="todo.id">
              {{ todo.message }}
            </div>
          </div>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result ...</div>
      </template>
    </ApolloQuery>

      <!-- <div v-for="todo in todoListComputed" :key="todo.id">
        {{ todo.message }}
      </div> -->

    </div>
</template>

<script>
// import gql from 'graphql-tag'

export default {
  // apollo:{
  //   todoList_by_pk:{
  //     query: gql`query MyQuery4($id: Int!) {
  //       todoList_by_pk(id: $id) {
  //         message
  //       }
  //     }`,

  //     variables() {
  //       return {id: this.search}
  //     },
      
  //     update(data){
  //       return data
  //     }
  //   },
    
  //   todoList: gql`query list{
  //     todoList{
  //       message
  //     }
  //   }`,
  // },
  
  data: () => ({
    search: 1,
    todoList: {},
  }),

  computed:{
    todoListComputed(){
      
      console.log(this.todoList_by_pk, "apa");
      if(this.search == "" || this.todoList_by_pk == null){
        return this.todoList;
      }
        return this.todoList_by_pk;
    },
    searchComputed(){
      console.log("Search computed :", this.search);
      if(this.search !== ""){
        return {id: this.search};
      }
      return {};
    }
  },
}
</script>

<style scoped>
</style>