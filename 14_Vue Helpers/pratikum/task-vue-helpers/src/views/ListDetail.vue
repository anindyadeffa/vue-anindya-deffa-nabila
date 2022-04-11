<template>
  <div class="list-detail">
    <router-link to="/" tag="button">Kembali</router-link>
    <h1> {{ todoDetail.todolist }} </h1>
    <h1>This is a list detail page</h1>
    <router-view/>

    <p>Description : {{ currentDesc }}</p>
    <button>Ubah Deskripsi</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "ListDetail",
  data() {
    return {
      todoDetail: [],
    }
  },
  computed: {
    currentDesc() {
      return this.$store.state.desc;
    },
  },
};
</script>