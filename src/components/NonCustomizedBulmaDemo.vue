<template>
  <div class="non-customized">
    <div class="subtitle has-text-grey-light is-size-6">Before</div>
    <div class="before-components">
      <div class="title">Bulma</div>
      <div class="subtitle has-text-grey-light">Modern Css framework based on <span class="has-text-link">Flexbox</span>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Input">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-link">
            <select>
              <option>Select dropdown</option>
            </select>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-primary">Primary</button>
        <button class="button is-link">Link</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NonCustomizedBulmaDemo"
  }
</script>

<style>
  .before-components {
    margin-top: -10px;
    margin-left: 20px;
  }
</style>