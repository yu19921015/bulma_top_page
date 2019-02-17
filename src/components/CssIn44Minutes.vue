<template>
  <div class="css-in-44-min">
    <img class="fourtyfour" src="../assets/fortyfour-native.png" alt="">
    <span class="main">
      <div class="main-title has-text-white">CSS IN 44 MINUTES</div>
      <div class="main-message has-text-white">Learn how to build your own webpage from scratch!</div>
    </span>
    <button class="button is-success">Buy the book</button>
  </div>
</template>

<script>
  export default {
    name: "CssIn44Minutes"
  }
</script>

<style>
  .css-in-44-min {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-30deg, #4f38a4, #a244bc 50%, #4f38a4 50%);
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media (max-width: 599px) {
    .css-in-44-min {
      display: block;
      text-align: center;
    }

    .main {
      display: block;
      padding-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .fourtyfour {
    width: 125px;
  }

  @media (min-width: 600px) {
    .main {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  .main-title {
    font-size: 10px;
  }

  .main-message {
    font-size: 14px;
  }
</style>