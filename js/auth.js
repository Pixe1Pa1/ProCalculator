import { UserModel } from './model/UserModel.js';
import { AuthView } from './view/AuthView.js';
import { AuthController } from './controller/AuthController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new UserModel();
    const view = new AuthView();
    const controller = new AuthController(model, view);

    console.log('Auth MVC started!');
});