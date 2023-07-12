import { userService } from "../services/user.service.js"

export default {
    template: `
        <section class="user-details router-view">
            <h2>{{ user.username }} - Order History</h2>
            <form @submit.prevent="addFunds" class="add-funds">
                <h3>Add Juba</h3>
                <input type="number" v-model.number="amount">
                <button>Add</button>
            </form>
            <ul v-if="user.orders.length">
                <li v-for="order in user.orders">
                    <details>
                        <summary class="order-summary">
                            <span>{{ order.items?.length || 0 }} Items</span> - 
                            <span>\${{ order.total }} Total</span> - 
                            <span>{{ order.status }}</span> 
                        </summary>
                        <pre>{{ order }}</pre>
                        <button @click="toggleOrderStatus(order._id)">{{ action(order.status) }}</button>
                    </details>
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
    data() {
        return {
            amount: 0,
        }
    },
    methods: {
        toggleOrderStatus(orderId) {
            userService.toggleOrderStatus(orderId)
                .then(order => {
                    this.$store.commit({ type: 'toggleOrderStatus', orderId: order._id })
                })
        },
        addFunds() {
            userService.addFunds(this.amount)
                .then(newBalance => {
                    this.$store.commit({ type: 'addFunds', newBalance })
                    this.amount = 0
                })
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        action: () => (status) => status === 'Pending' ? 'Approve' : 'Cancel'
    }
}