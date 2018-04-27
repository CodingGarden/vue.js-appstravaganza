<template>
  <div class="hello mt-3">
    <ul class="list-unstyled">
      <li v-for="post in posts" class="media m-3">
        <img v-if="post.data.thumbnail != 'self'" class="mr-3" :src="post.data.thumbnail">
        <div class="media-body">
          <h5 class="mt-0 mb-1"><a :href="createUrl(post.data.permalink)" target="_blank">{{post.data.title}}</a></h5>
          <p>
            <h3 class="text-danger">{{post.data.ups}} ⬆️</h3>
            <p>created {{formatDate(post.data.created_utc)}} ago by {{post.data.author}}</p>
            <span class="badge badge-pill badge-secondary">{{post.data.num_comments}} comments</span>
            <button
              v-if="isImage(post)"
              @click="post.showImage = !post.showImage"
              type="button"
              class="btn btn-primary">
              {{post.showImage ? 'Hide' : 'Show'}} Image
            </button>
            <div v-if="post.showImage">
              <img class="post-image" :src="post.data.url" alt="">
            </div>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {parse, distanceInWords} from 'date-fns';

export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
    };
  },
  watch: {
    ['$route.params.subreddit']() {
      this.load(this.$route.params.subreddit);
    }
  },
  mounted() {
    this.load(this.$route.params.subreddit);
  },
  methods: {
    load(subreddit) {
      const url = `https://www.reddit.com/r/${subreddit}/.json`;
      fetch(url)
        .then(response => response.json())
        .then((result) => {
          result.data.children.forEach(child => {
            child.showImage = false;
          });
          this.posts = result.data.children;
        });
    },
    formatDate(date) {
      return distanceInWords(parse(date * 1000), new Date());
    },
    createUrl(path) {
      return `https://www.reddit.com${path}`
    },
    isImage(post) {
      return post.data.url.match(/\.(jpg|png|jpeg|bpm)$/);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-image {
  width: 100%;
  height: auto;
}
</style>
