<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <!--chart :data="data"></chart-->
  </q-page>
</template>

<style>
</style>

<script>
import Chart from '../components/Chart'
export default {
  name: 'PageIndex',
  components:{ Chart },
  data: {
    labels:['A', 'B', 'C'],
    datasets:[{
      label: ['One', 'Two', 'Three'],
      backgroundColor: ['#f87979', '#3d65bd', '#3d7345'],
      data: [10,20,30]
      }],
      option: {
        height: 200
      }
  }

}
</script>
