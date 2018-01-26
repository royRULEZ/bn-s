<template>
    <div id="explore_container">

        <!-- Ad -->
        <div id="explore_ad">
            <div id="ad"></div>
        </div>
        <!-- /Ad -->

        <!-- Explore Content -->
        <div id="explore_content" class="clearfix">

            <h1>
                Find the unqiue name for your child
            </h1>

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
                    <div class="all_filters-label">Other Filters</div>
                    <div id="explore-filters">
                        <!--
                        <div class="filter-section">
                            Search
                        </div>
                        -->
                        <div class="filter-section">
                            <div class="all_filters-label">Gender</div>
                            <div id="gender_toggle" class="clearfix">
                                <div class="gender_toggle-gender" v-bind:class="{ active: gender == 'M' }" @click="gender = 'M'">Boy</div>
                                <div class="gender_toggle-gender" v-bind:class="{ active: gender == 'F' }" @click="gender = 'F'">Girl</div>
                                <div class="gender_toggle-gender" v-bind:class="{ active: gender == 'U' }" @click="gender = 'U'">Unisex</div>                                
                            </div>
                        </div>  
                        <div class="filter-section">
                            <div v-if="this.a" class="all_filters-label">First Letter</div>
                            <v-select
                                label="A-Z"
                                v-model="alpha"
                                :items="alphabet"
                                single-line
                                hide-details    
                                id="alphabet_select" 
                                solo
                                v-bind:class="{ active: alpha }"
                            ></v-select>
                        </div>                        
                        <div class="filter-section">
                            <div v-if="this.l" class="all_filters-label">Length</div>
                            <v-select
                                label="Length"
                                v-model="length"
                                :items="lengths"
                                single-line
                                hide-details    
                                id="length_select" 
                                solo
                                v-bind:class="{ active: length }"
                            ></v-select>
                        </div>
                        <div class="filter-section">
                            <div v-if="this.t" class="all_filters-label">Theme</div>
                            <v-select
                                label="Theme"
                                v-model="theme"
                                :items="themes"
                                single-line
                                hide-details    
                                id="theme_select" 
                                solo
                                v-bind:class="{ active: theme }"
                            ></v-select>
                        </div>
                        <div class="filter-section">
                            <div v-if="this.o" class="all_filters-label">Origin</div>
                            <v-select
                                label="Origin"
                                v-model="origin"
                                :items="origins"
                                single-line
                                hide-details    
                                id="origin_select" 
                                solo
                                v-bind:class="{ active: origin }"
                            ></v-select>
                        </div>     
                        <div id="filters-selected">
                            <div class="all_filters-label">Selected Filters</div>
                            <div v-if="this.p">Popularity: {{popularity}}</div>
                            <div v-if="this.g">Gender: {{gender | Gender}}</div>
                            <div v-if="this.a">Starts with letter: {{alpha}}</div>
                            <div v-if="this.l">Length: {{length}}</div>
                            <div v-if="this.t">Theme: {{theme}}</div>
                            <div v-if="this.o">Origin: {{origin}}</div>
                        </div>  
                        <div id="clear_filters">
                            <v-btn id="clear_filters-btn">Clear Filters</v-btn>
                        </div>
                    </div> 
                </div>    
                <div id="explore_names">
                    <div class="name" v-for="name in names">
                        <router-link :to="`/name?n=${name.name}`">{{name.name}}</router-link>
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
    props: ['p', 'g', 'l', 'a', 't', 'o'],
    name: 'explore',
    data () {
        return {
            search: '',
            names: [],
            popularity: this.p,
            gender: this.g,
            length: this.l,
            alpha: this.a,
            theme: this.t,
            origin: this.o,
            items: ['Popular','Unique','Uncommon','Rare','Obscure','Original'],
            alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            lengths: ['2','3','4','5','6','7','8','9','10','11','12','13','14','15'],
            themes: ['Car', 'Truck'],
            origins: ['Boy', 'Girl'],
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
            if(this.t){queryArr.push("t="+this.t)}
            if(this.o){queryArr.push("o="+this.o)}
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
        },
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
            if(this.popularity){queryObj["p"]=this.popularity}
            if(this.gender){queryObj["g"]=this.gender}
            if(this.alpha){queryObj["a"]=this.alpha}
            if(this.length){queryObj["l"]=this.length}
            if(this.theme){queryObj["t"]=this.theme}
            if(this.origin){queryObj["o"]=this.origin}
            this.$router.push({path: 'explore', query: queryObj});
            this.$router.go();
        },
        gender: function(){
            let queryObj = {};
            if(this.popularity){queryObj["p"]=this.popularity}
            if(this.gender){queryObj["g"]=this.gender}
            if(this.alpha){queryObj["a"]=this.alpha}
            if(this.length){queryObj["l"]=this.length}
            if(this.theme){queryObj["t"]=this.theme}
            if(this.origin){queryObj["o"]=this.origin}
            this.$router.push({path: 'explore', query: queryObj});
            this.$router.go();
        },
        length: function(){
            let queryObj = {};
            if(this.popularity){queryObj["p"]=this.popularity}
            if(this.gender){queryObj["g"]=this.gender}
            if(this.alpha){queryObj["a"]=this.alpha}
            if(this.length){queryObj["l"]=this.length}
            if(this.theme){queryObj["t"]=this.theme}
            if(this.origin){queryObj["o"]=this.origin}
            this.$router.push({path: 'explore', query: queryObj});
            this.$router.go();            
        },
        alpha: function(){
            let queryObj = {};
            if(this.popularity){queryObj["p"]=this.popularity}
            if(this.gender){queryObj["g"]=this.gender}
            if(this.alpha){queryObj["a"]=this.alpha}
            if(this.length){queryObj["l"]=this.length}
            if(this.theme){queryObj["t"]=this.theme}
            if(this.origin){queryObj["o"]=this.origin}
            this.$router.push({path: 'explore', query: queryObj});
            this.$router.go();            
        },
        theme: function(){
            let queryObj = {};
            if(this.popularity){queryObj["p"]=this.popularity}
            if(this.gender){queryObj["g"]=this.gender}
            if(this.alpha){queryObj["a"]=this.alpha}
            if(this.length){queryObj["l"]=this.length}
            if(this.theme){queryObj["t"]=this.theme}
            if(this.origin){queryObj["o"]=this.origin}
            this.$router.push({path: 'explore', query: queryObj});
            this.$router.go();            
        },
        origin: function(){
            let queryObj = {};
            if(this.popularity){queryObj["p"]=this.popularity}
            if(this.gender){queryObj["g"]=this.gender}
            if(this.alpha){queryObj["a"]=this.alpha}
            if(this.length){queryObj["l"]=this.length}
            if(this.theme){queryObj["t"]=this.theme}
            if(this.origin){queryObj["o"]=this.origin}
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
