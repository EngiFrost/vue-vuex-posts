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
    },
    createPost(state, post) {
      state.posts.unshift(post)
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    postsCount(state, getters) {
      return getters.validPosts.length
    },
    validPosts(state) {
      return state.posts.filter(post => post.title && post.body)
    }
  },
}