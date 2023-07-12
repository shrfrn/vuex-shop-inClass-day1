export default {
    template: `
        <section class="user-details router-view">
            <h2>{{ user.username }} - Order History</h2>
            <ul v-if="user.orders.length">
                <li v-for="order in user.orders">
                    <pre>{{ order }}</pre>
                    <button @click="toggleOrderStatus(order._id)">{{ action(order.status) }}</button>
                </li>
            </ul>
            <section v-else class="no-orders-yet">
                <h3>No orders yet...</h3>
                <RouterLink to="/shop">
                    <h3>Make your first one here</h3>
                </RouterLink>
            </section>
        </section>
    `,
    methods: {
        toggleOrderStatus(orderId) {
            this.$store.commit({ type: 'toggleOrderStatus', orderId })
        },
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        action: () => (status) => status === 'Pending' ? 'Approve' : 'Cancel'
    }
}