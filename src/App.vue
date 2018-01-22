<template>
    <v-app>

        <!-- Side Menu -->
        <v-navigation-drawer absolute temporary v-model="sideNav" app>
            <div id="nav_drawer-title">Baby Namr</div>
        </v-navigation-drawer>
        <!-- /Side Menu -->

        <!-- Toolbar -->
        <v-toolbar id="toolbar" class='elevation-0'>
            <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title @click="goHome">BabyNamr</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>favorite</v-icon>
            </v-btn>      
        </v-toolbar>
        <!-- /Toolbar -->

        <!-- Header -->
        <header>
            <ul>
                <li><router-link to="/" exact>Home</router-link></li>
                <li><router-link to="/explore?p=Unique&g=F">Explore</router-link></li>
                <li><router-link to="/g">Get Inspired</router-link></li>
                <li><router-link to="/h">Choosing a Name</router-link></li>
                <li><router-link to="/gi">Gifts</router-link></li>
            </ul>
        </header>
        <!-- /Header -->

        <!-- Main Content -->
        <v-content>
            <v-container fluid>
                <router-view/><!-- router -->
            </v-container>
        </v-content>
        <!-- /Main Content -->

        <!-- Footer -->
        <footer>
            This is my footer
        </footer>
        <!-- /Footer -->
    </v-app>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
        sideNav: false,
        };
    },
    methods:{
        goHome: function (){
            this.$router.push({path: '/',});
        }
    }
};
</script>

<style lang="scss">
    @import './assets/scss/main.scss';
    .application {
        font-family: inherit !important;
        line-height: inherit !important;
        &.theme--light {
            background: inherit !important;
            .theme--light.icon {
            color: inherit !important;
            }
            .icon {
            color: inherit !important;
            }
        }
    }    
    .container{
        padding: 0 !important;
    }
</style>
