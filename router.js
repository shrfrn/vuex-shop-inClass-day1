const { createRouter, createWebHashHistory} = VueRouter

import HomePage from './pages/HomePage.js'
import ShopIndex from './pages/ShopIndex.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/shop',
        component: ShopIndex
    },
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})