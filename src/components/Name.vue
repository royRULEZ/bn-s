<template>
    <div id="name_container">

        <!-- Ad -->
        <div id="name_ad"></div>
        <!-- /Ad -->

        <!-- Social CTA -->
        <div id="name_row-social" class="name-row clearfix">
            <v-btn left>My Names<v-icon>add</v-icon></v-btn>
            <v-btn left>Share<v-icon>share</v-icon></v-btn>
        </div>
        <!-- Social CTA -->
        
        <!-- Name Row -->
        <div id="name_row-name" class="name-row clearfix">
            <div id="name-name">
                <h2>Rank & Meaning of {{name[0].name}}</h2>
                <h1 v-bind:class="{girl: name[0].gender == 'F', boy: name[0].gender == 'M'}">
                    {{name[0].name}}
                </h1>
                <div id="name-meaning">This name is so uncommon, we don't even know what it means yet!</div>
                <div id="name-origin">Origin: <span class="origin-link"><router-link to="/">Origin1</router-link></span><span class="origin-link"><router-link to="/">Origin1</router-link></span></div>
                <div id="name-stats">
                    <div id="name-id">{{name[0].rank | Popularity}}, #{{name[0].rank | Commas}}</div>
                    <div class="name-occurrence">{{name[0].occurrences | Commas}} baby {{name[0].gender | GenderFilter}}s were named {{name[0].name}} last year.</div>
                    <div v-if="name[1]" class="name-occurrence">{{name[1].occurrences | Commas}} baby {{name[1].gender | GenderFilter}}s were named {{name[1].name}} last year.</div>
                </div>
            </div>
            <div id="name-google">
                <h2>
                    Is {{name[0].name}} a popular name?
                </h2>
                <history-chart :chart-data="History_data" :options="{responsive: true, maintainAspectRatio: false, legend: { display: false }, scales: { yAxes: [{ ticks: {display: false}}]} }"></history-chart>
            </div>
        </div>
        <!-- /Name Row -->


        <div id="name_row-data" class="name-row clearfix">
            <div id="name_row-variations" class="row-25 clearfix">
                <h2>Variations of {{name[0].name}}</h2>
                <div class="name_row-variation" v-for="variation in variations">
                    <!-- <router-link :to="`/name?n=${variation.name}`">{{variation.name}}</router-link> -->
                    <a :href="'/name?n=' + variation.name">{{variation.name}}</a>
                </div>

            </div>
            <div id="name_row-autocomplete" class="row-25">
                <h2>What's '{{name[0].name}}' known for?</h2>
                <div class="autocomplete-topic" v-for="topic in GoogleAutoComplete_data">
                    <div class="autocomplete-title">{{topic.title}}</div>
                    <div class="autocomplete-type">{{topic.type}}</div>  
                </div>
            </div>
            <div id="name_row-collections" class="row-25">
                <h2>Collections featuring {{name[0].name}}</h2>
                <div class="name_row-collection">
                    <router-link to="/">Presidential</router-link><br/>
                    <router-link to="/">Famous Black Women</router-link><br/>
                    <router-link to="/">Billionaies</router-link><br/>
                    <router-link to="/">Christmas</router-link>
                </div>
            </div>            
            <div id="name_row-songs" class="row-25">
                <h2>What is {{name[0].name}}'s song?</h2>
                <a target="_blank" v-bind:href="song.trackViewUrl" tag="div" class="name-song clearfix" v-for="song in itunes">
                    <div class="song-details">
                        <div class="song-title">{{song.trackName | SongTruncate}}</div>
                        <div class="song-artist">{{song.artistName}}</div>
                    </div>
                    <div class="song-icon"><v-icon>play_arrow</v-icon></div> 
                </a>
            </div>            
        </div>

        <div id="name_row-related" class="name-row clearfix">
            <h2>What names are related to {{name[0].name}}?</h2>
            <div class="name-related" v-for="variation in variations">
                <router-link :to="`/name?n=${variation.name}`">{{variation.name}}</router-link>
            </div>
        </div>
        
        <div id="name_row-google" class="name-row clearfix">
            <h2>Google Searches for {{name[0].name}}</h2>

            
            <line-chart :chart-data="GoogleChart_data" :options="{responsive: true, maintainAspectRatio: false, legend: { display: false }, scales:{yAxes:[{ticks:{suggestedMax:100,suggestedMin:0}}], xAxes:[{display:true, gridLines: {display: false}}]}}"></line-chart>
        </div>
        
        <!-- TODO: BOY GIFTS!! -->
        <div id="name_row-gifts" class="name-row clearfix">
            <h2>Personalized Baby Gifts for {{name[0].name}}</h2>
            <div class="gifts-item">
                <div class="gi_photo">
                    <img :src="'https://preview.personalizationmall.com/preview.iglx?igOutput=Jpg85&amp;productid=12169&amp;itemid=55695&amp;value1=' + name[0].name">
                </div>
                <div class="gi_description">Heart Pendant</div>
                <div class="gi_price">$24.79</div>
            </div>
            <div class="gifts-item">
                <div class="gi_photo">
                    <img :src="'https://preview.personalizationmall.com/preview.iglx?igOutput=Jpg100&productid=16821&itemid=48620&value1=Squiggles&value2=' + name[0].name">
                </div>
                <div class="gi_description">Heart Pendant</div>
                <div class="gi_price">$24.79</div>
            </div>
            <div class="gifts-item">
                <div class="gi_photo">
                    <img :src="'https://preview.personalizationmall.com/preview.iglx?igOutput=Jpg85&productid=17645&itemid=47640&dropdownitemid=45470&value1=' + name[0].name">
                </div>
                <div class="gi_description">Heart Pendant</div>
                <div class="gi_price">$24.79</div>
            </div>
            <div class="gifts-item">
                <div class="gi_photo">
                    <img :src="'https://preview.personalizationmall.com/preview.iglx?igOutput=Jpg95&productid=17549&itemid=47227&dropdownitemid=46941&value1=Doodle&value2=Pink&value3=' + name[0].name">
                </div>
                <div class="gi_description">Heart Pendant</div>
                <div class="gi_price">$24.79</div>
            </div>                                    
        </div>

        <div id="name_row-amazon" class="name-row clearfix">
            <h2>Popular baby gifts for {{name[0].name}}</h2>
            <div class="amazon-item">
                <div class="a_photo">
                    <img src="/static/images/amazon/2.jpg">
                </div>
                <div class="a_description">Gerber Baby Girls' 4 Pack Flannel Burp Cloths</div>
                <div class="a_price">$10.99</div>
            </div> 
            <div class="amazon-item">
                <div class="a_photo">
                    <img src="/static/images/amazon/3.jpg">
                </div>
                <div class="a_description">Nuby Ice Gel Teether Keys</div>
                <div class="a_price">$5.99</div>
            </div>             
        </div>
    
    
        <!--
        <div id="name_row-newsletter" class="name-row clearfix">
            Newsletter
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
            variations: [],
            itunes: [],
            actors: {},
            reddit: []
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
            axios.get("http://localhost:8088/history/" + this.n)
            .then(response => {
                console.log(response.data);
                let girlHistory = [];
                let boyHistory = [];
                let years = ["2007", "2008", "2009", "2010","2011", "2012", "2013", "2014","2015", "2016"];
                //years.forEach(year => {
                response.data.forEach(element => {
                    if(element.gender == "F"){
                        girlHistory.push(element.occurrence);
                        if(response.data.length > 1 && element.occurrence < 25){
                            girlHistory.pop(element.occurrence);
                        }
                    }
                    if(element.gender == "M"){
                        boyHistory.push(element.occurrence);
                        if(response.data.length > 1 && element.occurrence < 25){
                            boyHistory.pop(element.occurrence);
                        }
                    }                    
                }); 
                //});

                console.log(girlHistory);
                console.log(boyHistory);


                if(girlHistory && boyHistory){
                    this.History_data = {labels: years,"datasets":[{"label": "Boys ", "backgroundColor":"rgba(74,124,152,.9)", "borderColor": "rgba(0,0,0,0)","data":boyHistory},{"label": "Girls ", "backgroundColor":"rgba(213,97,127,.9)", "borderColor": "rgba(0,0,0,0)","data":girlHistory}]};
                }
                
            })
            
            //[{'year': 2005, 'occurrences': 6050},{'year': 2006, 'occurrences': 5050},{'year': 2007, 'occurrences': 3050},{'year': 2008, 'occurrences': 8050},{'year': 2009, 'occurrences': 2340},{'year': 2010, 'occurrences': 2050},{'year': 2011, 'occurrences': 6344}],
            //var data_obj = [234,300,500,836,4645,6756,7456,745,546,456,5457,4567];
            //var data_labels = ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
            //this.History_data = {labels: data_labels,"datasets":[{"label": "Babies", "backgroundColor":"rgba(43,176,165,.6)", "borderColor": "rgba(0,0,0,0)","data":data_obj}]};
            
        },
        getGoogleAutoComplete: function (){
            
            axios.get("http://localhost:8088/google-autocomplete/" + this.n)
            .then(response => {
                //console.log(response);
                this.GoogleAutoComplete_data = response.data.default.topics;
            })
            
            //this.GoogleAutoComplete_data = [ { "mid": "/m/0d7d5", "title": "Alexandra Feodorovna", "type": "Alix of Hesse" }, { "mid": "/m/0d1pv", "title": "Alexandra of Denmark", "type": "Empress of India" }, { "mid": "/m/0j2jr", "title": "Crewe Alexandra F.C.", "type": "Football club" }, { "mid": "/m/06dyrz", "title": "Alexandra Feodorovna", "type": "Charlotte of Prussia" }, { "mid": "/m/01pn56", "title": "Princess Alexandra, The Honourable Lady Ogilvy", "type": "Royal Lady of the Garter" } ]    
        },
        getName: function(){
            let queryStr = "?n="+this.n;
            axios.get("http://localhost:8088/name" + queryStr)
            .then(response => {
               this.name = response.data;
               if(this.name.length > 1){
                this.name.forEach(element => {
                    if(element.occurrences < 25){this.name.pop(element)}
                });
               }
            })
            
            //this.name = [ { "id": 110, "name": "Alexandra", "gender": "F", "occurrences": 2831, "rank": 109, "year": 2016, "syllables": 0, "meaning": "", "unisex": 0 } ]
        },
        getVariations: function() {
            
            axios.get("http://localhost:8088/variations/" + this.n)
            .then(response => {
                this.variations = response.data;
            })
            
            //this.variations = [ { "name": "Alexandra" }, { "name": "Alexandria" }, { "name": "Alexandre" }, { "name": "Alexandro" }, { "name": "Alexandrea" }, { "name": "Alexandros" }, { "name": "Alexandru" }, { "name": "Alexander" }, { "name": "Alexandr" }, { "name": "Alexandar" } ]      
        },
        getItunes: function(){
            //console.log("https://itunes.apple.com/search?term="+this.n+"&entity=song&limit=5");
            axios.get("https://itunes.apple.com/search?term="+this.n+"&entity=song&limit=5")
            .then(response => {
                this.itunes = response.data.results;
                //console.log(this.itunes);
            })
        }
    },
    mounted: function (){
        //this.getActors();
        this.getName();
        this.getGoogleTrends();
        this.getGoogleAutoComplete();
        this.getHistory();
        this.getVariations();
        this.getItunes();
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
        SongTruncate(value){
            return (value.length > 30 ?  value.substring(0, 30) + "[...]" : value);
        },
        Popularity(value){
            if(value <= 100){
                return "Popular";
            }else if(value > 100 && value <= 700){
                return "Unique";
            }else if(value > 700 && value <= 875){
                return "Uncommon";
            }else if(value > 875 && value <= 930){
                return "Rare";
            }else if(value > 930 && value <= 945){
                return "Obscure";
            }else if(value > 945){
                return "Original";
            }
        }
    }
};
</script>

<style lang="scss">
</style>
