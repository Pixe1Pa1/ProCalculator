import { UserModel } from './model/UserModel.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new UserModel();
    const currentUser = model.getCurrentUser();

    const navUserName = document.getElementById('navUserName');
    const navUserAvatar = document.getElementById('navUserAvatar');

    const profileLink = document.querySelector('a[href="profile.html"]');
    const loginLink = document.querySelector('a[href="login.html"]');
    const registerLink = document.querySelector('a[href="register.html"]');
    const logoutBtn = document.querySelector('a.text-danger');
    const divider = document.querySelector('.dropdown-divider');

    if (currentUser) {
        if (navUserName) navUserName.textContent = currentUser.name;
        if (navUserAvatar) {
            const avatarName = currentUser.avatar || 'panda';

            if (avatarName.includes('/')) {
                navUserAvatar.src = avatarName;
            } else {
                navUserAvatar.src = `images/avatar/${avatarName}.png`;
            }
        }

        if (profileLink) profileLink.parentElement.style.display = 'block';
        if (logoutBtn) logoutBtn.parentElement.style.display = 'block';
        if (divider) divider.parentElement.style.display = 'block';

        if (loginLink) loginLink.parentElement.style.display = 'none';
        if (registerLink) registerLink.parentElement.style.display = 'none';
    } else {
        if (navUserName) navUserName.textContent = '';
        if (navUserAvatar) navUserAvatar.src = 'images/avatar/panda.png';

        if (profileLink) profileLink.parentElement.style.display = 'none';
        if (logoutBtn) logoutBtn.parentElement.style.display = 'none';
        if (divider) divider.parentElement.style.display = 'none';

        if (loginLink) loginLink.parentElement.style.display = 'block';
        if (registerLink) registerLink.parentElement.style.display = 'block';
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            model.logout();
            window.location.href = 'login.html';
        });
    }
});