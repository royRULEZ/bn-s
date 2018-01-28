import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;


var options = { 
    responsive: true, 
    maintainAspectRatio: false, 
    legend: { display: false },
    scales: { 
        yAxes: [{ 
            display: true,
            gridLines: {
                display: true 
            },
            ticks: {
                display: false
            }
        }], 
        xAxes: [{
            display: true,
            gridLines: {
                display: true 
            },  
        }] 
    } 
};


scales: { yAxes: [{ ticks: {display: false}}]} 


export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}