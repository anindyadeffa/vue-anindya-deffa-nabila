<template>
  <div class="list-detail">
    <router-link to="/" tag="button">Kembali</router-link>
    <router-view/>
    
    <h1>This is a list detail page</h1>

    <!-- <p>Desctiption : {{ currentDesc }}</p> -->
  </div>
</template>

<script>
export default {
  // computed: {
  //   currentDesc() {
  //     return this.$store.state.desc;
  //   },
  // },
};
</script>