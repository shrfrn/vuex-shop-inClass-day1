const { createStore } = Vuex

const storeOptions = {
    state() {
        return {
            count: 10,
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
    },
}
export const store = createStore(storeOptions)