<template>
  <div id="app">
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
// TODO: convert to Composition API
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts
  //   }
  // },
  computed: mapGetters(['allPosts']),
  async mounted() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
