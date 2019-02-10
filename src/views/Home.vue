<template>
  <div class="home">
    <Navigation></Navigation>
    <Introduction></Introduction>
    <Sponsors></Sponsors>
    <GridSystem></GridSystem>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navigation from '@/components/Navigation.vue'
  import Introduction from '@/components/Introduction.vue'
  import Sponsors from '@/components/Sponsors.vue'
  import GridSystem from '@/components/GridSystem.vue'

  export default {
    name: 'home',
    components: {
      Navigation,
      Introduction,
      Sponsors,
      GridSystem
    }
  }
</script>
