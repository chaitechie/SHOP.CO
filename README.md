# 🛒 E-Commerce Website (React + Redux + Firebase)

## 📌 Overview

This is a fully functional **E-Commerce Website** built using **React, Redux Toolkit, TypeScript, and Firebase**. It provides a seamless shopping experience with product filtering, cart management, authentication, and real-time database support.

---

## ✨ Features

### 🛍️ Product Listing & Filtering

✅ Users can **filter products** by:

- **Category**
- **Price (Low to High / High to Low)**
- **Rating**

### 🔍 Product Details Page

✅ Clicking a product **opens a detailed view**, with data dynamically fetched via Redux.

### 🛒 Cart Management

✅ Users can **add and remove products** from the cart. ✅ Cart state is globally managed using Redux Toolkit.

### 🔥 Firebase Integration

✅ **Firebase Authentication**: Supports user login & signup. ✅ **Firestore Database**: Stores user data, orders, and products. ✅ **Realtime Updates**: Always fetches the latest product details.

### ⚡ State Management with Redux Toolkit

✅ Uses **Redux Toolkit (**\`\`**)** for managing:

- Products
- Filters
- Cart

### 🚀 Error Handling & Performance Optimization

✅ **Error Boundaries** ensure the app doesn’t crash unexpectedly. ✅ Uses `useEffect` for **efficient data fetching & updates**.

---

## 🛠️ Tech Stack

| **Category**           | **Technology**                   |
| ---------------------- | -------------------------------- |
| **Frontend**           | React, TypeScript, Tailwind CSS  |
| **State Management**   | Redux Toolkit, Immer             |
| **Backend & Database** | Firebase (Firestore, Auth)       |
| **Routing**            | React Router                     |
| **Testing**            |  Vitest                          |  learning and testing undergoing 


---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Firebase


```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Your app is now running at [**http://localhost:3000**](http://localhost:3000) 🎉

---

## 🧪 Running Tests

To run all tests:

```bash
npm test
```

To run tests in **watch mode**:

```bash
npm run test:watch
```

---

## 📂 Folder Structure



---

## 📌 Future Improvements

🔹 Payment integration (Stripe/Razorpay)\
🔹 User profile with order history\
🔹 Wishlist functionality

---

## 💡 Contributing

1. **Fork the repository**
2. **Create a new branch**

```bash
git checkout -b main/cart
```

3. **Commit changes**

```bash
git commit -m "Added new feature"
```

4. **Push the branch**

```bash
git push origin mian/new-feature
```

5. **Create a Pull Request** 🚀

---


🔥 **Happy Coding!** 🚀✨


