<template>
  <div id="grid-system" class="section container">
    <h3 class="grid-title title is-3">
      <strong>
        The <span class="has-text-primary">simplest</span> grid system
      </strong>
    </h3>
    <h4 class="grid-explanation subtitle is-4">
      Just add columns, they will resize themselves
    </h4>

    <div class="message is-warning is-hidden-tablet">
      <p class="message-header">Better on desktop</p>
      <p class="message-body">
        This interactive tool works better on largest screens!
        That's because Bulma columns are
        <strong>vertical by default</strong>
        . I recommend revisiting this page later when you're on desktop. 😉
      </p>
    </div>

    <div class="columns">
      <div class="column">
        <div class="notification is-primary has-text-centered">
          <p class="title">1</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-primary has-text-centered">
          <p class="title">2</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-primary has-text-centered">
          <p class="title">3</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-primary has-text-centered">
          <p class="title">4</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-primary has-text-centered">
          <p class="title">5</p>
        </div>
      </div>
    </div>

    <div class="try-image is-hidden-mobile">
      <img src="https://bulma.io/images/drawing/try-it-out.png" alt="">
    </div>

    <div class="column-tools">
      <div class="column-tool try-area">
        <div class="buttons button-area">
          <a class="button is-large is-link">
            <strong>Add Column</strong>
          </a>
          <a class="button is-large is-light">
            <strong>Remove</strong>
          </a>
        </div>
      </div>

      <div class="column-tool">
        <div class="markup">
          <span class="code-copy">Copy</span><br>

          <span class="has-text-link">&lt;div</span>
          <span class="has-text-warning">&nbsp;class=</span>
          <span class="has-text-success">"columns"</span>
          <span class="has-text-link">&gt;</span><br>

          <span class="has-text-link">&nbsp;&nbsp;&lt;div</span>
          <span class="has-text-warning">&nbsp;class=</span>
          <span class="has-text-success">"column"</span>
          <span class="has-text-link">&gt;</span>
          <span>1</span>
          <span class="has-text-link">&lt;div&gt;</span><br>

          <span class="has-text-link">&nbsp;&nbsp;&lt;div</span>
          <span class="has-text-warning">&nbsp;class=</span>
          <span class="has-text-success">"column"</span>
          <span class="has-text-link">&gt;</span>
          <span>2</span>
          <span class="has-text-link">&lt;div&gt;</span><br>

          <span class="has-text-link">&nbsp;&nbsp;&lt;div</span>
          <span class="has-text-warning">&nbsp;class=</span>
          <span class="has-text-success">"column"</span>
          <span class="has-text-link">&gt;</span>
          <span>3</span>
          <span class="has-text-link">&lt;div&gt;</span><br>

          <span class="has-text-link">&nbsp;&nbsp;&lt;div</span>
          <span class="has-text-warning">&nbsp;class=</span>
          <span class="has-text-success">"column"</span>
          <span class="has-text-link">&gt;</span>
          <span>4</span>
          <span class="has-text-link">&lt;div&gt;</span><br>

          <span class="has-text-link">&nbsp;&nbsp;&lt;div</span>
          <span class="has-text-warning">&nbsp;class=</span>
          <span class="has-text-success">"column"</span>
          <span class="has-text-link">&gt;</span>
          <span>5</span>
          <span class="has-text-link">&lt;div&gt;</span><br>

          <span class="has-text-link">&lt;div&gt;</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "GridSystem"
  }
</script>

<style>
  .grid-title {
    text-align: center;
  }

  .grid-explanation {
    text-align: center;
  }

  .grid-explanation.subtitle {
    color: #b5b5b5;
  }

  @media (min-width: 769px) {
    .column-tools {
      display: flex;
      align-items: flex-start;
    }
  }

  .column-tool {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 769px) {
    .column-tool {
      width: 50%;
    }
  }

  .column-tool.try-area .buttons {
    justify-content: center;
  }

  .button-area {
    padding-top: 60px;
  }

  @media (max-width: 768px) {
    .button-area {
      padding-bottom: 60px;
    }
  }

  .try-image {
    padding-top: 60px;
    width: 150px;
    height: 60px;
  }

  @media (min-width: 1472px) {
    .try-image {
      margin-left: 60px;
    }
  }

  .markup {
    position: relative;
    width: 100%;
    /*height: 50%;*/
    background: #f5f5f5;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  .code-copy {
    cursor: pointer;
    position: absolute;
    padding: 3px 6px;
    font-size: small;
    right: 0.25rem;
    top: 0.25rem;
  }

  .code-copy:hover {
    background: #ffdd57;
  }
</style>