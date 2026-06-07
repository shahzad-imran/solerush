# 👟 SoleRush Sneakers Store - Local Run Guide

Welcome to the **SoleRush** sneaker e-commerce codebase! This is a beginner-friendly, step-by-step guide specifically written for second-semester CS/SE students to get this React project running locally on your computer inside **Visual Studio Code (VS Code)**.

---

## 📋 What is SoleRush?
SoleRush is a premium, modern, and highly-animated sneaker store frontend. It is built using:
- **React**: A popular JavaScript library for building user interfaces (components).
- **Vite**: A modern, super-fast developer tool that runs your local web server.
- **Tailwind CSS**: A utility-first CSS framework for fast styling.
- **Framer Motion**: A library used for smooth, premium transitions and micro-animations.
- **Lucide React**: An icon library for clean, modern symbols.

---

## 🛠️ Step-by-Step Setup Guide

Follow these steps in order to run the website on your local machine:

### Step 1: Install Node.js (Prerequisite)
Vite and React require **Node.js** to be installed on your computer.
1. Download Node.js from the official website: [nodejs.org](https://nodejs.org/).
2. Select the **LTS (Long Term Support)** version for Windows.
3. Run the downloaded installer and click **Next** through the setup wizard (make sure the box for "Add to PATH" is checked).
4. **Verify the installation**:
   - Open Command Prompt or PowerShell on your computer.
   - Type `node -v` and press Enter. It should print a version number (e.g., `v20.11.0`).
   - Type `npm -v` and press Enter. It should print a version number (e.g., `10.2.4`).

---

### Step 2: Open the Project in VS Code
1. Open **Visual Studio Code**.
2. Click **File** in the top-left menu, then select **Open Folder...**
3. Browse to and select the `web_development` (or `solerush`) folder you downloaded or cloned.
4. On the left side panel (Explorer), you should see files like `package.json`, `index.html`, and a `src` folder.

---

### Step 3: Open the Built-in Terminal in VS Code
VS Code has a built-in command terminal so you don't need to open external programs.
1. Press the keyboard shortcut: **`Ctrl + \``** (the backtick key, next to the `1` key on your keyboard).
2. *Alternatively:* Click on **Terminal** in the top menu bar of VS Code, and select **New Terminal**.
3. A panel will open at the bottom showing a command line prompt.

---

### Step 4: Install Project Dependencies (Packages)
Before running the application, we need to download all the libraries/packages listed in `package.json` (such as React, Framer Motion, and Tailwind).
1. In the VS Code terminal at the bottom, type the following command and press Enter:
   ```bash
   npm install
   ```
2. Wait a minute or two. A folder named `node_modules` will appear in your project folder explorer. This folder contains all the downloaded code libraries.

---

### Step 5: Start the Development Server
Now, let's run the project locally!
1. In the same VS Code terminal, type this command and press Enter:
   ```bash
   npm run dev
   ```
2. In a few seconds, you should see output in the terminal that looks like this:
   ```text
     VITE v5.4.11  ready in 234 ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
   ```

---

### Step 6: Open the Website in Your Browser
1. In the VS Code terminal, hold down the **Ctrl** key and click the link: **`http://localhost:5173/`**
2. Or, open your web browser (Chrome, Edge, Firefox) and type `http://localhost:5173/` in the address bar.
3. **Congratulations! 🎉** You should now see the SoleRush store running locally!

---

## 🔍 Folder Structure for Beginners
Here is a quick map of what the files do, to help you navigate:
- **`src/`**: This is where all the React source code lives.
  - **`src/main.jsx`**: The main entry point that starts the React application.
  - **`src/App.jsx`**: The main layout/router mapping all pages.
  - **`src/components/`**: Small reusable UI parts (like buttons, product cards, navbar, footer).
  - **`src/pages/`**: Full views/pages (like Home, ProductListing, Cart, Wishlist, Contact).
  - **`src/data/products.js`**: Dummy data representing the shoes/products.
  - **`src/index.css`**: Tailwind directives and custom CSS stylings.
- **`package.json`**: The project's configuration file listing scripts and packages.
- **`index.html`**: The single HTML page where your React app gets injected.

---

## 💡 Recommended VS Code Extensions
To make your coding experience much easier, install these extensions in VS Code (click the Extensions icon on the far left bar):
1. **ES7+ React/Redux/React-Native snippets**: Allows you to type shortcuts like `rfce` to quickly generate React component templates.
2. **Tailwind CSS IntelliSense**: Autocompletes styling class names as you type them.

---

## 🛠️ Troubleshooting (Common Beginner Errors)

### ❌ Error: `'npm' is not recognized as an internal or external command...`
- **Cause**: Node.js is not installed, or your terminal was open before you installed Node.js.
- **Fix**: Install Node.js from Step 1. If already installed, **close VS Code completely** and open it again to refresh the terminal environment paths.

### ❌ Port `5173` is already in use
- **Cause**: You have another terminal running the project in the background.
- **Fix**: Press `Ctrl + C` in the other running terminal to stop it, or Vite will automatically assign a different port like `http://localhost:5174/`. Just open the new link!

### ❌ Changes are not showing up in the browser
- **Cause**: Vite development server has stopped running.
- **Fix**: Check your terminal in VS Code. If it returned to the command prompt, run `npm run dev` again.

---
Happy Coding! 💻 Let us know if you face any issues!
