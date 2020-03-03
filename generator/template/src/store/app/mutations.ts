import { MutationTree } from "vuex";
import * as Msal from "msal";
import {
    LOGIN,
    LOGOUT,
} from "./mutations-types";
import { IAppState } from "./state";

export const mutations: MutationTree<IAppState> = {
    [LOGIN](state, payload: Msal.Account): void {
        state.userAccount = payload;
    },

    [LOGOUT](state): void {
        state.userAccount = null;
    },
};
