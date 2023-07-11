const { createStore } = Vuex

const storeOptions = {
    strict: true,
    state() {
        return {
            user: { username: 'Baba', balance: 20 },
            count: 10,
        }
    },
    mutations: {
        increment(state, { val }) {
            state.count += val
        },
    },
}
export const store = createStore(storeOptions)