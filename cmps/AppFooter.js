export default {
    template: `
        <footer>
            <h4>Cart Total: \${{ totalPrice }}</h4>
        </footer>
    `,
    computed: {
        totalPrice() {
            return 0
        }
    },
}