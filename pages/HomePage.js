import { showSuccessMsg } from '../services/event-bus.service.js'
import { productService } from '../services/product.service.js'

export default {
    template: `
        <section class="home router-view">
            <h1>Hi {{ user.username }}!</h1>
            <h1>We have {{ productCount }} Products in our store!</h1>
            
            <section class="counter">
                <h2>Count {{ countForDisplay }}</h2>
                <button @click="inc(1)">+</button>
                <button @click="inc(10)">+10</button>
            </section>
            <img src="../assets/img/Store.png"/>
        </section>
    `,
    data() {
        return {
        }
    },
    methods: {
        inc(val) {
           this.$store.commit({ type: 'increment', val })
        }
    },
    computed: {
        countForDisplay() {
            return this.$store.state.count
        },
        productCount() {
            return this.$store.getters.productCount
        },
        user() { return this.$store.state.user }
    }
}