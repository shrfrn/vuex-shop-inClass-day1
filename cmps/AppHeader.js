import ShoppingCart from './ShoppingCart.js'

export default {
    template: `
        <header>
            <h1 class="main-title">Vuex</h1> 

            <button @click="isCartShown=!isCartShown" class="cart-info">
                {{ cartLength }} Products in your Cart
            </button>

            <ShoppingCart 
                v-if="isCartShown && cartProducts.length > 0" 
                :products="cartProducts"/>

            <nav>
                <router-link to="/">Home</router-link> | 
                <router-link to="/shop">Shop</router-link>
            </nav>

            <section class="user-info">
                <span>{{ user.username }}</span> |
                <span>\${{ user.balance }}</span>
            </section>
        </header>
    `,
    data() {
        return {
            isCartShown : false,
        }
    },
    computed : {
        cartLength() {
            return this.cartProducts.length
        },
        cartProducts() {
            return this.$store.state.cart
        },
        user() { return this.$store.state.user }
    },
    components: {
        ShoppingCart,
    }
}