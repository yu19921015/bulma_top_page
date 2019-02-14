<template>
  <div>
    <NonCustomizedBulmaDemo></NonCustomizedBulmaDemo>
    <CustomizedBulmaDemo></CustomizedBulmaDemo>
  </div>
</template>

<script>
  import NonCustomizedBulmaDemo from './NonCustomizedBulmaDemo'
  import CustomizedBulmaDemo from './CustomizedBulmaDemo'

  export default {
    name: "QuickToCustomize",
    components: {
      NonCustomizedBulmaDemo,
      CustomizedBulmaDemo
    },
    component: {
      NonCustomizedBulmaDemo,
      CustomizedBulmaDemo
    }
  }
</script>

<style>

</style>