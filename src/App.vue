<template>
    <v-app>

        <!-- Side Menu -->
        <v-navigation-drawer absolute temporary v-model="sideNav" app>
            <v-toolbar flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            BabyNamr
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <div class="sideNav-menuItem section">
                Home
            </div>        
            <div class="sideNav-menuItem section">
                My Account
            </div>  
            <div class="sideNav-menuItem">
                Explore
            </div>  
            <div class="sideNav-menuItem">
                Get Inspired
            </div>  
            <div class="sideNav-menuItem">
                Choosing a Name
            </div>              
            <div class="sideNav-menuItem section">
                Gifts
            </div>  
            <div class="sideNav-menuItem">
                About
            </div>  
            <div class="sideNav-menuItem">
                Contact
            </div>                                                                                                                                                           
        </v-navigation-drawer>
        <!-- /Side Menu -->

        <!-- Search -->
        <v-navigation-drawer absolute right temporary clipped v-model="search" height="175px" id="search_nav" app>
            <div id="search_app">   
                <v-text-field
                    append-icon="search"
                    label="Find a Name"
                    single-line
                    hide-details
                    v-model="nameSearch"
                    v-on:keyup.enter="appSearch(nameSearch)"
                    >
                </v-text-field> 
                <div id="search_app-helper">
                    Search our database for a name.<br/>
                    Press 'enter' when you're ready to go!
                </div>
            </div>
        </v-navigation-drawer>
        <!-- /Search -->

        <!-- Toolbar -->
        <v-toolbar id="toolbar" class='elevation-0'>
            <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title @click="goHome">B<span class="title-girl">a</span>byN<span class="title-boy">a</span>mr</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="search = !search">
                <v-icon>search</v-icon>
            </v-btn>     
        </v-toolbar>
        <!-- /Toolbar -->

        <!-- Header -->
        <header>
            <ul>
                <li><router-link to="/" exact>Home</router-link></li>
                <li><router-link to="/explore?p=Unique&g=F">Explore</router-link></li>
                <li><router-link to="/get-inspired">Get Inspired</router-link></li>
                <li><router-link to="/how-to-choose-a-baby-name">Choosing a Name</router-link></li>
                <li><router-link to="/store">Gifts</router-link></li>
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
        search: false
        };
    },
    methods:{
        goHome: function (){
            this.$router.push({path: '/',});
        },
        appSearch: function (name){
            this.$router.push({path: '/name?n=' + name});
            this.$router.go();
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
