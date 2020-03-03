import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
    public get isAuthenticated(): boolean {
        return this.$store.getters["app/isAuthenticated"];
    }

    public logout(): void {
        this.$store.dispatch("app/logout");
    }
}
