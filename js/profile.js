import { UserModel } from './model/UserModel.js';
import { ProfileView } from './view/ProfileView.js';
import { ProfileController } from './controller/ProfileController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new UserModel();
    const view = new ProfileView();
    const controller = new ProfileController(model, view);
});