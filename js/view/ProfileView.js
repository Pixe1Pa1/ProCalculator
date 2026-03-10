export class ProfileView {
    constructor() {
        this.profName = document.getElementById('profileName');
        this.profEmail = document.getElementById('profileEmail');
        this.profGender = document.getElementById('profileGender');
        this.profDate = document.getElementById('profileDate');
        this.profPassword = document.getElementById('profilePassword');
        this.profMessage = document.getElementById('profileMessage');
        this.btnSave = document.getElementById('btnSaveChanges');

        this.profileAvatar = document.getElementById('profileAvatar'); 
        this.avatarOptionsContainer = document.getElementById('avatarOptions');
        this.selectedAvatarInput = document.getElementById('selectedAvatar');

        this.avatarNames = [
            'panda', 'bear', 'chicken', 'dog_1', 'dog_2', 'giraffe', 'gorilla', 'lion', 'meerkat', 'rabbit',
        ];

        this.initAvatarSelection();
    }

initAvatarSelection() {
        this.avatarOptionsContainer.innerHTML = ''; 
        
        this.avatarNames.forEach(name => {
            const img = document.createElement('img');
            img.src = `images/avatar/${name}.png`;
            img.className = 'avatar-option rounded-circle border';
            img.style.width = '70px';
            img.style.height = '70px';
            img.style.objectFit = 'cover';
            img.style.cursor = 'pointer';
            img.dataset.avatar = name;
            this.avatarOptionsContainer.appendChild(img);
        });

        this.avatarOptions = document.querySelectorAll('.avatar-option');

        this.avatarOptions.forEach(img => {
            img.addEventListener('click', () => {
                this.avatarOptions.forEach(i => i.classList.remove('border-primary', 'border-4'));
                img.classList.add('border-primary', 'border-4');
                
                const avatarName = img.dataset.avatar;
                this.selectedAvatarInput.value = avatarName;
                this.profileAvatar.src = `images/avatar/${avatarName}.png`;
            });
        });
    }

    renderUserData(user) {
        if (!user) return;
        this.profName.value = user.name || '';
        this.profEmail.innerText = user.email || '';
        this.profGender.value = user.gender || 'Male';
        this.profDate.value = user.date || '';
        this.profPassword.value = user.password || '';

        const avatar = user.avatar || 'panda';
        this.selectedAvatarInput.value = avatar;
        this.profileAvatar.src = `images/avatar/${avatar}.png`;
        
        this.avatarOptions.forEach(i => i.classList.remove('border-primary', 'border-4'));
        const activeImg = document.querySelector(`.avatar-option[data-avatar="${avatar}"]`);
        if (activeImg) activeImg.classList.add('border-primary', 'border-4');
    }

    getUpdatedData() {
        return {
            name: this.profName.value,
            gender: this.profGender.value,
            date: this.profDate.value,
            password: this.profPassword.value,
            avatar: this.selectedAvatarInput.value
        };
    }

    showMessage(msg, isSuccess) {
        this.profMessage.innerHTML = `<span class="${isSuccess ? 'text-success' : 'text-danger'}">${msg}</span>`;
    }

    bindSaveChanges(handler) {
        if (this.btnSave) {
            this.btnSave.addEventListener('click', () => {
                handler(this.getUpdatedData());
            });
        }
    }
}