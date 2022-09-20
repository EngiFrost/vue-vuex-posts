export default {
  actions: {},
  mutations: {},
  state: {
    posts: []
  },
  getters: {
    getAllPosts(state) {
      return state.posts
    }
  },
}