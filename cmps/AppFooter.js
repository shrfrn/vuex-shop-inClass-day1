export default {
    template: `
        <footer>
            <h4>Cart Total: \${{ cartTotal }}</h4>
            <h4>Count: {{ count }}</h4>
        </footer>
    `,
    computed: {
        cartTotal() {
            return this.$store.getters.cartTotal
        },
        count() { return this.$store.state.count }
    },
}