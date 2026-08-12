# React SpaceStudy Landing Page

A modern, responsive, and visually rich landing page for a space-themed portfolio. This project is built from the ground up with a modern tech stack including **React, TypeScript, and Vite**, and features a dynamic 3D scene powered by **React Three Fiber**.

### [🚀 View Live Demo 🚀](https://imrovoid.github.io/React-SpaceStudy-Landing-Page/)

![React SpaceStudy Landing Page Screenshot](https://raw.githubusercontent.com/IMROVOID/React-SpaceStudy-Landing-Page/main/public/screenshot.png)

## ✨ Key Features

*   **Interactive 3D Scene:** An animated satellite model that reacts to the user's cursor, built with React Three Fiber and Drei.
*   **Fully Responsive Design:** A fluid layout that adapts seamlessly from large desktops to mobile devices, with dynamic camera positioning for the 3D scene.
*   **Glassmorphism Mobile Menu:** A sleek, full-screen, semi-transparent side menu on mobile, toggled by a smooth hamburger animation from `hamburger-react`.
*   **Modern Tech Stack:** Built with Vite for lightning-fast development, React for the UI, and TypeScript for robust, type-safe code.
*   **Optimized for GitHub Pages:** Pre-configured with the necessary scripts and paths to ensure a seamless deployment on GitHub's static hosting platform.

## 📁 Project Structure

The project is organized into a clean and scalable structure to make navigation and modification intuitive.

```
/src
├── components/     # Reusable React components (Satellite model, UI Overlay)
├── App.tsx         # Main component containing the 3D Canvas and scene setup
├── main.tsx        # Application entry point
└── index.css       # Global styles and responsive media queries
```

## ⚙️ How to Run the Project

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/IMROVOID/React-SpaceStudy-Landing-Page.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd React-SpaceStudy-Landing-Page
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

## 🔧 How to Modify the Page

This project was designed to be easily customizable. Here’s how you can modify its key parts:

*   **UI Text & Content:** All text content and the layout for both desktop and mobile are located in `src/components/Overlay.tsx`.
*   **3D Scene Setup:** The main 3D scene, including lighting, fog, camera positions, and post-processing effects, is configured in `src/App.tsx`.
*   **3D Model & Animation:** The satellite `glb` model is loaded and its animations (head tracking, light pulsing) are defined in `src/components/Satellite.tsx`.
*   **Styling & Theming:** All global styles, colors, fonts, and responsive media queries are located in `src/index.css`.

## 🛠️ Technologies & Libraries Used

This project leverages several modern libraries and tools to achieve its functionality and appearance.

| Library | Link | Description |
| :--- | :--- | :--- |
| **Vite** | [vitejs.dev](https://vitejs.dev/) | A next-generation frontend tooling that provides a faster and leaner development experience. |
| **React** | [react.dev](https://react.dev/) | The library for web and native user interfaces. |
| **TypeScript** | [typescriptlang.org](https://www.typescriptlang.org/) | A strongly typed programming language that builds on JavaScript. |
| **React Three Fiber** | [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber) | A React renderer for Three.js, making it easy to create 3D scenes declaratively. |
| **Drei** | [github.com/pmndrs/drei](https://github.com/pmndrs/drei) | A collection of useful helpers and abstractions for React Three Fiber. |
| **Hamburger React** | [hamburger-react.netlify.app](https://hamburger-react.netlify.app/) | Animated hamburger menu icons for React. |
| **gh-pages** | [github.com/tschaub/gh-pages](https://github.com/tschaub/gh-pages) | A command-line utility to publish files to a `gh-pages` branch on GitHub. |

## 🚀 Deployment to GitHub Pages

This repository is pre-configured for easy deployment to GitHub Pages.

1.  **Set `homepage` and `base`:**
    *   In `package.json`, the `"homepage"` field is set to your GitHub Pages URL.
    *   In `vite.config.ts`, the `base` property is set to your repository name.
2.  **Run the deploy script:**
    This single command will build your project and push the `dist` folder to the `gh-pages` branch on your repository.
    ```sh
    npm run deploy
    ```
3.  **Configure GitHub Settings:**
    *   In your repository settings, navigate to the **Pages** tab.
    *   Set the **Source** to **"Deploy from a branch"**.
    *   Set the **Branch** to **`gh-pages`** with the `/root` folder.
    *   Save your changes. Your site will be live within a few minutes.

---

## 📜 License & Copyright

This project is completely open source and available to the public. You are free to use, modify, distribute, and fork this software for any purpose. No attribution is required, but it is appreciated.
