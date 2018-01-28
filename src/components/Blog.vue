<template>
    <div id="blog_container">
        Blog!
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'blog',
    data () {
        return {
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
