import Vue from 'vue'
import Vuex from 'vuex'

import data from "./modules/data";
import basket from "./modules/basket";


Vue.use(Vuex);

export default new Vuex.Store ({
    modules: {
        data,
        basket,
    }
});
