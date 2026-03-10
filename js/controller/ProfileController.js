export class ProfileController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.currentUser = this.model.getCurrentUser();

        if (!this.currentUser) {
            window.location.href = 'login.html?error=profile';
            return;
        }

        this.view.renderUserData(this.currentUser);
        this.view.bindSaveChanges(this.handleSave.bind(this));
    }

    handleSave(newData) {
        this.view.showMessage('', true);
        if (!newData.date) {
            this.view.showMessage('Please select your birth date!', false);
            return;
        }

        const selectedDate = new Date(newData.date);
        const today = new Date();

        if (!newData.name.trim()) {
            this.view.showMessage('Name cannot be empty!', false);
            return;
        }
        if (!newData.password.trim() || newData.password.length < 4) {
            this.view.showMessage('Password must be at least 4 characters!', false);
            return;
        }
        if (selectedDate > today) {
            this.view.showMessage('Birth date cannot be in the future!', false);
            return;
        }
        if (selectedDate.getFullYear() < 1900) {
            this.view.showMessage('Please enter a realistic year (1900+)!', false);
            return;
        }

        const result = this.model.updateUser(this.currentUser.email, newData);

        if (result.success) {
            this.currentUser = this.model.getCurrentUser();

            const navName = document.getElementById('navUserName');
            if (navName) navName.textContent = this.currentUser.name;
            const navAvatar = document.getElementById('navUserAvatar');
            if (navAvatar) {
                const avatarName = this.currentUser.avatar || 'panda';
                navAvatar.src = `images/avatar/${avatarName}.png`;
            }
        }
        this.view.showMessage(result.message, result.success);
    }
}