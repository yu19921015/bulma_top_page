<template>
  <div class="support-bulma">
    <div class="section">
      <div class="container">
        <div class="has-text-centered">
          <div class="title is-1">
            <span><strong>Supportaaa</strong> Bulma 😃</span>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="sponsor">
            <div class="column">
              <div class="has-text-centered">
                <div class="subtitle">
                  <span><strong>One-time</strong> donation</span>
                </div>
                <img src="../assets/paypal-donate.png" alt="" class="paypal">
              </div>
            </div>
          </div>
          <div class="sponsor">
            <div class="column center-column">
              <div class="has-text-centered">
                <div class="subtitle">
                  <span>Visit our <strong>Sponsor</strong></span>
                </div>
                <img src="../assets/yakaz.png" alt="" class="yakaz">
              </div>
            </div>
          </div>
          <div class="sponsor">
            <div class="column">
              <div class="has-text-centered">
                <div class="subtitle">
                  <span><strong>Monthly</strong> donation</span>
                </div>
                <img src="../assets/become-a-patron.png" alt="" class="patron">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SupportBulma"
  }
</script>

<style>
  .support-bulma .paypal {
    height: 30px;
  }

  .support-bulma .yakaz {
    margin-top: -.7rem;
    height: 50px;
  }

  .support-bulma .patron {
    height: 30px;
  }

  .sponsor {
    width: 240px;
  }

  .center-column {
    margin-top: 0.5rem;
  }
</style>