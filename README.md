# ProCalculator | Laboratory Work #2: Web application functionality development in Javascript
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
```
.
├── index.html              # Core calculator (Standard & Programmer)
├── about.html              # Project goals and developer info
├── login.html              # Sign-in form
├── register.html           # Sign-up form
├── profile.html            # User dashboard with settings
├── privacy.html            # Legal/Educational disclosures
├── css/
│   └── site.css            # Custom application styles
├── js/
│   ├── controller/
│   │   ├── AuthController.js       # Auth logic & navigation
│   │   ├── CalculatorController.js # Calculator operations & modes
│   │   └── ProfileController.js    # Profile update management
│   ├── model/
│   │   ├── CalculatorModel.js      # Math logic & base conversion
│   │   └── UserModel.js            # LocalStorage & Session data
│   ├── view/
│   │   ├── AuthView.js             # Form UI & error messages
│   │   ├── CalculatorView.js       # Display & button management
│   │   └── ProfileView.js          # Avatar grid & profile UI
│   ├── auth.js                     # Entry point for auth pages
│   ├── calculator.js               # Entry point for index page
│   ├── profile.js                  # Entry point for profile page
│   └── navbar.js                   # Global Navbar state
├── images/
│   ├── avatar/                     # User profile pictures
│   ├── favicon/                    # Multi-platform icons
│   └── ultra_favicon.png           # High-res icon
└── lib/                            # Bootstrap & 3rd-party libs
```
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
* **Lab Report (Google Drive):** [Google Drive](https://docs.google.com/document/d/19mfRYjEFfmH5GDbeh8yLK7HgOdQygPiwPhT8pGdqVl0/edit?usp=sharing)
