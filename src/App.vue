<template>
  <div id="app">
    <PostForm />
    <h1>Total posts count: {{postsCount}}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
// TODO: convert to Composition API
import { mapGetters, mapActions } from 'vuex'
import PostForm from './components/PostForm.vue'
export default {
  name: 'App',
  components: { PostForm },
  computed: mapGetters(['validPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    this.fetchPosts(5)
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
