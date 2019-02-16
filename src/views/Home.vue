<template>
  <div class="home">
    <Navigation></Navigation>
    <Introduction></Introduction>
    <Sponsors></Sponsors>
    <GridSystem></GridSystem>
    <LargeCommunity></LargeCommunity>
    <EasyToLearn></EasyToLearn>
    <QuickToCustomize></QuickToCustomize>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navigation from '@/components/Navigation.vue'
  import Introduction from '@/components/Introduction.vue'
  import Sponsors from '@/components/Sponsors.vue'
  import GridSystem from '@/components/GridSystem.vue'
  import LargeCommunity from '@/components/LargeCommunity.vue'
  import EasyToLearn from '@/components/EasyToLearn.vue'
  import QuickToCustomize from '@/components/QuickToCustomize.vue'

  export default {
    name: 'home',
    components: {
      Navigation,
      Introduction,
      Sponsors,
      GridSystem,
      LargeCommunity,
      EasyToLearn,
      QuickToCustomize
    }
  }
</script>
