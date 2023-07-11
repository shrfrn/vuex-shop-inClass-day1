const { createRouter, createWebHashHistory} = VueRouter

import HomePage from './pages/HomePage.js'
import ShopIndex from './pages/ShopIndex.js'
import UserDetails from './pages/UserDetails.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/shop',
        component: ShopIndex
    },
    {
        path: '/user',
        component: UserDetails
    },
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})