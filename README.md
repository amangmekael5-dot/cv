# Amanuel Kassie - IT Student Portfolio & CV
**Dire Dawa University (DDU), Institute of Technology**

A modern, high-performance **Portfolio Website** and **ATS-Optimized Curriculum Vitae (CV)** designed specifically for **Amanuel Kassie**, Information Technology (IT) student at Dire Dawa University (DDU) specializing in Full-Stack Web and Software Development.

---

## 🌟 Key Features

### 1. Interactive Web Portfolio (`index.html`)
- **Dark & Light Mode**: Built-in toggle with persistent user preference storage.
- **Dynamic Typing Animation**: Cycles through your core roles and university affiliation.
- **Glassmorphic UI**: Ultra-clean, modern aesthetic with smooth micro-interactions.
- **Skills Matrix**: Categorized technical stacks with visual skill level meters.
- **Interactive Project Filtering**: Filter projects seamlessly by category (All, Full-Stack, Backend & DB, Frontend & UI).
- **Interactive Code Card**: Highlights your profile and tech stack directly in code syntax.
- **Academic Timeline**: Highlights your degree at Dire Dawa University (Institute of Technology), coursework, and achievements.
- **Contact Form & Quick Actions**: Copy-to-clipboard for email/phone with instant toast alerts.

### 2. ATS-Friendly Printable CV / Resume (`resume.html`)
- **Applicant Tracking System (ATS) Compliant**: Simple, single-column standard semantic layout designed to pass HR scanning algorithms.
- **1-Click "Save as PDF"**: Press the **"Print / Save as PDF"** button (or `Ctrl + P`) to generate a clean, professional A4 / Letter PDF CV.
- **Pre-loaded Academic & Project Experience**: Features high-impact descriptions of your 4 real projects (DDU Dormitory Management System, Online Examination Platform, Online Electronics Selling, and Campus Café Check-In) with quantifiable metrics.

### 3. Quick-Customization Engine (`js/config.js`)
- Edit your name, phone number, email, LinkedIn, GitHub, and bio **in one single file** (`js/config.js`).

---

## 🚀 How to View and Use Right Now

You do **NOT** need Node.js or Python installed! Everything is built with pure, modern vanilla HTML5, CSS3, and JavaScript.

### Step 1: Open in Your Browser
- Simply double-click **`index.html`** or right-click and choose **Open with > Google Chrome** (or Microsoft Edge / Firefox).
- To see the CV directly, open **`resume.html`**.

### Step 2: Export Your CV as a PDF
1. Open **`resume.html`** in your browser.
2. Click the blue **"Print / Save as PDF"** button in the top bar (or press `Ctrl + P`).
3. In the print dialog:
   - **Destination**: Choose **"Save as PDF"**.
   - **Margins**: Set to **"Default"** or **"None"**.
   - **Headers and Footers**: Uncheck this box for a clean, formal document.
4. Click **Save**!

---

## ✏️ How to Customize Your Details (Takes 2 Minutes)

Open **`js/config.js`** in any text editor (like VS Code or Notepad):

```javascript
const PORTFOLIO_DATA = {
  personal: {
    fullName: "Amanuel Kassie",
    badgeTitle: "B.Sc. Information Technology Student",
    university: "Dire Dawa University (DDU)",
    department: "Department of Information Technology, Institute of Technology",
    location: "Dire Dawa, Ethiopia",
    email: "amangmekael5@gmail.com",
    telegram: "https://t.me/aman16you"
    // ...
  }
};
```
Whenever you update `js/config.js`, your website will update its text and projects automatically.

---

## 🌐 How to Publish Online for FREE (GitHub Pages)

To share your portfolio with recruiters, friends, and interviewers on a live link:
1. Create a free account at [GitHub.com](https://github.com).
2. Create a new repository named `my-portfolio` (or `username.github.io`).
3. Upload all the files from this folder (`index.html`, `resume.html`, `css/`, `js/`, `assets/`).
4. Go to **Repository Settings** > **Pages** (under the Code and automation menu).
5. Under **Branch**, select `main` and root `/`, then click **Save**.
6. Within 1-2 minutes, GitHub will give you a live website link like:
   `https://yourusername.github.io/my-portfolio/`

---

## 📁 File Structure

```text
cv/
├── index.html          # Main interactive portfolio website
├── resume.html         # Dedicated ATS-compliant printable CV
├── README.md           # Instructions and documentation
├── css/
│   └── style.css       # Complete stylesheet (Responsive, Dark/Light, Print)
├── js/
│   ├── config.js       # All customizable data (Name, contact, projects, skills)
│   └── main.js         # Interactive logic (Typing effect, filters, theme toggle)
└── assets/             # Folder for personal photo or project screenshots
```

© 2026 Dire Dawa University (DDU) IT Student Portfolio
