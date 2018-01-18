<template>
    <div id="explore_container">

        <!-- Ad -->
        <div id="explore_ad">
            <div id="ad"></div>
        </div>
        <!-- /Ad -->

        <h1>
            Explore Names
        </h1>

        <!-- Explore Content -->
        <div id="explore_content" class="clearfix">
            
            <!-- Filters & Names -->                     
            <div id="explore-content">
                <div id="all_filters">
                    <div id="explore-popularity">
                        <div id="popularity-label">POPULARITY</div>
                        <v-select
                            label="Popularity"
                            v-model="popularity"
                            :items="items"
                            single-line
                            hide-details    
                            id="popularity_select" 
                            solo
                        ></v-select><!-- solo overflow -->

                    </div>   
                    <div id="explore-filters">
                        <div class="filter-section">
                            Search
                        </div>  
                        <div class="filter-section">
                            <input type="radio" id="one" value="M" v-model="gender">
                            <label for="one">M</label>
                            <input type="radio" id="two" value="F" v-model="gender">
                            <label for="two">F</label>
                            <input type="radio" id="two" value="U" v-model="gender">
                            <label for="two">U</label>                            
                        </div>
                        <div class="filter-section">
                            A-Z
                        </div>                        
                        <div class="filter-section">
                            Length
                        </div>
                        <div class="filter-section">
                            Theme
                        </div>
                        <div class="filter-section">
                            Origin
                        </div>     
                        <div id="filters-selected">
                            <div v-if="this.p">Popularity (i): {{popularity}}</div>
                            <div v-if="this.g">Gender (i): {{gender | Gender}}</div>
                        </div>                   
                    </div> 
                </div>    
                <div id="explore_names">
                    <div class="name" v-for="name in names">
                        <router-link :to="`/name/${name.name}`">{{name.name}}</router-link>
                    </div>
                    <v-pagination :length="6" v-model="page"></v-pagination>
                </div>                            
            </div>
            <!-- Filters & Names -->                     

        </div>
        <!-- /Explore Content -->



    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['p', 'g', 'l', 'a'],
    name: 'explore',
    data () {
        return {
            search: '',
            names: [],
            popularity: this.p,
            gender: this.g,
            length: this.l,
            alpha: this.a,
            items: ['Popular','Unique','Uncommon','Rare','Obscure','Original'],
            pagination: {},
            page: 1
        };
    },
    methods: {
        getNames: function(){
            //CreateStr
            let queryStr = "?";
            let queryArr = [];
            if(this.p){queryArr.push("p="+this.p)}
            if(this.g){queryArr.push("g="+this.g)}
            if(this.l){queryArr.push("l="+this.l)}
            if(this.a){queryArr.push("a="+this.a)}
            for(var i = 0; i < queryArr.length; i++){
                queryStr+=queryArr[i];
                if(i != (queryArr.length-1)){
                    queryStr+="&";
                }
            }
            axios.get("http://localhost:8088/explore-names" + queryStr)
            .then(response => {
               this.names = response.data;
            })
        }
    },
    mounted: function (){
        this.getNames();
    },
    computed: {
        
        allNames: function (){
            var self = this;
            return this.names.filter(function(name){
                let found = false;
                if(name.name.toLowerCase().indexOf(self.search.toLowerCase())>=0){
                    return true;
                }
            });            
        }
        /*
        pages () {
            return this.pagination.rowsPerPage ? Math.ceil(this.names.length / this.pagination.rowsPerPage) : 0
        }  
        */      
    },
    watch:{
        popularity: function(){
            let queryObj = {};
            if(this.p){queryObj["p"]=this.popularity}
            if(this.g){queryObj["g"]=this.gender}
            this.$router.push({path: 'explore', query: queryObj});
            this.$router.go();
        },
        gender: function(){
            let queryObj = {};
            if(this.p){queryObj["p"]=this.popularity}
            if(this.g){queryObj["g"]=this.gender}
            this.$router.push({path: 'explore', query: queryObj});
            this.$router.go();
        }        
    },
    filters: {
        Gender(value){
            switch(value){
                case "M":
                    return "Boy";
                    break;
                case "F":
                    return "Girl";
                    break;  
                case "U":
                    return "Unisex";
                    break;
            } 
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
