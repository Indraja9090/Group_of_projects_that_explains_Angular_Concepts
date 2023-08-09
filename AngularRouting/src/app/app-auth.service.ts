
export class AppAuthService{
    loggedIn: boolean = false;
    //loggedIn: boolean = true;
    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }

    isAuthenticated(){
        // if return false user not Authenticated to navigate
        // if return true user  Authenticated to navigate
        return this.loggedIn 
    }
}