'use strict'

const { createApp } = Vue

import { router } from './router.js'
import { store } from './store/store.js'

import { productService } from './services/product.service.js'
import { showSuccessMsg } from './services/event-bus.service.js'

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'
import UserMsg from './cmps/UserMsg.js'

const options = {
    template: `
        <section>
            <AppHeader/>
            <RouterView/>
            <AppFooter/>
            <UserMsg />
        </section>
    `,
    created() {
        productService.query()
            .then(products => this.$store.commit({ type: 'setProducts', products }))
        showSuccessMsg('HomePage Loaded')
    },
    components: {
        AppHeader,
        AppFooter,
        UserMsg
    },
}
const app = createApp(options)

app.use(router)
app.use(store)

app.mount('#app')