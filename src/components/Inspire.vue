<template>
    <div id="inspire_container">
        
        <!-- Explore Content -->
        <div id="inspire_content" class="clearfix">
            
            <h1>
                Get inspired by our unqiue collections
            </h1>
            
            <!-- Hero -->
            <div class="inspired-title">Recently Added Collections</div>
            <div id="inspire-hero" class="clearfix">
                <div id="inspire_hero-main"></div>
                <div id="inspire_hero-other">
                    <div class="inspire_hero_side"></div>
                    <div class="inspire_hero_side"></div>
                </div>
            </div>    
            
            <!-- Popular -->
            <div class="inspired-title">Popular Collections</div>
            <div id="inspire-populars" class="clearfix">
                <div class="inspire-popular"></div>
                <div class="inspire-popular"></div>
                <div class="inspire-popular"></div>
                <div class="inspire-popular"></div>
            </div>    
            
            <!-- Search -->
            <div id="inspire-search">
                <div class="inspired-title">All Collections</div>
                <v-card color="lighten-4" flat>
                    <v-toolbar class='elevation-0' id="inspire-toolbar">
                        <!--
                        <v-menu :nudge-width="100">
                            <v-toolbar-title slot="activator">
                                <span>View: <span class="view-filter">Top 100</span></span><v-icon>arrow_drop_down</v-icon>
                            </v-toolbar-title>
                            <v-list>
                            <v-list-tile v-for="item in coinFilter" :key="item" @click="">
                                <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                        </v-menu>
                        -->
                        <v-text-field
                            append-icon="search"
                            label="Search Collections"
                            single-line
                            hide-details
                            v-model="search"
                            >
                        </v-text-field>   
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>filter_list</v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-card>
            </div>
            
            <!-- Popular -->
            <div id="inspire-search" class="clearfix">
                <div class="inspire-content" v-for="collection in collections"></div>
            </div>
            
            
            <!-- Collection Ad Space -->
            <div id="inspire-ads" class="clearfix">
                <div class="inspired-title">Offers</div>
                <div id="offers">
                    <div class="amazon-item">
                        <div class="a_photo">
                            <img src="/static/images/amazon/1.jpg">
                        </div>
                        <div class="a_description">Gerber Baby Girls' 4 Pack Flannel Burp Cloths</div>
                        <div class="a_price">$10.99</div>
                    </div> 
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
                        <div class="a_description">Gerber Baby Girls' 4 Pack Flannel Burp Cloths</div>
                        <div class="a_price">$10.99</div>
                    </div> 
                </div>
                <div id="ad">
                
                </div>
            </div>
            
            
        </div>      

    
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'inspire',
    data () {
        return {
            search: '',
            collections: [1,2,3,4,5,6,7,8,9,10]
        };
    },
    methods: {
        getNames: function(){
            //CreateStr
        },
    },
    mounted: function (){
        this.getNames();
    },
    computed: {
        //
    },
    watch:{
        //
    },
    filters: {
        //
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
