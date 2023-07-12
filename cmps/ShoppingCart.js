import { showErrorMsg } from "../services/event-bus.service.js"
import { userService } from "../services/user.service.js"

export default {
    props:['products'],
    template: `
        <section class="shopping-cart">
            <ul>
                <li v-for="product in products" :key="product._id">
                    <button @click="removeFromCart(product._id)">x</button>
                    <h3>{{ product.name }}</h3>
                </li>
                <p>Total: \${{ cartTotal }} </p>
                <button @click="checkout">Checkout</button>
            </ul>
        </section>
    `,
    methods: {
        removeFromCart(productId) {
            this.$store.commit({ type: 'removeFromCart', productId })
        },
        checkout() {
            if(this.user.balance < this.cartTotal){
                showErrorMsg('Insufficient funds...')
                return
            }
            userService.addOrder(this.cart, this.cartTotal)
                .then(updatedUser => {
                    this.$store.commit({ type: 'checkout', updatedUser })
                })
         }
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        cart() {
            return this.$store.getters.cart
        },
        cartTotal() {
            return this.$store.getters.cartTotal
        },
    }
}