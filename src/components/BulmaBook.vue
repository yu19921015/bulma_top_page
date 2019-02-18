<template>
  <div class="bulma-book has-background-primary">
    <div class="columns">
      <div class="column is-two-fifths">
        <div class="img-book">
          <img src="../assets/book-cover.png" alt="" class="img-bulma-book">
        </div>
      </div>
      <div class="column">
        <div class="main-area has-background-white">
          <div class="title-area">
            <div class="title">
              <strong>The official Bulma book! 😲</strong>
            </div>
            <div class="subtitle is-size-6">
              by Jeremt Thomas, creator of Bulma, Oleksii Potiekhin, Mikko Lauhakari, Aslam Shah and David Berning
            </div>
          </div>

          <div class="description is-size-5">
          <span>A <strong>step-by-step guide</strong> that teaches you how to build
          a <strong>web interface from scratch</strong> using Bulma.</span>
          </div>

          <div class="tags">
            Formats available:&nbsp;&nbsp;
            <span class="tag"><strong class="has-text-danger">PDF</strong></span>
            <span class="tag"><strong class="has-text-link">Epub</strong></span>
            <span class="tag"><strong class="has-text-success">Mobi</strong></span>
            or
            <span class="tag"><strong class="has-text-warning">Kindle</strong></span>
          </div>

          <div class="hero-buttons">
            <div class="button is-success bleeding-button">
              <div class="has-text-black">
                <div class="version">PDF + Epub + Mobi</div>
                <div><strong>Buy</strong> from</div>
                <img src="../assets/bleedingedge-type.png" alt="" class="bleedingedge">
              </div>
            </div>
            <div class="button is-warning amazon-button">
              <div>
                <div class="version">Kindle version</div>
                <div><strong>Buy</strong> from</div>
                <img src="../assets/amazon-logo.png" alt="" class="amazon">
              </div>
            </div>
          </div>

          <div class="foot">
            <br>
            <span>Or <a>download a free sample</a> !</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BulmaBook"
  }
</script>

<style>
  .img-bulma-book {
    margin-top: 30%;
    margin-left: 20%
  }

  .main-area {
    padding: 3rem 3rem;
    margin-top: 5rem;
    margin-right: 10rem;
    width: 500px;
  }

  @media (min-width: 769px) {
    .bulma-book .bleeding-button {
      width: 200px;
      height: 100px;
    }

    .bulma-book .amazon-button {
      width: 200px;
      height: 100px;
    }
  }

  .amazon {
    margin-top: 10px;
    margin-bottom: -5px;
    width: 70px;
  }

  .tags, .version {
    font-size: 12px;
  }

  .tag {
    font-size: 14px;
    padding-top: 5px;
  }

  @media (min-width: 769px) and (max-width: 900px) {
    .img-bulma-book {
      margin-top: 50%;
      margin-left: 10%;
      width: 300px;
    }

    .main-area {
      width: 400px;
    }
  }

  @media (max-width: 768px) {
    .img-bulma-book {
      margin: 0;
    }

    .img-book {
      margin-top: 3rem;
      position: relative;
      text-align: center;
    }

    .main-area {
      width: 80%;
      margin: 0 0 0 10%;
    }

    .bulma-book .bleeding-button, .bulma-book .amazon-button {
      width: 100%;
      height: 100px;
    }
  }
</style>