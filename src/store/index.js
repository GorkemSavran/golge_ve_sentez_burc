import Vue from "vue";
import Vuex from "vuex";
import firebaseFunc from "./modules/firebaseFunc";

//Load Vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules: {
        firebaseFunc
    }
})