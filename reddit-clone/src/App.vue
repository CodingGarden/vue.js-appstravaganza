<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">/r/{{$route.params.subreddit}}</a>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if(!this.$route.params.subreddit) {
      this.$router.push('/rarepuppers');
    }
  }
};
</script>

<style>
</style>
