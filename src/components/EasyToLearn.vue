<template>
  <div class="container section">
    <div class="easy-to-learn columns">
      <div class="crazy-area column is-6">
        <div class="title">
          <p><strong>So <span class="has-text-primary">easy </span>to learn</strong></p>
        </div>
        <div class="subtitle">
          <p>Get a design started within minutes</p>
        </div>
        <div class="card tweet">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Francisco Cruz</p>
                <p class="subtitle is-6">@atFranCruz</p>
              </div>
            </div>
            <div class="content">
              So, I was making an exam and in a matter of 30 minutes
              I had my structure complete with responsive,
              Bulma is crazy. Thanks<a>@jgthms</a>.
              <br>
              <time datetime="2017-5-28">3:01 PM - 28 May 2017</time>
              <ul class="tweet-actions">
                <li class="icon tweet-action">
                  <i class="far fa-comment fa-lg"/>
                </li>
                <li class="icon tweet-action">
                  <i class="fas fa-retweet fa-lg"/>
                </li>
                <li class="icon tweet-action">
                  <i class="far fa-heart fa-lg"/>
                  <span class="action-count">8</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img class="crazy is-hidden-mobile" src="../assets/crazy.png" alt="">
      </div>
      <div class="button-area column is-offset-1">
        <div class="button-class">
          <span class="button-class has-text-danger has-background-light">button</span>
        </div>
        <div class="button">Button</div>
        <div class="button-class">
          <span class="button-class has-text-danger has-background-light">button is-primary</span>
        </div>
        <div class="button is-primary">Button</div>
        <div class="button-class">
          <span class="button-class has-text-danger has-background-light">button is-primary is-large</span>
        </div>
        <div class="button is-primary is-large">Button</div>
        <div class="button-class">
          <span class="has-text-danger has-background-light">button is-primary is-large is-loading</span>
        </div>
        <div class="button is-primary is-large is-loading">Button</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EasyToLearn"
  }
</script>

<style>
  .easy-to-learn {
    margin-top: 60px;
  }

  .crazy-area {
    position: relative;
  }

  .crazy-area .subtitle {
    color: #b5b5b5;
  }

  .card.tweet {
    margin-top: 1.5rem;
    box-shadow: none;
  }

  .tweet-actions {
    display: flex;
    align-items: center;
  }

  .tweet-action {
    margin-right: 1.75rem;
  }

  .action-count {
    padding-left: .25rem;
  }

  .crazy {
    position: absolute;
    bottom: 0rem;
    left: -1rem;
  }

  .button-class {
    margin-top: 20px;
    margin-bottom: 10px;
  }

</style>