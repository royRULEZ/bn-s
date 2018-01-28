import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Name from '@/components/Name'
import Explore from '@/components/Explore'
import Inspire from '@/components/Inspire'
import Store from '@/components/Store'
import Collection from '@/components/Collection'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/name',
    name: 'Name',
    component: Name,
    props: (route) =>({
      n: route.query.n,
      g: route.query.g
    })  
  },
  {
    //path: '/explore/:original/:alpha/:theme/:origin',
    //path: '/explore-names/:rarity',    
    path: '/explore',
    name: 'Explore',
    component: Explore,
    props: (route) =>({
      p: route.query.p,
      g: route.query.g,
      a: route.query.a,
      l: route.query.l,
      t: route.query.t,
      o: route.query.o
    })
  },
  {
    path: '/get-inspired',
    name: 'Inspire',
    component: Inspire
  },
  {
    path: '/collection/:collection',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/how-to-choose-a-baby-name',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  }
]
})
