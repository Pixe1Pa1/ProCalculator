export class AuthView {
    constructor() {
        this.regForm = document.getElementById('registerForm');
        this.regName = document.getElementById('regName');
        this.regGender = document.getElementById('regGender');
        this.regEmail = document.getElementById('regEmail');
        this.regDate = document.getElementById('regDate');
        this.regPassword = document.getElementById('regPassword');
        this.regMessage = document.getElementById('regMessage');

        this.loginForm = document.getElementById('loginForm');
        this.logEmail = document.getElementById('logEmail');
        this.logPassword = document.getElementById('logPassword');
        this.logMessage = document.getElementById('logMessage');
        this.logCheck = document.getElementById('logCheck');
    }

    getRegisterData() {
        return {
            name: this.regName.value,
            gender: this.regGender.value,
            email: this.regEmail.value,
            date: this.regDate.value,
            password: this.regPassword.value
        };
    }

    showRegisterMessage(msg, isSuccess) {
        this.regMessage.innerHTML = `<span class="${isSuccess ? 'text-success' : 'text-danger'}">${msg}</span>`;
    }

    bindRegisterSubmit(handler) {
        if (this.regForm) {
            this.regForm.addEventListener('submit', (e) => {
                e.preventDefault(); 
                handler(this.getRegisterData());
            });
        }
    }

    getLoginData() {
        return {
            email: this.logEmail.value,
            password: this.logPassword.value,
            rememberMe: this.logCheck.checked
        };
    }

    showLoginMessage(msg, isSuccess) {
        this.logMessage.innerHTML = `<span class="${isSuccess ? 'text-success' : 'text-danger'}">${msg}</span>`;
    }

    bindLoginSubmit(handler) {
        if (this.loginForm) {
            this.loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                handler(this.getLoginData());
            });
        }
    }
}