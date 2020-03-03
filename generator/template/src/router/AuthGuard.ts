import { NavigationGuard } from "vue-router";
import { store } from "@/store";

export const authGuard: NavigationGuard = async (to, from, next) => {
    await store.dispatch("app/login");
    next();
};
