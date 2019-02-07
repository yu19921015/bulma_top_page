<template>
  <div class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns">

          <div class="column">
            <div class="content">
              <h1 class="intro-title">
                <strong>Bulma</strong>
                <span> is a free, open source CSS framework based on </span>
                <strong>Flexbox</strong>
                <span> and used by more than </span>
                <strong>100,000</strong>
                <span> developers.</span>
              </h1>

              <div>
                <iframe src="https://ghbtns.com/github-btn.html?user=jgthms&repo=bulma&type=star&count=true&size=large"
                        frameborder="0" width="160px" height="30px"></iframe>
                <a href="https://www.npmjs.com/package/bulma" target="_blank">
                  <img src="https://img.shields.io/npm/dm/bulma.svg" alt="" width="183px" height="30px">
                </a>
              </div>

              <pre class="intro-npm">
                <code>npm install bulma</code>
                <code class="intro-npm-copy">copy</code>
              </pre>

              <div class="buttons">
                <div class="button is-primary is-large">
                  <strong>Download</strong>
                  <span>&nbsp;v0.7.2</span>
                </div>
                <div class="button is-light is-large">
                  <span>View&nbsp;</span>
                  <strong>docs</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="image">
              <img src="../assets/whyyoushoulduseBulma.png" alt="">
            </div>
            <p class="author">
              <span>Video by Vue Mastery (↑ only picture)</span>
            </p>
          </div>
        </div>

        <div class="columns">
          <div class="column phrase">
            <p class="theme">
              <strong>100% Responsive</strong>
            </p>
            <p>
              <span>Designed for <strong>mobile</strong> first</span>
            </p>
            <div class="focus-icon">
            <span class="icon-image has-text-purple">
              <i class="fas fa-mobile-alt fa-lg"/>
            </span>
            <span class="icon-image has-text-danger">
              <i class="fas fa-tablet-alt fa-2x"/>
            </span>
            <span class="has-text-orange">
              <i class="fas fa-desktop fa-3x"/>
            </span>
            </div>
          </div>

          <div class="column phrase">
            <p class="theme">
              <strong>Modular</strong>
            </p>
            <p>
              <span>Just import what you <strong>need</strong></span>
            </p>
            <div class="focus-icon">
              <span class="icon-image has-text-success">
                <i class="fas fa-cubes fa-4x"/>
              </span>
            </div>
          </div>

          <div class="column phrase">
            <p class="theme">
              <strong>Modern</strong>
            </p>
            <p>
              <span>Built with <strong>Flexbox</strong></span>
            </p>
            <div class="focus-icon">
              <span class="icon-image has-text-link">
                <i class="fab fa-css3 fa-3x"/>
              </span>
            </div>
          </div>

          <div class="column phrase">
            <p class="theme">
              <strong>Free</strong>
            </p>
            <p>
              <span>Open source on <strong>GitHub</strong></span>
            </p>
            <div class="focus-icon">
              <span class="icon-image has-text-black">
                <i class="fab fa-github-alt fa-3x"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Introduction",
        data() {
            return {
                clipboard: {}
            }
        }
    }
</script>

<style>
  @media (min-width: 1088px) {
    .intro-title {
      width: 440px;
    }

    .intro-npm {
      width: 440px;
    }
  }

  .intro-title strong {
    font-weight: 600;
  }

  .intro-title span {
    font-weight: 300;
  }

  .intro-npm {
    display: flex;
    justify-content: flex-end;
    background: #242424;
    color: white;
  }

  .intro-npm :first-child {
    margin-right: auto;
  }

  .intro-npm .intro-npm-copy {
    cursor: pointer;
    color: #ffdd57;

  }

  .intro-npm .intro-npm-copy:hover {
    background: #ffdd57;
    color: #242424;
  }

  .content {
    margin-right: auto;
    margin-left: auto;
  }

  .author {
    margin-top: 20px;
    font-size: 0.75rem;
    text-align: center;
  }

  .columns .phrase {
    text-align: center;
  }

  .columns .phrase .theme {
    margin: 30px 0 0 0;
    font-size: 1.5rem;
  }

  .has-text-purple {
    color: #b86bff;
  }

  .has-text-orange {
    color: #ff470f
  }

  .focus-icon {
    margin: 15px 0 0 0;
    position: relative;
  }

  .icon-image {
    margin: 0 7px 0 0;
  }
</style>