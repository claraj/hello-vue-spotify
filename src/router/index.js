import Router from 'vue-router'

import HelloSpotify from '@/components/HelloSpotify'
import Auth from '@/components/Auth'

export default new Router({
    mode: 'history',  // for url paths with no # or it will conflct with Spotify callback URL
    routes: [
        { 
            path: '/',
            component: HelloSpotify 
        },
        {
            path: '/auth', 
            component: Auth 
        }
    ]
})