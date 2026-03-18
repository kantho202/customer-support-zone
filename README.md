
# 🎫 CS — Ticket System

🔗 **Live Demo:** [https://playful-creponne-10d8e6.netlify.app/](https://playful-creponne-10d8e6.netlify.app/)

A clean, responsive **Customer Support Ticket Management** app built with React 19 and Tailwind CSS. Support agents can view open tickets, move them into progress, and mark them as resolved — all in one streamlined interface.

---

## ✨ Features

- 📋 **Ticket Board** — Browse all customer support tickets with title, description, priority, and status
- 🚦 **Priority Badges** — Color-coded labels: 🔴 High, 🟡 Medium, 🟢 Low
- ⚡ **One-Click Triage** — Click any ticket card to instantly move it to the Task Status panel
- ✅ **Complete & Resolve** — Mark tasks as done; they move to the Resolved panel automatically
- 📊 **Live Stats Banner** — Real-time counters for In-Progress and Resolved tickets
- 🔔 **Toast Notifications** — Instant feedback on every action via `react-toastify`
- 📱 **Fully Responsive** — Mobile-friendly layout with a collapsible navbar

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework (uses `use()` hook for async data) |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI v5](https://daisyui.com/) | Component library (Navbar, Buttons, Footer) |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |

---

## 📁 Project Structure

```
src/
├── App.jsx                        # Root component — state management & layout
├── main.jsx                       # Entry point
├── CustomerCard/
│   └── CustomerCard.jsx           # Individual ticket card
└── Components/
    ├── Navbar/
    │   ├── Navbar.jsx             # Top navigation bar
    │   ├── Banner/
    │   │   └── Banner.jsx         # Stats banner (In-Progress / Resolved counts)
    │   └── Footer/
    │       └── Footer.jsx         # Site footer
    ├── Customers/
    │   └── Customers.jsx          # Ticket grid (renders CustomerCards)
    ├── TaskStatus/
    │   └── TaskStatus.jsx         # In-progress task panel
    ├── ResolvedTask/
    │   └── ResolvedTask.jsx       # Resolved tasks list
    └── ResolvedCard/
        └── ResolvedCard.jsx       # Individual resolved ticket card

public/
└── Customers.json                 # Mock ticket data (10 sample tickets)
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/your-username/customer-support-zone.git
cd customer-support-zone

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🔄 How It Works

```
Customer Tickets (left panel)
        │
        │  click a ticket
        ▼
Task Status Panel (right panel)
        │
        │  click "Complete"
        ▼
Resolved Tasks (below Task Status)
```

1. All tickets are fetched from `public/Customers.json` using React 19's `use()` hook with `Suspense`
2. Clicking a ticket card adds it to the **Task Status** panel and fires a toast
3. Clicking **Complete** removes it from Task Status, adds it to **Resolved**, and updates the banner counters

---

## 📦 Data Shape

Each ticket in `Customers.json` follows this structure:

```json
{
  "id": "#1001",
  "title": "Login Issues - Can't Access Account",
  "description": "Customer is unable to log in...",
  "priority": "HIGH PRIORITY",
  "status": "Open",
  "customer": "John Smith",
  "date": "1/15/2024"
}
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ using React & Tailwind CSS</p>
=======
Create a README file to answer the following question-

What is JSX, and why is it used?
Ans :JSX stands for JavaScript XML its used to helped jacascript function
What is the difference between State and Props?
Ans : props is parent component.it used parent to child .State is own component.state use to dynamic.
What is the useState hook, and how does it work?
Ans : useState is a hook in React that lets a component store and manage its own data
How can you share state between components in React?
Ans : using props parent to child.
How is event handling done in React?
Ans :use array function
>>>>>>> d67c9d0da8146ceedb72a6f966a3b5f6a8457b87
