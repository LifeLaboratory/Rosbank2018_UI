import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data'], 
  data() {
  return: { options: { title: { display:true}}}
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}