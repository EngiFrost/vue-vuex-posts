# vue-vuex-posts

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Source
[Link](https://www.youtube.com/watch?v=c2SK1IlmYL8&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD)

### Notes
- Use getters in `computed` section to interact with store!
- To call a mutation use `context.commit('mutationName', data)`!
- To call store action in component use `this.$store.dispatch('actionName')`!
- To avoid an error do `app.mount('#app')` after all modules are connected!
- To reach some getter from the other use `getters: {name(state, getters)}`!!!
- To improve workflow use [Vue plugin for Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)!