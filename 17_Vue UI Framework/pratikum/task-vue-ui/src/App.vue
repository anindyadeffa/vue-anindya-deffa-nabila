<template>
  <v-app id="App">
    <v-app-bar
      color="blue darken-3"
      dark
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Berita</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, index) in CategoryItems" :key=index @click="kategori(item)">
            <v-list-item-title> {{ item }} </v-list-item-title>
          </v-list-item>

          <!-- <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      CategoryItems: ['general', 'business', 'sport', 'entertainment', 'health', 'science', 'technology'],
      drawer: false,
    }
  },
  methods: {
    category(param) {
      return this.$store.dispatch('categoryListNews', param);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
