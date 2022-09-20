<template>
  <div id="app">
    <div class="post" v-for="post in posts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
// TODO: convert to Composition API
export default {
  name: 'App',
  computed: {
    getAllPosts() {
      return this.$store.getters.getAllPosts
    }
  },
  async mounted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=3')
    const posts = await response.json()
    this.posts = posts
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
