import { ActionTree } from "vuex";
import {
    LOGOUT,
} from "./mutations-types";
import { IAppState } from "./state";
import { authService } from "@/services";

export const actions: ActionTree<IAppState, any> = {
    async login(context): Promise<void> {
        if (!authService.getAccount()) {
            authService.login();
        }
    },

    async logout(context): Promise<void> {
        authService.logout();
        context.commit(LOGOUT);
    },
};
