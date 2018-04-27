import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    load(context, subreddit) {
      const url = `https://www.reddit.com/r/${subreddit}/.json`;
      fetch(url)
        .then(response => response.json())
        .then((result) => {
          result.data.children.forEach(child => {
            child.showImage = false;
          });
          context.commit('setPosts', result.data.children);
        });
    },
  }
});
