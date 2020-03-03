import * as Msal from "msal";

class AuthService {

    private msalInstance: Msal.UserAgentApplication;
    private request: Msal.AuthenticationParameters;

    public constructor() {
        const msalConfig: Msal.Configuration = {
            auth: {
                clientId: process.env.VUE_APP_AZURE_AD_CLIENTID,
                authority: `${process.env.VUE_APP_AZURE_AD_INSTANCE}/${process.env.VUE_APP_AZURE_AD_TENANTID}`,
                redirectUri: `${window.location.origin}${process.env.VUE_APP_AZURE_AD_CALLBACKPATH}`,
                navigateToLoginRequestUrl: true,
            },
            cache: {
                cacheLocation: "localStorage",
                storeAuthStateInCookie: true,
            },
        };
        this.request = {
            scopes: [
                msalConfig.auth.clientId,
            ],
        };
        this.msalInstance = new Msal.UserAgentApplication(msalConfig);
        this.msalInstance.handleRedirectCallback((error, response) => {
            if (!error) {
                this.msalInstance.acquireTokenSilent(this.request);
            }
        });
    }

    public login(): void {
        if (this.msalInstance) {
            this.msalInstance.loginRedirect(this.request);
        }
    }

    public logout(): void {
        if (this.msalInstance) {
            this.msalInstance.logout();
        }
    }

    public getAccount(): Msal.Account {
        if (this.msalInstance) {
            return this.msalInstance.getAccount();
        }
        return null;
    }

    public async getAccessToken(): Promise<string> {
        try {
            const response = await this.msalInstance.acquireTokenSilent(this.request);
            if (response?.accessToken !== null) {
                return response.accessToken;
            }
            else {
                this.msalInstance.acquireTokenRedirect(this.request);
            }
        }
        catch (error) {
            this.msalInstance.acquireTokenRedirect(this.request);
        }
        return "";
    }
}

const authService = new AuthService();

export { AuthService, authService };
