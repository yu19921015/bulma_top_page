<template>
  <div class="home">
    <Navigation></Navigation>
    <Introduction></Introduction>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Navigation from '@/components/Navigation.vue'
    import Introduction from '@/components/Introduction.vue'

    export default {
        name: 'home',
        components: {
            Navigation,
            Introduction
        }
    }
</script>
