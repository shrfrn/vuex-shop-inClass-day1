import { showErrorMsg } from "../services/event-bus.service.js"
import { userService } from "../services/user.service.js"
import { utilService } from "../services/util.service.js"

const { createStore } = Vuex

const storeOptions = {
    strict: true,
    state() {
        return {
            user: userService.getLoggedinUser(),
            count: 10,
            products: null,
            cart: [],
        }
    },
    mutations: {
        increment(state, { val }) {
            state.count += val
        },
        setProducts(state, { products }) {
            state.products = products
        },
        addToCart(state, { product }) {
            state.cart.push(product)
        },
        removeFromCart({ cart }, { productId }) {
            const idx = cart.findIndex(prd => prd._id === productId)
            cart.splice(idx, 1)
        },
        addProduct({ products }, { newProduct }){
            products.push(newProduct)
        },
        checkout(state) {
            if(state.user.balance < this.getters.cartTotal){
                showErrorMsg('Insufficient funds...')
                return
            }
            state.user.balance -= this.getters.cartTotal
            const order = {
                _id: utilService.makeId(),
                createdAt: Date.now(),
                items: state.cart,
                total: this.getters.cartTotal,
                status: 'Pending',
            }
            state.user.orders.unshift(order)
            state.cart = []
        },
        toggleOrderStatus(state, { orderId }) {
            const order = state.user.orders.find(order => order._id === orderId)
            order.status = order.status === 'Pending' ? 'Approved' : 'Pending'
        },
        addFunds({ user }, { newBalance }) {
            user.balance = newBalance
        }
    },
    getters: {
        cartTotal({ cart }) {
            return cart.reduce((acc, prd) => acc += prd.price, 0)
        },
        productCount(state) {
            return state.products?.length
        }
    }
}
export const store = createStore(storeOptions)