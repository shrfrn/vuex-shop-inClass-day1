export default {
    template: `
        <footer>
            <h4>Cart Total: \${{ totalPrice }}</h4>
            <h4>Count: {{ count }}</h4>
        </footer>
    `,
    computed: {
        totalPrice() {
            return 0
        },
        count() { return this.$store.state.count }
    },
}