# Formly — Interactive Sign-Up Form

A modern and responsive **Sign-Up Form** built with **HTML, CSS, and Vanilla JavaScript**.

Formly provides a clean SaaS-style registration experience with real-time validation, password strength feedback, responsive design, and a success confirmation popup.

## ✨ Features

- Fully responsive mobile-first design
- Real-time form validation
- Full name, email, and phone validation
- Password strength checker (Weak / Medium / Strong)
- Live password requirement indicators
- Show / hide password
- Terms & Privacy Policy validation
- Input focus and error states
- Success confirmation popup
- Smooth CSS animations
- No frameworks or external JavaScript libraries

## 🛠️ Built With

- **HTML5** — Structure & form elements
- **CSS3** — Responsive design, Flexbox, animations & UI styling
- **JavaScript (ES6+)** — DOM manipulation, validation & interactions
- **Google Fonts (Inter)** — Typography

## 📂 Project Structure

```text
Interactive Form/
├── index.html
├── styles.css
├── index.js
├── README.md
└── assets/
    
```

## 🔐 Validation

The form validates:

- **Name:** minimum 3 characters
- **Email:** valid email structure
- **Phone:** requires a country code (`+`)
- **Password:** minimum 8 characters, uppercase, lowercase, number, and special character
- **Privacy Policy:** must be accepted before submission

### Password Strength

| Strength | Requirements |
|---|---|
| Weak | Does not meet the required rules |
| Medium | Length + uppercase + lowercase + number |
| Strong | All password requirements |

## 📱 Responsive Design

The interface uses a **mobile-first approach**:

- **Mobile:** centered sign-up card
- **Desktop:** split-screen layout with Formly branding and sign-up form

## 🌐 Live Demo

[Live Demo](https://ammarmost19.github.io/Interactive-Form/)

## 🔮 Future Improvements

- Connect the form to a real backend API
- Add server-side validation
- Implement real user authentication
- Add password confirmation
- Improve accessibility
- Add loading and API error states

## 👨‍💻 Author

**Ammar Mostafa**

Frontend Developer & Computer Science Student

- GitHub: [@ammarmost19](https://github.com/ammarmost19)
- LinkedIn: [Ammar Mostafa](https://www.linkedin.com/in/ammar-mostafa-mohammed)

---

Built as a frontend practice and portfolio project.
