const { createStore } = Vuex

const storeOptions = {
    strict: true,
    state() {
        return {
            user: { username: 'Baba', balance: 20 },
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
            console.log(state.cart);
        },
    },
}
export const store = createStore(storeOptions)