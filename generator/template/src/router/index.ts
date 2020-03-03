import Vue from "vue";
import Router from "vue-router";
import { authGuard } from "./AuthGuard";
import {
    Home,
    NotFound,
} from "@/views";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/auth",
            redirect: "/",
        },
        {
            path: "*",
            name: "not-found",
            component: NotFound,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

router.beforeEach(authGuard);

export { router };
