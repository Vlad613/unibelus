import Cookies from 'js-cookie'

export const state = () => ({
    basket: [],
    quantity: [],
});

export const getters = {
    BASKET(state) {
        return state.basket;
    },
    QUANTITY_BASKET(state) {
        return state.quantity;
    },
};

export const mutations = {
    ADD_TO_BASKET(state, payload) {
        state.basket.findIndex(x => x.T === payload.T) !== -1 ?
            (((this.state.data.data[state.basket.findIndex(x => x.T === payload.T)].P > 0) && ((this.state.data.data[this.state.data.data.findIndex(x => x.T === payload.T)].P - state.quantity[state.basket.findIndex(x => x.T === payload.T)]) !== 0) ?
                state.quantity.splice(state.basket.findIndex(x => x.T === payload.T), 1, ++(state.quantity[state.basket.findIndex(x => x.T === payload.T)]))
                :
                alert("Больше нет в наличии")))
            :
            (state.basket.push(payload),
                state.quantity.push(1))
    },
    INPUT_TO_BASKET(state, payload) {
        state.quantity.splice(state.basket.findIndex(x => x.T === payload.item.T), 1, payload.value)
    },
    REMOVE_FROM_BASKET(state, payload) {
        state.basket.findIndex(x => x.T === payload.T) !== -1 ?
            ((state.quantity[state.basket.findIndex(x => x.T === payload.T)] === 0 || (state.quantity[state.basket.findIndex(x => x.T === payload.T)] === 1)) ?
                (state.quantity.splice(state.basket.findIndex(x => x.T === payload.T), 1),
                        state.basket.splice(state.basket.findIndex(x => x.T === payload.T), 1)
                    )
                :
                state.quantity.splice(state.basket.findIndex(x => x.T === payload.T), 1, --(state.quantity[state.basket.findIndex(x => x.T === payload.T)])))
            :
            alert('Нет в корзине')
    },

    GET_BASKET_FROM_COOKIES(state, payload) {
        state.basket = payload.payload
    },
    GET_QUANTITY_FROM_COOKIES(state, payload) {
        state.quantity = payload.payload
    },
    SET_BASKET_COOKIES(state) {
        Cookies.set('basket', JSON.stringify(state.basket))
    },
    SET_QUANTITY_COOKIES(state) {
        Cookies.set('quantity', JSON.stringify(state.quantity))
    },
};

export const actions = {
    addToBasket({commit}, item) {
        commit("ADD_TO_BASKET", item);
    },
    removeFromBasket({commit}, item) {
        commit("REMOVE_FROM_BASKET", item);
    },
    inputToBasket({commit}, item) {
        commit("INPUT_TO_BASKET", item);
    },
    getCookieBasket({commit}, payload) {
        commit('GET_BASKET_FROM_COOKIES', {payload})
    },
    getCookieQuantity({commit}, payload) {
        commit('GET_QUANTITY_FROM_COOKIES', {payload})
    },
    setCookies({commit}) {
        commit('SET_BASKET_COOKIES'),
            commit('SET_QUANTITY_COOKIES')
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

