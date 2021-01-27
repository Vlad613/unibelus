export const state = () => ({
    curse: 2.500,
    interval: null,
    curseUp: null
});

export const getters = {
    CURSE(state) {
        return state.curse;
    },
    CURSE_UP(state){
        return state.curseUp
    }

};

export const mutations = {
    CHANGE_CURSE(state) {
        state.interval === null ?
            (state.interval = setInterval(() => {
                const min = 0.020;
                const max = 0.080;
                const value = Number(Math.round((Math.random() * (max - min + 0.1) + min) + 'e' + 2) + 'e-' + 2);
                return Math.round(Math.random()) === 1 ?
                    (state.curse = state.curse + value, state.curseUp = 'up')
                    :
                    (state.curse = state.curse - value, state.curseUp = 'dawn')
            }, 15000))
            :
            clearInterval(state.interval)
    }
};

export const actions = {
    changeCurse({commit}) {
        commit("CHANGE_CURSE");
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

