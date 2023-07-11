export default {
    template: `
        <footer>
            <h4>Cart Total: \${{ totalPrice }}</h4>
            <h4>Count: {{ count }}</h4>
        </footer>
    `,
    computed: {
        totalPrice() {
            const cartProducts = this.$store.state.cart
            return cartProducts.reduce((acc, prd) => acc += prd.price, 0)
        },
        count() { return this.$store.state.count }
    },
}