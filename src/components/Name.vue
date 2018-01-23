<template>
    <div id="name_container">

        <!-- Ad -->
        <div id="name_ad"></div>
        <!-- /Ad -->

        <!-- Name Row -->
        <div id="name_row-name" class="name-row clearfix">
            <div id="name-name">
                <h1 v-bind:class="{girl: name[0].gender == 'F', boy: name[0].gender == 'M'}">
                    {{name[0].name}}
                </h1>
                <div id="name-id">#{{name[0].rank | Commas}}</div>
                <div id="name-occurence">{{name[0].occurrences | Commas}} baby {{name[0].gender | GenderFilter}}s were named {{name[0].name}} last year.</div>
                <div v-if="name[1]" id="name-occurence">{{name[1].occurrences | Commas}} baby {{name[1].gender | GenderFilter}}s were named {{name[1].name}} last year.</div>
                
            </div>
            <div id="name-google">
                <!--<line-chart :chart-data="GoogleChart_data"></line-chart>-->
                <!--<line-chart :chart-data="GoogleChart_data" :options="{responsive: true, maintainAspectRatio: false, legend: { display: false }, scales:{yAxes:[{ticks:{suggestedMax:100,suggestedMin:0}}], xAxes:[{display:true, gridLines: {display: false}}]}}"></line-chart>-->
                <history-chart :chart-data="History_data"></history-chart>
            </div>
        </div>
        <!-- /Name Row -->


        <div>
            <div v-for="topic in GoogleAutoComplete_data">
                {{topic.title}} --- {{topic.type}}
            </div>

        </div>

        

        <!--
            Top 10 Cities searchnig for this name
            googleTrends.interestByRegion({keyword: 'Lily', resolution: "CITY"})
        -->


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
import HistoryChart from './sub_components/HistoryChart';
//import RegionChart from './sub_components/RegionChart';
export default {
    props: ['n', 'g'],
    components:{
        'line-chart': GoogleChart,
        'history-chart': HistoryChart
    },
    name: 'name',
    data() {
        return {
            GoogleChart_data: null,
            History_data: null,
            //RegionChart_data: null,
            GoogleAutoComplete_data: [],
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
        getHistory: function (){
            //[{'year': 2005, 'occurrences': 6050},{'year': 2006, 'occurrences': 5050},{'year': 2007, 'occurrences': 3050},{'year': 2008, 'occurrences': 8050},{'year': 2009, 'occurrences': 2340},{'year': 2010, 'occurrences': 2050},{'year': 2011, 'occurrences': 6344}],
            var data_obj = [234,5345,3456,436,4645,6756,7456,745,546,456,5457,4567];
            var data_labels = ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
            this.History_data = {labels: data_labels,"datasets":[{"label": "Occurrences", "backgroundColor":"rgba(43,176,165,.6)", "borderColor": "rgba(0,0,0,0)","data":data_obj}]};
        },
        getGoogleAutoComplete: function (){
            axios.get("http://localhost:8088/google-autocomplete/" + this.n)
            .then(response => {
                //console.log(response);
                this.GoogleAutoComplete_data = response.data.default.topics;
            })        
        },
        getName: function(){
            //CreateStr
            let queryStr = "?n="+this.n;
            // Data: id, name, gender, occurrences, rank, year, syllables, meaning, unisex[int]
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
        this.getGoogleAutoComplete();
        this.getHistory();
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
        },
        Commas(value){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    }
};
</script>

<style lang="scss">
</style>
