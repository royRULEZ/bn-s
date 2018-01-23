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
                <div class="bn_hero-cta">
                    Get Inspired   
                </div>                           
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
                <div class="random_names-title">20 Unique Boy Names</div>
                <div class="name boy" v-for="b_name in boy_names_20" :key="b_name">
                    <router-link :to="`/name/${b_name.name}`">{{b_name.name}}</router-link>
                </div>
            </div>
            <div class="random_names clearfix">
                <div class="random_names-title">20 Unique Girl Names</div>
                <div class="name girl" v-for="g_name in girl_names_20" :key="g_name">
                    <router-link :to="`/name/${g_name.name}`">{{g_name.name}}</router-link>
                </div>
            </div>            
        </div>
        <!-- /Unique Names -->   

        <!-- Collections -->
        <div id="link_row-collections" class="link-row clearfix">
            <div class="collections-title">Fresh Collections</div>
            <div class="collection">
                <div class="collection-picture">
                    Famous African American Women
                </div>
                <div class="collection-names clearfix">
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                </div>
                <div class="collection-link">
                    <v-btn depressed large>View Collection</v-btn>
                </div>
            </div>    
            
            
            <div class="collection">

                <div class="collection-picture" :style="{ backgroundImage: `url('/static/images/collections/winter.jpg')` }">
                    Famous African American Women
                </div>



                <div class="collection-names clearfix">
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                </div>
                <div class="collection-link">
                    <v-btn depressed large>View Collection</v-btn>
                </div>
    
    
            </div> 
            <div class="collection">
    
                
    
                <div class="collection-picture">
                    Famous African American Women
                </div>
                <div class="collection-names clearfix">
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                    <div class="collection-name"><router-link to="/">Christopher</router-link></div>
                </div>
                <div class="collection-link">
                    <v-btn depressed large>View Collection</v-btn>
                </div>
    
    
    
            </div> 
        </div>
        <!-- /Collections -->   

        <!-- Alphabet -->
        <div id="link_row-alpha" class="link-row clearfix">
            <div class="alphas clearfix">
                <div class="alphas-title">Search By Letter - Boys</div>
                <div class="alpha boy" v-for="alpha in alphabet" :key="alpha">
                    <router-link :to="`/explore?p=Unique&g=M&a=${alpha}`">{{alpha}}</router-link>
                </div>
            </div>         
            <div class="alphas clearfix">
                <div class="alphas-title">Search By Letter - Girls</div>
                <div class="alpha girl" v-for="alpha in alphabet" :key="alpha">
                    <router-link :to="`/explore?p=Unique&g=F&a=${alpha}`">{{alpha}}</router-link>
                </div>
            </div>            
        </div>
        <!-- /Alphabet -->               


    </div>
</template>

<script>
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
import axios from 'axios';
export default {
    name: "home",
    data() {
        return {
            boy_names_20: [],
            girl_names_20: [],
            alphabet: alphabet,
            imgSRC: "christmas.jpeg"
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
