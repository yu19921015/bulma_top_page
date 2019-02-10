<template>
  <div class="home">
    <Navigation></Navigation>
    <Introduction></Introduction>
    <Sponsors></Sponsors>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Navigation from '@/components/Navigation.vue'
    import Introduction from '@/components/Introduction.vue'
    import Sponsors from '@/components/Sponsors.vue'

    export default {
        name: 'home',
        components: {
            Navigation,
            Introduction,
            Sponsors
        }
    }
</script>
