export class UserModel {
    constructor() {
        this.dbName = 'proCalcUsers';
        this.sessionName = 'proCalcCurrentUser';
    }

    getUsers() {
        const users = localStorage.getItem(this.dbName);
        return users ? JSON.parse(users) : [];
    }

    saveUsers(users) {
        localStorage.setItem(this.dbName, JSON.stringify(users));
    }

    findUserByEmail(email) {
        const users = this.getUsers();
        return users.find(user => user.email === email);
    }

    registerUser(userData) {
        if (this.findUserByEmail(userData.email)) {
            return { success: false, message: 'User with this email already exists!' };
        }

        const users = this.getUsers();
        users.push(userData);
        this.saveUsers(users);

        return { success: true, message: 'Registration successful!' };
    }

    loginUser(email, password, rememberMe) {
        const user = this.findUserByEmail(email);

        if (!user) {
            return { success: false, message: 'User not found!' };
        }
        if (user.password !== password) {
            return { success: false, message: 'Incorrect password!' };
        }

        if (rememberMe) {
            localStorage.setItem(this.sessionName, JSON.stringify(user));
        } else {
            sessionStorage.setItem(this.sessionName, JSON.stringify(user));
        }
        return { success: true, message: 'Login successful!' };
    }

    getCurrentUser() {
        const user = localStorage.getItem(this.sessionName) || sessionStorage.getItem(this.sessionName);
        return user ? JSON.parse(user) : null;
    }

    updateUser(email, newData) {
        let users = this.getUsers();
        let userIndex = users.findIndex(u => u.email === email);

        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...newData, email: email };
            this.saveUsers(users);

            if (localStorage.getItem(this.sessionName)) {
                localStorage.setItem(this.sessionName, JSON.stringify(users[userIndex]));
            } else if (sessionStorage.getItem(this.sessionName)) {
                sessionStorage.setItem(this.sessionName, JSON.stringify(users[userIndex]));
            }
            return { success: true, message: 'Profile updated successfully!' };
        }
        return { success: false, message: 'User not found!' };
    }

    logout() {
        localStorage.removeItem(this.sessionName);
        sessionStorage.removeItem(this.sessionName);
    }
}