<template>
    <div id="name_container">

        <!-- Ad -->
        <div id="name_ad"></div>
        <!-- /Ad -->

        <!-- Name Row -->
        <div id="name_row-name" class="name-row clearfix">
            <div id="name-name">
                <h1>
                    {{name[0].name}}
                </h1>
                <div id="name-id">#{{name[0].rank}}</div>
                <div id="name-occurence">{{name[0].occurrences}} baby {{name[0].gender | GenderFilter}}s were named {{name[0].name}} last year.</div>
            </div>
            <div id="name-google">
                <!--<line-chart :chart-data="GoogleChart_data"></line-chart>-->
                <line-chart :chart-data="GoogleChart_data" :options="{responsive: true, maintainAspectRatio: false, legend: { display: false }, scales:{yAxes:[{ticks:{suggestedMax:100,suggestedMin:0}}], xAxes:[{display:true, gridLines: {display: false}}]}}"></line-chart>
            </div>
        </div>
        <!-- /Name Row -->

        <pie-chart :chart-data="RegionChart_data" :options="{responsive: true, maintainAspectRatio: false}"></pie-chart>










        <!--
        <div class="alpha" v-for="actor in actors.d">
            {{actor.l}}
        </div>
        -->


    </div>    
</template>

<script>
import axios from 'axios';
import GoogleChart from './sub_components/GoogleChart';
import RegionChart from './sub_components/RegionChart';
export default {
    props: ['n', 'g'],
    components:{
        'line-chart': GoogleChart,
        'pie-chart': RegionChart,
    },
    name: 'name',
    data() {
        return {
            GoogleChart_data: null,
            RegionChart_data: null,
            name: [],
            actors: {}
        };
    },
    methods: {
        getActors: function(){
            axios.get("https://v2.sg.media-imdb.com/suggests/b/Bennett.json")
            .then(response => {
                //console.log(this.name.length);
                let str = response.data;
                let str_obj = {};
                let str_ = str.slice(6 + this.name.length);
                str_ = str_.slice(0, -1);

                this.actors = JSON.parse(str_);
                
            })
        },
        getGoogleTrends: function (){
            axios.get("http://localhost:8088/google-trends/" + this.n)
            .then(response => {
                //console.log(response);
                var google_data = response.data.default.timelineData;
                var data_obj = [];
                var data_labels = [];
                for(var i = 0; i < google_data.length; i++){
                    //if(parseInt(google_data[i].time) > 1420070400){
                        data_obj.push(google_data[i].value[0]);
                        data_labels.push(google_data[i].formattedTime);
                    //}
                }
                this.GoogleChart_data = {labels: data_labels,"datasets":[{"label": "Rank", "backgroundColor":"rgba(43,176,165,.6)", "borderColor": "rgba(0,0,0,0)","data":data_obj}]};
            })
        },
        getGoogleRegions: function (){
            axios.get("http://localhost:8088/google-region/" + this.n)
            .then(response => {
                //console.log(response);
                var google_data = response.data.default.geoMapData;
                var data_obj = [];
                var data_labels = [];
                for(var i = 0; i < google_data.length; i++){
                    //if(parseInt(google_data[i].time) > 1420070400){
                        data_obj.push(google_data[i].value[0]);
                        data_labels.push(google_data[i].geoName);
                    //}
                }
                this.RegionChart_data = {labels: data_labels,"datasets":[{"label": "Rank","data":data_obj}]};
            })        
        },
        getName: function(){
            //CreateStr
            let queryStr = "?n="+this.n+"&g="+this.g;

            axios.get("http://localhost:8088/name" + queryStr)
            .then(response => {
               this.name = response.data;
            })
        }
    },
    mounted: function (){
        //this.getActors();
        this.getName();
        this.getGoogleTrends();
        this.getGoogleRegions();
    },
    filters: {
        GenderFilter(value){
            switch(value){
                case "M":
                    return "boy";
                    break;
                case "F":
                    return "girl";
                    break;  
                case "U":
                    return "boys and girls";
                    break;
            } 
        }
    }
};
</script>

<style lang="scss">
</style>
