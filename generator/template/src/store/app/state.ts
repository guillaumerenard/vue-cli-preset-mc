import * as Msal from "msal";
import { authService } from "@/services";

interface IAppState {
    userAccount: Msal.Account;
}

const initialState: IAppState = {
    userAccount: authService.getAccount(),
};

export { IAppState, initialState };
