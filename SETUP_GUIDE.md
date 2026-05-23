# Portfolio Setup Guide - Step by Step

## Step 1: Create Folder Structure

Open Command Prompt and navigate to your portfolio folder:

```bash
cd c:\Users\zass\Desktop\portfolio
```

Create all necessary directories:

```bash
mkdir src
mkdir src\components
mkdir src\data
mkdir src\styles
mkdir public
mkdir public\projects
```

## Step 2: Install Dependencies

Run this command:

```bash
npm install
```

This will install React, ReactDOM, and other dependencies based on package.json

## Step 3: Create React Files

You'll need to create these files. Here's what goes in each:

### src/main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### src/App.jsx
```javascript
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Resume />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
```

## Step 4: Create Components

Navigate to src/components and create these files...

## Step 5: Run Development Server

```bash
npm run dev
```

Your site will be available at http://localhost:5173

---

Note: I'll provide all component codes in the next messages. Please set up the folder structure first!
