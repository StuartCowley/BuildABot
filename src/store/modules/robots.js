import axios from 'axios';

export default {
    namespaced: true,
    state: {
        cart: [],
        parts: null,
    },
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot)
        },
        updateParts(state, parts) {
            state.parts = parts
        }
    },
    actions: {
        getParts({ commit }) {
            axios.get('/api/parts')
            .then( result => commit('updateParts', result.data) )
            .catch(window.console.error)
        },
        addRobotToCart({commit, state}, robot) {
            const cart = [...state.cart, robot];
            return axios.post('./api/cart', cart)
            .then(() => commit('addRobotToCart', robot));
        }
    },
    getters: {
        cartSaleItems(state) {
            return state.cart.filter(robot => robot.onSale)
        }
    }
}