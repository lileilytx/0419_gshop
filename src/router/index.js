/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Miste from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/miste',
            component:Miste,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/',
            redirect:'/miste'
        },
        {
            path:'/login',
            component:Login
        }
    ]
})