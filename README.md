# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https:/# Reading List

A book tracking application that helps readers manage their reading list, track progress, and keep notes on books they've read or want to read.

---

## Team Members

| Full Name | Role | GitHub Username | Assigned Atomic Task |
|-----------|------|-----------------|---------------------|
| Cabras, Ark Jeremy |Tester| @jevo1 | feature/add-book |
| Cerna, Ronald |Lead Developer  | @Rcerna24 | feature/status-filter |
| Compendio, Jake | UI / UI Developer | @arcana022719 | feature/book-list |
| Rojas, Rose Ann | Project Manager | @RADR-V | feature/reading-notes |
| Suico, Gian Carlo | Feautre Developer | @kindocarloo | feature/mark-status |
| Vega, Geryme | Feautre Developer | @gerymevega | feature/edit-delete |

---

## Features Implemented

- [ ] Add Book - Add books with title, author, genre, status
- [ ] Book List - Display all books in clean layout
- [ ] Filter by Status - Filter by Want to Read, Reading, Finished
- [ ] Reading Notes - Add and view personal notes per book
- [ ] Mark Status - Change reading status
- [ ] Edit Book - Modify book details
- [ ] Delete Book - Remove books with confirmation
- [ ] [Add any additional features implemented]

---

## Technology Stack

- **Frontend Framework:** React
- **Language:** TypeScript / JavaScript
- **Build Tool:** Vite / Create React App
- **Styling:** [Your choice]
- **State Management:** React Hooks
- **Version Control:** Git & GitHub

---

## Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/csci151-bookshelf-org/reading-list
   cd reading-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   http://localhost:5173
   If 5173 is already in use, open the exact localhost URL shown in your terminal output.

---

## Git Workflow & Branching Strategy

### Branches Used

- **`main`** - Production-ready code
- **`develop`** - Integration branch
- **`feature/add-book`** - Added the Add Book form and modal workflow, including creating a new book and inserting it into the list from Home.
- **`feature/reading-notes`** - Added per-book notes support with note model, note UI components, and note creation/persistence integration.
- **`feature/status-filter`** - Implemented search and status-based filtering, filter utilities/defaults, and Home-level filtered list wiring.
- **`feature/book-list`** - Built the book list and card presentation layer with sorting and list/empty-state rendering.
- **`feature/edit-delete`** - Implemented full edit and delete flows with edit modal, delete confirmation dialog, and update/remove state handlers.
- **`feature/mark-status`** - Implemented reading-status updates from each card and connected status changes to persisted book state.

### Merge Conflicts Resolved

[Document conflicts here]

---

## Repository Links

- **Organization:** https://github.com/csci151-bookshelf-org
- **Repository:** https://github.com/csci151-bookshelf-org/reading-list

---

## Contributors

**Group 7 - CSci 151 Event Driven Programming**

- Cabras, Ark Jeremy - @jevo1
- Cerna, Ronald - @Rcerna24
- Compendio, Jake - @arcana022719
- Rojas, Rose Ann - @RADR-V
- Suico, Gian Carlo - @kindocarloo
- Vega, Geryme - @gerymevega

**Course Professors:**
- Mr. Jomari Joseph A. Barrera
- Mr. Kyle Anthony F. Nierras

**Institution:** Visayas State University - Department of Computer Science and Technology

---

**Last Updated:** [04/10/2026]
/typescript-eslint.io) in your project.

# Reading List

A book tracking application that helps readers manage their reading list, track progress, and keep notes on books they've read or want to read.

---

## Team Members

| Full Name          | Role              | GitHub Username | Assigned Atomic Task |
| ------------------ | ----------------- | --------------- | -------------------- |
| Cabras, Ark Jeremy | Lead Developer    | @jevo1          | Add Book             |
| Cerna, Ronald      | Feature Developer | @Rcerna24       | Filter by Status     |
| Compendio, Jake    | QA                | @arcana022719   | Edit Book            |
| Rojas, Rose Ann    | Project Manager   | @RADR-V         | Reading Notes        |
| Suico, Gian Carlo  | Feautre Developer | @kindocarloo    | Mark Status          |
| Vega, Geryme       | UI/UX Developer   | @gerymevega     | Book List            |

---

## Features Implemented

- [ ] Add Book - Add books with title, author, genre, status
- [x] Book List - Display all books in clean layout
- [ ] Filter by Status - Filter by Want to Read, Reading, Finished
- [ ] Reading Notes - Add and view personal notes per book
- [ ] Mark Status - Change reading status
- [ ] Edit Book - Modify book details
- [ ] Delete Book - Remove books with confirmation
- [ ] [Add any additional features implemented]

---

## Technology Stack

- **Frontend Framework:** React
- **Language:** TypeScript / JavaScript
- **Build Tool:** Vite / Create React App
- **Styling:** [Your choice]
- **State Management:** React Hooks
- **Version Control:** Git & GitHub

---

## Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**

   ```bash
   [Write the command to clone the repository]
   [Write the command to navigate to the project directory]
   ```
2. **Install dependencies**

   ```bash
   [Write the command to install project dependencies]
   ```
3. **Run the development server**

   ```bash
   [Write the command to start the development server]
   ```
4. **Open your browser**

   [Write the URL and port where your application runs]

---

## Git Workflow & Branching Strategy

### Branches Used

- **`main`** - Production-ready code
- **`develop`** - Integration branch
- **`feature/add-book`** - [Description]
- **`feature/reading-notes`** - [Description]
- **`feature/status-filter`** - [Description]
- **`feature/book-list`** - [Description]
- **`feature/edit-delete`** - [Description]

### Merge Conflicts Resolved

[Document conflicts here]

---

## Repository Links

- **Organization:** https://github.com/csci151-bookshelf-org
- **Repository:** https://github.com/csci151-bookshelf-org/reading-list

---

## Contributors

**Group 7 - CSci 151 Event Driven Programming**

- Cabras, Ark Jeremy - @username
- Cerna, Ronald - @username
- Compendio, Jake - @username
- Rojas, Rose Ann - @username
- Suico, Gian Carlo - @username
- Vega, Geryme - @username

**Course Professors:**

- Mr. Jomari Joseph A. Barrera
- Mr. Kyle Anthony F. Nierras

**Institution:** Visayas State University - Department of Computer Science and Technology

---

**Last Updated:** [Date]
