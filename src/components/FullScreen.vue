<template>
  <div class="fullscreen">
    <div class="hero is-light is-fullheight">
      <div class="hero-head">
        <div class="container has-text-centered">
          <div class="has-text-grey-light">This is always at the top</div>
        </div>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="title">
            <strong><span class="has-text-primary">Fullscreen</span> vertical centering</strong>
          </div>
          <div class="subtitle has-text-grey-light">
            Include any content you want, it's always centered
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <div class="has-text-grey-light">And this at the bottom</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FullScreen"
  }
</script>

<style>
  .fullscreen {
    margin-top: 10rem;
  }
</style>