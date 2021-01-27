import Vue from 'vue'
import Vuex from 'vuex'

import data from "./modules/data";
import names from "./modules/names";
import basket from "./modules/basket";
import exchange from "./modules/exchange";


Vue.use(Vuex);

export default new Vuex.Store ({
    modules: {
        data,
        names,
        basket,
        exchange
    }
});
