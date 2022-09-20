<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">
    <button type="submit">Create Post</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: '',
      body: '',
    }
  },
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
        id: Date.now(),
        title: this.title,
        body: this.body
      })
      this.title = ''
      this.body = ''
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
}
</style>