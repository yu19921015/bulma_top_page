<template>
  <div class="customized">
    <div class="subtitle has-text-grey-light is-size-6">After</div>
    <div class="after-components">
      <div class="title">Bulma</div>
      <div class="subtitle has-text-grey-light">Modern Css framework based on <span class="has-text-danger">Flexbox</span>
      </div>
      <div class="field">
        <div class="control">
          <input class="input smoke" type="text" placeholder="Input">
        </div>
      </div>
      <div class="field">
        <div class="control">
            <div class="select is-danger smoke">
              <select>
                <option>Select dropdown</option>
              </select>
            </div>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-purple">Primary</button>
        <button class="button is-pink">Link</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CustomizedBulmaDemo"
  }
</script>

<style>
  .customized {
    margin-top: 2rem;
  }

  .after-components {
    margin-top: -10px;
    margin-left: 20px;
  }

  .input.smoke {
    background-color: lightgray;
  }

  .button.is-purple {
    background-color: #8a4d76;
    border-color: transparent;
    color: #fff;
  }

  .button.is-purple:hover {
    background-color: #8a3f76;
    border-color: transparent;
    color: #fff;
  }

  .button.is-purple:focus {
    border-color: transparent;
    color: #fff;
  }

  .button.is-purple:active {
    background-color: #8a3076;
    border-color: transparent;
    color: #fff;
  }

  .button.is-pink {
    background-color: #fa7c91;
    border-color: transparent;
    color: #fff;
  }

  .button.is-pink:hover {
    background-color: #fa6f91;
    border-color: transparent;
    color: #fff;
  }

  .button.is-pink:focus {
    border-color: transparent;
    color: #fff;
  }

  .button.is-pink:active {
    background-color: #fa6191;
    border-color: transparent;
    color: #fff;
  }
</style>>