<template>
    <div id="collection_container">
        
        <!-- Ad -->
        <div id="collection_ad"></div>
        <!-- /Ad -->
        
        <!-- Name of Collection -->
        <div class="collection-label">Collection</div>
        <h1>
            {{collectionName}}
        </h1>
        
        
        <!-- Collection Image -->
        <div id="collection-hero">
            <div id="collection_hero-picture" :style="{ backgroundImage: `url('/static/images/collections/winter.jpg')` }">
            </div>
        </div>

        
        <!-- Explore Content -->
        <div id="collection_content" class="clearfix">
            
            <!-- Collection Description -->
            <div id="collection-description">
                <div class="collection-label">Background</div>
                The concept of the hero can be found in classical literature. It is the main or revered character in heroic epic poetry celebrated through ancient legends of a people, often striving for military conquest and living by a continually flawed personal honor code. The definition of a hero has changed throughout time. Merriam Webster dictionary defines a hero as "a person who is admired for great or brave acts or fine qualities." 
            </div>
        
            <!-- Collection Names -->
            <div id="collection-names" class="clearfix">
                <div class="collection-gender clearfix">
                    <div class="collections_gender-label">Girl Names</div>
                    <div class="collection-name" v-for="name in collectionNames">
                        <router-link to="/;">{{name}}</router-link>
                    </div>
                </div>
                <div class="collection-gender clearfix">
                    <div class="collections_gender-label">Boy Names</div>
                    <div class="collection-name" v-for="name in collectionNames">
                        <router-link to="/;">{{name}}</router-link>
                    </div>
                </div>                
            </div>
            
            <!-- Collection Ad Space -->
            <div id="collection-ads" class="clearfix">
                <div class="collection-label">Gifts & Offers</div>
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
    name: 'collection',
    data () {
        return {
            collectionName: this.$route.params.collection,
            collectionNames: ["Courtney","Samantha","Stacey","Carol","Cathe","Chris","Cindy","Sheri","Scott","Shelly","Steve","Courtney","Samantha","Stacey","Carol","Cathe","Chris","Cindy","Sheri","Scott","Shelly","Steve"]
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
