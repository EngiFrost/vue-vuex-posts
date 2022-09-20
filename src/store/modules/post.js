export default {
  actions: {
    async fetchPosts(context, limit = 3) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=' + limit)
      const posts = await response.json()
      context.commit('updatePosts', posts) // NOTE: here we call a mutation!
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    postsCount(state) {
      return state.posts.length
    }
  },
}