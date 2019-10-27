export class UserChangePasswordModel {
    login: string;
    oldPassword: string;
    newPassword: string;

    constructor(login: string, oldPassword: string, newPassword) {
        this.login = login;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
}