# 🛍️ StoreHub

### Shop Smart. Eat Better.

StoreHub is a modern, responsive web application built with **React.js** that combines an e-commerce product browsing experience with a recipe discovery platform.

The application uses the **DummyJSON REST API** to fetch real-time product and recipe data and displays it through a clean, responsive, and user-friendly interface.

StoreHub was developed as a practical React project to demonstrate API integration, state management, routing, reusable components, responsive UI development, and modern frontend practices.

---

## 🌐 Live Demo

🔗 **Live Website:**  
Add your deployed Vercel/Netlify URL here.

Example:

`https://store-hub-kappa.vercel.app/`

---

## 📸 Project Overview

StoreHub provides two main experiences:

### 🛒 Products

Users can browse a collection of products fetched from the DummyJSON API.

Each product displays information such as:

- Product image
- Product title
- Description
- Category
- Brand
- Price
- Discount
- Rating
- Stock availability

### 🍳 Recipes

Users can explore different recipes from around the world.

Each recipe provides information including:

- Recipe image
- Recipe name
- Cuisine
- Difficulty
- Ingredients
- Rating
- Preparation time
- Cooking time
- Servings
- Calories per serving

---

# ✨ Features

## 🏠 Home Page

The Home page provides an attractive introduction to the application.

Features include:

- Modern hero section
- Background image with dark overlay
- StoreHub branding
- "Shop Smart. Eat Better." heading
- Navigation to Products
- Navigation to Recipes
- Product preview section
- Recipe preview section
- Responsive design
- Hover animations

The Home page displays a limited number of products and recipes as previews while allowing users to navigate to the complete pages.

---

## 🛍️ Products Page

The Products page fetches product data from the DummyJSON API.

### Product cards include:

- Product image
- Product title
- Product description
- Category
- Price
- Discount percentage
- Rating
- Stock
- Brand
- View Product button

Products are displayed using a responsive grid layout.

The layout automatically adjusts according to the screen size.

---

## 🍳 Recipes Page

The Recipes page fetches recipes from the DummyJSON API.

### Recipe cards include:

- Recipe image
- Recipe name
- Cuisine
- Difficulty
- Ingredients
- Preparation time
- Rating
- Servings
- Calories per serving
- View Recipe button

The recipe layout is fully responsive and optimized for different screen sizes.

---

# 📱 Responsive Design

StoreHub is designed to work across different screen sizes.

The application supports:

- 📱 Mobile phones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

Tailwind CSS responsive breakpoints are used to create adaptive layouts.

Example:

