const { createStore } = Vuex

const storeOptions = {
    strict: true,
    state() {
        return {
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