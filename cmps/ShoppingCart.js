export default {
    props:['products'],
    template: `
        <section class="shopping-cart">
            <ul>
                <li v-for="product in products">
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
            console.log('Remove from Cart:', productId)
        },
        checkout() {
            console.log('Checkout!')
         }
    },
    computed: {
        cartTotal() {
            return 0
        },
    }
}