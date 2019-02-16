<template>
  <div class="no-js-required">
    <div class="section container">
      <div class="columns">
        <div class="column is-three-fifths">
          <div class="title">
            No <span class="has-text-primary">JavaScript</span> required
          </div>
          <div class="subtitle has-text-grey-light">
            CSS only, so it integrates in any JS environment
          </div>
          <img class="frameworks" src="../assets/js-frameworks.png" alt="">
        </div>
        <div class="column">
          <div class="card opinion">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Robert Stuttaford</p>
                  <p class="subtitle is-6">@RobStuttaford</p>
                </div>
              </div>
              <div class="content">
                <a>@bulmaio</a>
                &nbsp;-- a CSS framework by <a>@jgthms</a> &nbsp;-- is lovely!
                No JS included, which means no JS opinions included!
                <br>
                <time datetime="2017-5-6">4:53 PM - 6 May 2017</time>
                <ul class="tweet-actions">
                  <li class="icon tweet-action">
                    <i class="far fa-comment fa-lg"/>
                  </li>
                  <li class="icon tweet-action">
                    <i class="fas fa-retweet fa-lg"/>
                    <span class="action-count">23</span>
                  </li>
                  <li class="icon tweet-action">
                    <i class="far fa-heart fa-lg"/>
                    <span class="action-count">63</span>
                  </li>
                </ul>
              </div>
            </div>
            <img class="opinion-free is-hidden-mobile" src="../assets/opinionfree.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NoJsRequired"
  }
</script>

<style>
  .no-js-required {
    margin-top: 10rem;
  }

  .no-js-required .opinion {
    background-color: whitesmoke;
    position: relative;
    box-shadow: none;
  }

  .opinion-free {
    position: absolute;
    left: -10rem;
    bottom: -5rem;
  }
</style>