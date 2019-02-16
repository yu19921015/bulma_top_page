<template>
  <div class="much-more">
    <div class="section is-large">
      <div class="container">
        <img class="join-us is-hidden-mobile" src="../assets/joinus.png" alt="">
        <div class="has-text-centered">
          <div class="title is-size-3">
            <strong>And so <span class="has-text-primary">much more</span></strong>
          </div>
          <div class="subtitle has-text-grey-light is-size-4">
            <span>Join more than <strong class="has-text-grey-light">150,000</strong> developers</span>
          </div>
          <div class="hero-buttons button-area">
            <button class="button is-large is-primary">
            <span class="icon">
              <i class="fas fa-book"/>
            </span>
              <span>Get <strong>started</strong></span>
            </button>
            <button class="button is-large is-black">
            <span class="icon">
              <i class="fab fa-github"/>
            </span>
              <span>Contribute</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MuchMore"
  }
</script>

<style>
  .join-us {
    position: relative;
    left: 60%;
  }

  .much-more .button-area {
    padding-top: 2rem;
  }

  @media (max-width: 768px) {
    .much-more .button {
      width: 100%;
    }
  }
</style>