```text
Mobile
↓
sm
↓
md
↓
lg
↓
xl
↓
2xl

🧭 Navigation

The application uses React Router DOM for client-side navigation.

Main routes include:

/
├── Home
│
├── /products
│   └── Products
│
└── /recipes
    └── Recipes

The navigation bar contains:

Home
Products
Recipes

The navbar also includes a responsive mobile menu with a hamburger button.

🔄 API Integration

StoreHub uses the DummyJSON REST API to retrieve product and recipe data.

Products API
https://dummyjson.com/products
Recipes API
https://dummyjson.com/recipes

Data is fetched using the JavaScript fetch() API.

Example:

const response = await fetch(
  "https://dummyjson.com/products"
);

const data = await response.json();

setProducts(data.products);
⚛️ React Concepts Used

This project demonstrates several important React concepts.

Components

The application is divided into reusable components such as:

Navbar
Footer
Hero
Home
Products
Recipes
useState

useState is used to manage application data and UI state.

Example:

const [products, setProducts] = useState([]);

Loading state:

const [loading, setLoading] = useState(true);

Mobile navbar state:

const [menuOpen, setMenuOpen] = useState(false);
useEffect

useEffect is used to fetch API data when a component loads.

Example:

useEffect(() => {
  fetchAllProducts();
}, []);
Conditional Rendering

Loading screens and dynamic content are handled using conditional rendering.

Example:

if (loading) {
  return <Loading />;
}
Array Methods

The project uses JavaScript array methods such as:

map()
slice()
join()

For example:

products.slice(0, 4).map((product) => (
  ...
))
🎨 UI & Styling

The application is styled using Tailwind CSS.

Tailwind provides utility classes for:

Spacing
Colors
Typography
Flexbox
Grid
Responsive design
Shadows
Borders
Hover effects
Transitions
Background images
Gradients

Example:

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
✨ Animations & Effects

StoreHub includes several subtle UI effects.

Examples include:

Card Hover
hover:-translate-y-2
Image Zoom
hover:scale-110
Smooth Transitions
transition duration-300
Navigation Hover

Navigation links change color when the user hovers over them.

These effects make the interface feel more interactive without making the UI distracting.

⏳ Loading State

The application handles API loading states.

While data is being fetched, a loading indicator is displayed.

Example:

const [loading, setLoading] = useState(true);

After the API request:

finally {
  setLoading(false);
}

This provides users with feedback while waiting for the API response.

❌ Error Handling

API requests are wrapped inside try...catch blocks.

Example:

try {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  setProducts(data.products);
} catch (error) {
  console.error(
    "Error fetching products:",
    error
  );
}

This prevents API errors from crashing the application.

📂 Project Structure

The project follows a simple and organized React structure.

StoreHub/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── storeImages.webp
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Hero.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   └── Recipes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md


🛠️ Technologies Used
Frontend
React.js
JavaScript (ES6+)
HTML5
Tailwind CSS
Routing
React Router DOM
API
DummyJSON REST API
Fetch API
Development
Vite
npm
VS Code
Version Control
Git
GitHub
Deployment
Vercel / Netlify

📦 Installation

Follow these steps to run StoreHub locally.

1. Clone the Repository
git clone https://github.com/your-username/storehub.git
2. Navigate to the Project
cd storehub
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The application will normally be available at:

http://localhost:5173


🏗️ Build for Production

To create a production build:

npm run build

The production files will be generated inside:

dist/

To preview the production build locally:

npm run preview
🚀 Deployment

StoreHub can be deployed using platforms such as:

Vercel
Netlify
Vercel

Connect the GitHub repository to Vercel and use:

Build Command:
npm run build

Output Directory:
dist
Netlify

Use:

Build Command:
npm run build

Publish Directory:
dist
📊 Application Flow

The basic application flow is:

User
  │
  ▼
StoreHub Home Page
  │
  ├───────────────┐
  ▼               ▼
Products        Recipes
  │               │
  ▼               ▼
DummyJSON       DummyJSON
Products API    Recipes API
  │               │
  ▼               ▼
React State     React State
  │               │
  ▼               ▼
Product Cards   Recipe Cards
🎯 Learning Objectives

This project was created to practice and demonstrate practical frontend development skills.

The main learning objectives include:

Understanding React component architecture
Managing state using useState
Fetching API data using fetch()
Understanding asynchronous JavaScript
Using async and await
Handling errors using try...catch
Managing API loading states
Using useEffect
Working with REST APIs
Creating reusable UI components
Implementing client-side routing
Working with React Router
Building responsive layouts
Using Tailwind CSS
Creating interactive UI elements
Deploying a React application
🔮 Future Improvements

Several features can be added to make StoreHub a more complete e-commerce and recipe platform.

🛒 E-Commerce Features
Add to Cart
Shopping Cart page
Product Details page
Wishlist
Checkout page
Quantity management
Total price calculation
🔍 Search & Filtering
Product search
Recipe search
Category filtering
Price filtering
Rating filtering
Sort by price
Sort by rating
👤 User Features
User registration
Login
Authentication
User profile
Order history
🍳 Recipe Features
Recipe Details page
Ingredient-based search
Cuisine filtering
Difficulty filtering
Favorite recipes
🎨 UI Improvements
Dark mode
Skeleton loading
Toast notifications
Better animations
Product image gallery
Pagination
🧠 Key Skills Demonstrated

This project demonstrates practical knowledge of:

React.js
JavaScript
REST APIs
API Integration
React Router
State Management
useState
useEffect
Async/Await
Error Handling
Conditional Rendering
Tailwind CSS
Responsive Design
Git
GitHub
Vite
Deployment
👨‍💻 Developer

Muhammad Huzaifa

BS Software Engineering Student

Interested in:

Frontend Development
React.js
JavaScript
Tailwind CSS
Full-Stack Development
⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

📄 License

This project is created for educational and portfolio purposes.

Feel free to explore, modify, and improve the project.


### A good GitHub tagline

Under your repository name, I'd use:

> **A modern React e-commerce and recipe explorer featuring API integration, responsive design, React Router, and Tailwind CSS.**

And for the README, replace:

```text
https://storehub.vercel.app