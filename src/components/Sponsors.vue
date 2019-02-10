<template>
  <div class="section">
    <div class="container">
      <div class="partners">

        <div class="partners-sponsors">
          <p>Sponsors</p>
          <div class="sponsors">
            <div class="sponsor">
              <a href="https://themeisle.com/" target="_blank">
                <img src="https://bulma.io/images/sponsors/themeisle.png" alt="">
              </a>
            </div>
            <div class="sponsor">
              <a href="http://tooltwist.com/" target="_blank">
                <img class="tooltwist" src="https://bulma.io/images/sponsors/tooltwist.png" alt="">
              </a>
            </div>
            <div class="sponsor">
              <a href="https://www.dontpayfull.com/" target="_blank">
                <img src="https://bulma.io/images/sponsors/dontpayfull.png" alt="">
              </a>
            </div>
            <div class="sponsor">
              <a href="https://devsquad.com/" target="_blank">
                <img src="https://bulma.io/images/sponsors/devsquad.png" alt="">
              </a>
            </div>
            <div class="sponsor">
              <a href="https://www.hebergeurweb.ca/" target="_blank">
                <img src="https://bulma.io/images/sponsors/hebergeurweb.png" alt="">
              </a>
            </div>
          </div>
        </div>

        <div class="partners-carbon">
          <p>Ads via Carbon</p>
          <div class="carbon">
            <a href="//srv.carbonads.net/ads/click/x/GTND42QWF6SDK53ICYA4YKQMCEAI523MCEADEZ3JCWBDL2QUCEBD42QKC6BIV5QNF67DTK3EHJNCLSIZ?segment=placement:bulmaio;"
               target="_blank" class="carbon-img">
              <img src="https://cdn4.buysellads.net/uu/1/41629/1547651715-slack-carbon-white_2x.png" alt="">
            </a>
            <a href="//srv.carbonads.net/ads/click/x/GTND42QWF6SDK53ICYA4YKQMCEAI523MCEADEZ3JCWBDL2QUCEBD42QKC6BIV5QNF67DTK3EHJNCLSIZ?segment=placement:bulmaio;"
               target="_blank" class="carbon-text">
              <span>Bring your team together with Slack, the collaboration hub for work.</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Sponsors"
    }
</script>

<style>
  @media (min-width: 769px) {
    .partners {
      align-items: flex-start;
      display: flex;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .partners-sponsors {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .sponsors {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }

  .sponsor {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 1rem;
    min-height: 120px;
  }

  .tooltwist {
    height: 55px;
  }

  .carbon {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 300px;
    min-width: 280px;
    min-height: 120px;
    flex-grow: 1;
  }

  .carbon-img {
    float: left;
    width: 450px;
    padding: 0 15px 0 0;
  }

  .carbon-text {
    font-size: 14px;
  }
</style>