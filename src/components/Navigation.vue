<template>
  <nav class="navbar is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        <a class="navbar-item is-hidden-desktop">
            <span class="icon" style="color: #333;">
              <i class="fab fa-lg fa-github-alt"></i>
            </span>
        </a>
        <a class="navbar-item is-hidden-desktop">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-lg fa-twitter"></i>
            </span>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navMenuMore" @click="showNav=!showNav" :class="{'is-active': showNav}">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div id="navMenuMore" class="navbar-menu"  :class="{'is-active': showNav}">
        <div class="navbar-start">
          <a class="navbar-item">
            <span class="icon has-text-primary">
              <i class="fas fa-book"/>
            </span>
            <span class="is-hidden-touch is-hidden-widescreen">
              Docs
            </span>
            <span class="is-hidden-desktop-only">
              Documentation
            </span>
          </a>

          <a class="navbar-item">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"/>
            </span>
            <span>
              Videos
            </span>
          </a>

          <a class="navbar-item">
            <span class="icon has-text-rss">
              <i class="fas fa-rss"/>
            </span>
            <span>
              Blog
            </span>
          </a>

          <a class="navbar-item">
            <span class="icon has-text-star">
              <i class="fas fa-star"/>
            </span>
            <span>
              Expo
            </span>
          </a>

          <a class="navbar-item">
            <span class="icon has-text-danger">
              <i class="fas fa-heart"/>
            </span>
            <span>
              Love
            </span>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div id="moreDropdown" class="navbar-dropdown">
              <a class="navbar-item">
                <span>
                  <span class="icon has-text-success">
                    <i class="fas fa-rocket"></i>
                  </span>
                  <strong>Bulma Start</strong>
                  <br>
                  <div class="dropdown-text">
                    A tiny nom package<br>
                    to get started
                  </div>
                </span>
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                <span>
                  <span class="icon has-text-primary">
                    <i class="fas fa-certificate"></i>
                  </span>
                  <strong>Made with Bulma</strong>
                  <br>
                  <div class="dropdown-text">
                    The official community<br>
                    badge
                  </div>
                </span>
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                <span>
                  <span class="icon has-text-bootstrap">
                    <i class="fas fa-exchange-alt"></i>
                  </span>
                  <strong>Coming from Bootstrap</strong>
                  <br>
                  <div class="dropdown-text">
                    See how Bulma is an<br>
                    alternative to Bootstrap
                  </div>
                </span>
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                <span>
                  <span class="icon has-text-patreon">
                    <i class="fas fa-patreon"></i>
                  </span>
                  <strong>Patreon backers</strong>
                  <br>
                  <div class="dropdown-text">
                    Everyone who is<br>
                    supporting Bulma
                  </div>
                </span>
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                <span>
                  <span class="icon has-text-orange">
                    <i class="fas fa-plug"></i>
                  </span>
                  <strong>Bulma extensions</strong>
                  <br>
                  <div class="dropdown-text">
                    Side projects to enhance<br>
                    Bulma
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <a class="navbar-item is-hidden-touch is-hidden-desktop-only">
            <span class="icon" style="color: #333;">
              <i class="fab fa-lg fa-github-alt"></i>
            </span>
          </a>
          <a class="navbar-item is-hidden-touch is-hidden-desktop-only">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-lg fa-twitter"></i>
            </span>
          </a>
          <div class="navbar-item">
            <div class="field is-grouped is-grouped-multiline">
              <p class="control">
                <a class="button is-orange">
                <span class="icon bd-has-text-patreon">
                  <i class="fab fa-patreon"/>
                </span>
                  <div class="become-a-patreon">BECOME A PATRON</div>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary">
                  <strong>Download</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                showNav: false
            }
        }
    }
</script>

<style>
  .button.is-orange {
    background-color: #f26522;
    border-color: transparent;
    color: #fff;
  }

  .button.is-orange:hover, .button.is-orange.is-hovered {
    background-color: #f26522;
    border-color: transparent;
    color: #fff;
  }

  .become-a-patreon {
    font-size: 0.75rem;
  }

  .has-text-primary {
    color: #00d1b2;
  }

  .has-text-success {
    color: #23d160;
  }

  .has-text-rss {
    color: #f26522;
  }

  .has-text-star {
    color: #ffd257;
  }

  .has-text-danger {
    color: #ff3860;
  }

  has-text-bootstrap {
    color: #6f5499;
  }

  .has-text-patreon {
    color: #f26522;
  }

  .has-text-orange {
    color: #ff470f;
  }

  /*@media*/
  /*#moreDropdown {*/
    /*width: 16em;*/
  /*}*/

  .dropdown-text {
    padding: 0 0 0 1.5rem;
  }

</style>