# 🐶 Bez Kake

A modern and responsive React website for promoting dog training services and allowing customers to contact the trainer directly through a contact form.

---

## Features

* Responsive design
* Modern user interface
* Service presentation section
* Image gallery
* Contact information section
* Contact form
* Email sending functionality powered by EmailJS
* Success and error notifications
* Built with React and Vite

---

## Tech Stack

* React
* Vite
* CSS
* React Icons
* EmailJS

---

# Getting Started

## Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/bezKakeWebsite.git
cd bezKakeWebsite
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# Production Build

To create an optimized production build:

```bash
npm run build
```

The generated files will be located inside:

```
dist/
```

---

# Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Contact Form

The contact form uses **EmailJS**, allowing users to send messages directly to your email address without requiring a backend server.

---

# EmailJS Setup

## 1. Create an account

Create an account at:

https://www.emailjs.com/

---

## 2. Create an Email Service

Connect your email provider (Gmail, Outlook, etc.) and create a service.

You will receive a:

* Service ID

Example:

```
service_xxxxxx
```

---

## 3. Create an Email Template

Create a template and use variables matching the data sent from the React application.

Example:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>Nova poruka sa sajta</div>

  <div style="margin-top: 20px; padding: 15px 0; border-top: 1px dashed lightgrey;">

    <p><strong>Ime:</strong> {{ime}}</p>
    <p><strong>Telefon:</strong> {{telefon}}</p>

    <p style="margin-top: 10px;">
      <strong>Poruka:</strong><br />
      {{poruka}}
    </p>

  </div>
</div>
```

You will receive a:

* Template ID

Example:

```
template_xxxxxx
```

---

## 4. Obtain the Public Key

Navigate to:

**Account → API Keys**

Copy your:

* Public Key

---

# Environment Variables

For security reasons, sensitive values should not be hardcoded inside the source code.

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

---

# Using Environment Variables

Example:

```javascript
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    ime: formData.ime,
    telefon: formData.telefon,
    poruka: formData.poruka
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

---

# .gitignore

Add the following line to prevent exposing sensitive information:

```
.env
```

---

# .env.example

Change this file `.env.example` file inside the repository to `.env` and add your EmailJS keys:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```


---

# Running the Project After Cloning

1. Clone the repository.

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`.

4. Start the application:

```bash
npm run dev
```

---

# Future Improvements

* Backend integration
* Database support
* Appointment scheduling
* Admin dashboard
* Blog section
* WhatsApp integration
* SEO optimization

---

# Author

**Uroš Milošević**

Master of Electrical Engineering and Computer Science

Jagodina, Serbia

---

Built with ❤️ using React and Vite.
