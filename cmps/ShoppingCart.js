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
            this.$store.commit({ type: 'checkout' })
         }
    },
    computed: {
        cartTotal() {
            return this.$store.getters.cartTotal
        },
    }
}