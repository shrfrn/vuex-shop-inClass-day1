const { createStore } = Vuex

const storeOptions = {
    strict: true,
    state() {
        return {
            user: { username: 'Baba', balance: 20 },
            count: 10,
            products: null,
        }
    },
    mutations: {
        increment(state, { val }) {
            state.count += val
        },
        setProducts(state, { products }) {
            state.products = products
        }
    },
}
export const store = createStore(storeOptions)