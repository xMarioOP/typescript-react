# 🦊 Random Fox Lazy Image Loader

A Next.js app showcasing a **Lazy Image Component** to load images of random foxes from [randomfox.ca](https://randomfox.ca). The images only load when they're in view, optimizing load times and performance. Simply click a button to add new fox images that will appear as you scroll down.

---

## ✨ Features
- **Lazy Loading**: Images are loaded only when they are visible on the screen.
- **Random Fox Generator**: Fetches a random fox image on each button click.
- **Customizable Component**: Easily adjustable Lazy Image component with customizable dimensions and lazy-loading behavior.

## 🛠️ Technologies
- **Next.js**: For the core application and file structure.
- **React**: Component-based UI library.
- **TailwindCSS**: Styling the app for a clean, responsive design.
- **Lodash**: Utility library for random number generation.
- **Plausible Analytics**: Tracks interactions such as button clicks.

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/xMarioOP/typescript-react.git
   cd random-fox-lazy-loader

2. **Install dependencies**:
   ```bash
   npm install

3. **Run the development server**:
   ```bash
   npm run dev
 
 ---

 ## 📄 Code Overview

### Home Component
The Home component manages the state and interactions for displaying fox images.

- **State Management**: Maintains a list of fox images.
- **Add New Fox Button**: Adds a new fox image by generating a random number and appending a new LazyImage component to the list.

### LazyImage Component
A reusable component that implements lazy loading using the Intersection Observer API.

- **Props**: Accepts the image URL and additional image attributes.
- **Intersection Observer**: Detects when the image enters the viewport and loads it accordingly.

## 🔧 Usage

### Adding a New Fox Image
Click the "Add new fox" button to add a random fox image to the list. Images are loaded only when they are scrolled into view, thanks to lazy loading.

### 🖼️ Preview

```html
<LazyImage
  src="https://randomfox.ca/images/{random_number}.jpg"
  className="rounded-lg bg-gray-300"
  width={320}
  height="auto"
  title="Random Fox"
/>
```
--- 

## 💻 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## 📝 License
This project is open-source and available under the MIT License.

## 🙏 Acknowledgments
This project was built with knowledge from the amazing [React + TypeScript Course on Platzi](https://platzi.com/cursos/react-typescript/). Huge thanks to Platzi for their fantastic resources and support in learning React and TypeScript.

Happy coding! 🦊

