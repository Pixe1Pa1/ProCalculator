export class AuthController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindRegisterSubmit(this.handleRegister.bind(this));
        this.view.bindLoginSubmit(this.handleLogin.bind(this));
        this.checkUrlForErrors();
    }
    
    handleRegister(userData) {
        this.view.showRegisterMessage('', true);
        if (!userData.date) {
            this.view.showRegisterMessage('Please select date!', false);
            return;
        }

        const selectedDate = new Date(userData.date);
        const today = new Date();

        if (!userData.name.trim()) {
            this.view.showRegisterMessage('Name cannot be empty!', false);
            return;
        }
        if (!userData.password.trim() || userData.password.length < 4) {
            this.view.showRegisterMessage('Password min 4 chars!', false);
            return;
        }
        if (selectedDate > today || selectedDate.getFullYear() < 1900) {
            this.view.showRegisterMessage('Invalid date!', false);
            return;
        }

        const result = this.model.registerUser(userData);
        this.view.showRegisterMessage(result.message, result.success);

        if (result.success) {
            setTimeout(() => window.location.href = 'login.html', 1500);
        }
    }

    handleLogin(loginData) {
        this.view.showLoginMessage('', true);
        const result = this.model.loginUser(loginData.email, loginData.password, loginData.rememberMe);
        this.view.showLoginMessage(result.message, result.success);

        if (result.success) {
            setTimeout(() => window.location.href = 'profile.html', 1000);
        }
    }

    checkUrlForErrors() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('error') === 'profile') {
            this.view.showLoginMessage('Please log in first!', false);
            window.history.replaceState(null, '', 'login.html');
        }
    }
}