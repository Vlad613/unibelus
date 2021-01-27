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
        state.basket.indexOf(payload) !== -1 ?
            (((this.state.data.data[state.basket.indexOf(payload)].P > 0) && ((this.state.data.data[this.state.data.data.indexOf(payload)].P - state.quantity[state.basket.indexOf(payload)]) !== 0) ?
                state.quantity.splice(state.basket.indexOf(payload), 1, ++(state.quantity[state.basket.indexOf(payload)]))
                :
                alert("Больше нет в наличии")))
            :
            (state.basket.push(payload),
                state.quantity.push(1))
    },
    INPUT_TO_BASKET(state, payload) {
        (state.quantity.splice(state.basket.indexOf(payload.item), 1, payload.value))
    },
    REMOVE_FROM_BASKET(state, payload) {
        state.basket.indexOf(payload) !== -1 ?
            ((state.quantity[state.basket.indexOf(payload)] === 0 || (state.quantity[state.basket.indexOf(payload)] === 1)) ?
                (state.basket.splice(state.basket.indexOf(payload), 1),
                    state.quantity.splice(state.basket.indexOf(payload), 1))
                :
                state.quantity.splice(state.basket.indexOf(payload), 1, --(state.quantity[state.basket.indexOf(payload)])))
            :
            alert('Нет в корзине')
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

};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

