import { GetterTree } from "vuex";
import { IAppState } from "./state";

const getters: GetterTree<IAppState, any> = {
    isAuthenticated(state: IAppState): boolean {
        return !(!state.userAccount);
    },
};

export { getters };
