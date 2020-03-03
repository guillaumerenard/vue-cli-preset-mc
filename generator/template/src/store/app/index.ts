import { Module } from "vuex";
import { IAppState, initialState } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const app: Module<IAppState, any> = {
    namespaced: true,
    state: initialState,
    getters,
    mutations,
    actions,
};

export { app };
