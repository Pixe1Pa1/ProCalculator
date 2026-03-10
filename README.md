# ProCalculator | Laboratory Work #2: JavaScript Development with MVC Pattern
**Course:** Web Design  
**Student:** Poliakov Yehor  
**Group:** KV-33  

## Assignment
The objective of this laboratory work is to implement dynamic functionality for the previously developed static web interface. The core requirements include:
* Using the **MVC** design pattern.
* Organizing code into **ES6 Modules**.
* Implementing logic without external frameworks.
* Data persistence using **localStorage/sessionStorage**.
* Adherence to the **Airbnb JavaScript Style Guide**.

## Project Overview
ProCalculator is a dual-mode application (Standard & Programmer) that now features a fully functional engine. Beyond calculations, the system includes a complete User Management module (Registration, Login, Profile editing).

### Key Features:
* **Standard Mode:** Basic arithmetic, percentages, and floating-point math.
* **Programmer Mode:** Bitwise operations (AND, OR, XOR, NOT, Lsh, Rsh), Modulo, and real-time conversion between **HEX, DEC, OCT, and BIN**.
* **Auth System:** Secure-like login with "Remember Me" functionality.
* **Profile Management:** Dynamic avatar selection and user data updates stored in the browser's memory.

## Developer Information
* **Institution:** Igor Sikorsky Kyiv Polytechnic Institute (KPI)
* **Faculty:** Faculty of Software Systems and Applied Mathematics (FSSAM)
* **Specialty:** 123 – Computer Engineering
* **Developer:** Poliakov Yehor, Group KV-33

## Project Structure
The project is strictly divided into three logical layers:
    1.  **Model:** Manages data and business logic (e.g., `CalculatorModel.js` handles math, `UserModel.js` handles localStorage).
    2.  **View:** Handles DOM manipulations and event capturing (e.g., `CalculatorView.js` updates the display).
    3.  **Controller:** Acts as a bridge, responding to user input from the View and updating the Model (e.g., `AuthController.js`).
The repository contains the following organized structure:
* `js/`
    ├── `controller/`
    │   ├── `AuthController.js`       # Logic for Login/Register
    │   ├── `CalculatorController.js` # Logic for Calc modes & operations
    │   └── `ProfileController.js`    # Logic for User updates
    ├── `model/`
    │   ├── `CalculatorModel.js`      # Pure math & bitwise logic
    │   └── `UserModel.js`            # LocalStorage & Session management
    ├── `view/`
    │   ├── `AuthView.js`             # Form handling & UI feedback
    │   ├── `CalculatorView.js`       # Display & Button grid management
    │   └── `ProfileView.js`          # Dynamic avatar grid & profile forms
    ├── `auth.js`                     # Entry point for Auth pages
    ├── `calculator.js`               # Entry point for Index page
    ├── `profile.js`                  # Entry point for Profile page
    └── `navbar.js`                   # Global Navbar state management
* `index.html` — The core calculator interface (Standard & Programmer modes).
* `about.html` — Information about the project goals and developer.
* `login.html` & `register.html` — User authentication forms.
* `profile.html` — User profile dashboard with tabular data.
* `privacy.html` — Legal and educational project disclosures.
* `css/` — Contains `site.css` with custom styles.
* `images/`
    ├──`avatar/` (profile pictures), 
    ├──`favicon/` (multi-platform icons)
    └──`ultra_favicon.png` (high resolution icon).
* `lib/` — Third-party libraries including Bootstrap.

## Technologies Used
* JavaScript (ES6+): Classes, Modules, Template Literals, Destructuring.
* Storage: localStorage (persistent) and sessionStorage (session-only).
* UI Framework: Bootstrap 5.3 (Responsive grid and components).
* Environment: Visual Studio Code.

## Credits & Resources
* **Calculator:** The calculator's logic and structure were inspired by a [GitHub Gist by amogh9594](https://gist.github.com/amogh9594/920500a719a0a047a6e5e6370dea4967), subsequently refactored and adapted to the Bootstrap 5 framework.
* **Favicons:** All multi-platform icons were generated using [RealFaviconGenerator](https://realfavicongenerator.net/).
* **Google Fonts:** Montserrat typography for a modern aesthetic.

## Educational Status and Data Privacy
As this is a static-logic educational site created solely for academic purposes:
* **No Real Data Needed:** Users are encouraged not to provide real personal information, passwords, or emails.
* **Data Handling:** Any data entered into forms is used only to demonstrate UI functionality and is not stored or shared with third parties.
* **Non-Commercial:** This site does not process payments, display advertisements, or track users for commercial gain.

## Project Links
* **Live Demo (GitHub Pages):** [GitHub Pages](https://pixe1pa1.github.io/ProCalculator/)
* **Lab Report (Google Drive):** [Google Drive](https://docs.google.com/document/d/1ub7Dl_VVT1PXcg9QXrwfUQ0RqVkOENBkfTswM0agQf0/edit?usp=sharing)
