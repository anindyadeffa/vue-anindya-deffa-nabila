<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <ol>
        <li v-for="(todo, index) in listTodo" :key="index">
          {{ todo }}
        </li>
    </ol>
    <input type="text" v-model="todo"/>
    <button @click="tambahkan()" model="add">Tambahkan</button>
    <div v-if="listTodo.length >= 4">Hebat!</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      message: 'Todo List!',
      todo: '',
      listTodo: []
    }
  },
  methods: {
    tambahkan(){
      this.error;
      if (this.todo === "") {
        // this.error.push('Input Data');
        // this.$alert("Data kosong");
      }
      else {
        this.listTodo.push(this.todo);
        this.todo = "";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
