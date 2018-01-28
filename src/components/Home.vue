<template>
    <div id="home_container">

        <!-- Hero -->
        <div id="bn_hero">
            <div id="bn_hero-inner">
                <h1>Discover, find and explore unique and original names for your child</h1>                
                <div class="clearfix">
                    <router-link to="/explore?p=Unique&g=F">
                        <div class="bn_circle girl">
                            Girl
                        </div>          
                    </router-link>
                    <router-link to="/explore?p=Unique&g=M">
                        <div class="bn_circle boy">
                            Boy
                        </div>    
                    </router-link> 
                    <div class="bn_circle uni">
                        Unisex
                    </div>
                </div>
                <div id="or">
                    or
                </div>
                <router-link tag="div" class="bn_hero-cta" to="/get-inspired">
                    Get Inspired   
                </router-link>                           
            </div>
        </div>
        <!-- /Hero -->

        <!-- Ad -->
        <div id="home-ad">

        </div>
        <!-- /Ad -->

        <!-- Text -->
        <div id="home-text">
            <div>A Unique Name.</div>
            We've taken a different approach to building a Baby Name website. 
            We're focusing on the uncommon, original, and unique names.
            It's hard to choose a name for your child that fits your aspirations and your family identity.
            There are the names that are a little more original and unique - the names that fit your child.
        </div>
        <!-- /Text -->        

        <!-- Unique Names -->
        <div id="link_row-names" class="link-row clearfix">
            <div class="random_names clearfix">
                <div class="link_row-title">20 Unique Boy Names</div>
                <div class="name boy" v-for="b_name in boy_names_20" :key="b_name">
                    <router-link :to="`/name?n=${b_name.name}`">{{b_name.name}}</router-link>
                </div>
            </div>
            <div class="random_names clearfix">
                <div class="link_row-title">20 Unique Girl Names</div>
                <div class="name girl" v-for="g_name in girl_names_20" :key="g_name">
                    <router-link :to="`/name?n=${g_name.name}`">{{g_name.name}}</router-link>
                </div>
            </div>            
        </div>
        <!-- /Unique Names -->   
        

        <!-- Collections -->
        <div id="link_row-collections" class="link-row clearfix">
            <div class="link_row-title">Fresh Collections</div>            
            <!-- Collection -->
            <div v-for="collection in collections" class="collection">
                <div class="collection-picture" :style="{ backgroundImage: `url('/static/images/collections/winter.jpg')` }">
                    Winter
                    <div class="collection-names clearfix">
                        <span>Christopher</span>
                        <span>Scott</span>
                        <span>Steve</span>
                        <span>...</span>
                    </div>  
                </div>
            </div> 
        </div>
        <!-- /Collections -->   

        
        <!-- Alphabet -->
        <div id="link_row-alpha" class="link-row clearfix">
            <div class="alphas clearfix">
                <div class="link_row-title">Search By Letter - Boys</div>
                <div class="alpha boy" v-for="alpha in alphabet" :key="alpha">
                    <router-link :to="`/explore?p=Unique&g=M&a=${alpha}`">{{alpha}}</router-link>
                </div>
            </div>         
            <div class="alphas clearfix">
                <div class="link_row-title">Search By Letter - Girls</div>
                <div class="alpha girl" v-for="alpha in alphabet" :key="alpha">
                    <router-link :to="`/explore?p=Unique&g=F&a=${alpha}`">{{alpha}}</router-link>
                </div>
            </div>            
        </div>
        <!-- /Alphabet -->     


        <!-- Origin -->
        <div id="link_row-origin" class="link-row clearfix">
            <div class="origins clearfix">
                <div class="link_row-title">Names by Origin</div>
                <div class="origin" v-for="origin in origins" :key="origin">
                    <router-link :to="`/explore?p=Unique&g=M&a=${origin}`">{{origin}}</router-link>
                </div>
            </div>                 
        </div>
        <!-- /Origin -->                

        <!-- Ads / Offer -->
        <div class="ad-row size-1024 border clearfix">
            <offer></offer>
        </div>
        <!-- Ads / Offer -->

    </div>
</template>

<script>
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
import axios from 'axios';
import Offer from './sub_components/Offer';
export default {
    name: "home",
    components:{
        'offer': Offer
    },    
    data() {
        return {
            boy_names_20: [],
            girl_names_20: [],
            alphabet: alphabet,
            imgSRC: "christmas.jpeg",
            collections: [1,2,3,4,5,6],
            origins: ["African", "American", "Arabic", "Celtic", "Chinese", "Czech", "Danish", "Dutch", "Egyptian", "English", "Finnish", "French", "German", "Greek", "Hebrew", "Hungarian", "Irish", "Italian", "Japanese", "Latin", "Native American", "Norse", "Polish", "Portuguese", "Russian", "Scandinavian", "Scottish", "Slavic", "Spanish", "Swedish", "Welsh", "Yiddish"]            
        };
    },
    methods: {
        getBoyNames: function(){
            axios.get("http://localhost:8088/20-boy-names")
            .then(response => {
               this.boy_names_20 = response.data;
            })
        },
        getGirlNames: function(){
            axios.get("http://localhost:8088/20-girl-names")
            .then(response => {
               this.girl_names_20 = response.data;
            })
        }        
    },
    mounted: function (){
        this.getBoyNames();
        this.getGirlNames();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
