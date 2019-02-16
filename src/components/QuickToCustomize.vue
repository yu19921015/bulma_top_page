<template>
  <div class="section">
    <div class="container">
      <div class="title-area">
        <div class="has-text-centered">
          <div class="title">
            <p><strong>So <span class="has-text-primary">quick</span> to customize</strong></p>
          </div>
          <div class="subtitle"><p>Simply set your own Sass variables before importing Bulma</p></div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="markup">
            <span class="code-copy">Copy</span><br>

            <span class="has-text-grey-light">// Import a Google Font</span><br>
            <span class="has-text-warning">@import</span>
            <span class="has-text-primary">&nbsp;url('https://fonts.googleapis.com/css?</span><br>
            <span class="has-text-primary">family=Nunito:400,700')</span><br>
            <br>

            <span class="has-text-grey-light">// Set your brands colors</span><br>
            <span class="has-text-link">$purple:</span>
            <span class="has-text-primary">&nbsp;#8A4D76</span><br>
            <span class="has-text-link">$pink:</span>
            <span class="has-text-primary">&nbsp;#FA7C91</span><br>
            <span class="has-text-link">$brown:</span>
            <span class="has-text-primary">&nbsp;#757763</span><br>
            <span class="has-text-link">$beige-light:</span>
            <span class="has-text-primary">&nbsp;#D0D1CD</span><br>
            <span class="has-text-link">$beige-lighter:</span>
            <span class="has-text-primary">&nbsp;#EFF0EB</span><br>
            <br>

            <span class="has-text-grey-light">// Update Bulma's global variables</span><br>
            <span class="has-text-link">$family-sans-serif:</span>
            <span class="has-text-primary">&nbsp;"Nunito",</span>
            <span>&nbsp;san-serif;</span><br>
            <span class="has-text-link">$grey-dark: $brown;</span><br>
            <span class="has-text-link">$grey-light: $beige-light;</span><br>
            <span class="has-text-link">$primary: $purple;</span><br>
            <span class="has-text-link">$link: $pink;</span><br>
            <br>

            <span class="has-text-grey-light">// Update some of Bulma's component variables</span><br>
            <span class="has-text-link">$control-border-width:</span>
            <span class="has-text-primary">&nbsp;2px;</span><br>
            <span class="has-text-link">$input-baclground-color: $beige-lighter;</span><br>
            <span class="has-text-link">$input-border-color:</span>
            <span>&nbsp;transparent;</span><br>
            <span class="has-text-link">$input-shadow:</span>
            <span>&nbsp;none;</span><br>
            <br>

            <span class="has-text-grey-light">// Import thr rest of Bulma</span><br>
            <span class="has-text-warning">@import</span>
            <span class="has-text-primary">&nbsp;"../path/to/bulma";</span><br>

            <img class="customizedin16lines is-hidden-mobile" src="../assets/customizedin16lines.png" alt="">
          </div>
        </div>
        <div class="column">
          <NonCustomizedBulmaDemo class="demo"></NonCustomizedBulmaDemo>
          <CustomizedBulmaDemo class="demo"></CustomizedBulmaDemo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NonCustomizedBulmaDemo from './NonCustomizedBulmaDemo'
  import CustomizedBulmaDemo from './CustomizedBulmaDemo'

  export default {
    name: "QuickToCustomize",
    components: {
      NonCustomizedBulmaDemo,
      CustomizedBulmaDemo
    },
    component: {
      NonCustomizedBulmaDemo,
      CustomizedBulmaDemo
    }
  }
</script>

<style>
  .title-area {
    margin-bottom: 3rem;
  }

  .title-area .subtitle {
    color: #b5b5b5;
  }

  .markup {
    font-size: 14px;
    position: relative;
  }

  .demo {
    height: 50%;
  }

  .customizedin16lines {
    position: absolute;
    bottom: -7rem;
    left: 15rem;
  }
</style>