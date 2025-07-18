# 🛒 Facebook Marketplace Clone

[![React](https://img.shields.io/badge/React-19.0.0-%2361DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.0.0-black)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.24-%2338B2AC)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Edge-green)](https://supabase.io/)

A modern Facebook-style **marketplace platform** built with **Next.js 15**, **React 19**, **Supabase**, and **TailwindCSS**. Inspired by Facebook’s iconic Marketplace layout, this responsive app lets users create, browse, and message sellers for listings.

➡ **Live Demo:** [https://facebook-marketplace-rakibul.vercel.app](https://facebook-marketplace-rakibul.vercel.app)

![Facebook Marketplace Screenshot](https://i.ibb.co/nsN6xk62/landing-2.png)
![Facebook Marketplace Screenshot-2](https://i.ibb.co/wN2mFZJJ/details.png)
![Facebook Marketplace Screenshot-3](https://i.ibb.co/BHCpTxYb/asslisting.png)

## 🚀 Features

- **Create Listings** – Upload photos, enter product title, description, price, email, and category.
- **Browse & Search** – Filter listings by category and keyword with real-time updates.
- **Listing Details** – View full information on each item in a dedicated page.
- **Message Seller** – Contact sellers via form; messages are stored in Supabase and emailed.
- **Responsive Design** – Fully functional across desktop, tablet, and mobile screens.

## 🛠 Tech Stack

- **Frontend:** Next.js 15 and React 19
- **Backend:** Supabase (PostgreSQL & Storage)
- **Styling:** TailwindCSS, Sooner
- **State Management:** React Hooks
- **Icons:** React Icons
- **Deployment:** Vercel

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rakibul-98/facebook-marketplace.git
   cd facebook-marketplace
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add environment variables:**
   Create a `.env` file in the root and add your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🎯 How to Use

1. Click **Create Listing** to add a product with image, details, and contact info.
2. Use the **category tabs** or **search bar** to browse or filter items.
3. Click any item to open its **detail page**.
4. Click **Message Seller** to send a message directly from the app.
5. View the app seamlessly on all screen sizes.

## 🌟 Future Enhancements

- Add **user authentication** and seller profiles.
- Add **chat-style messaging** for real-time conversations.
- Enable **favorites/saved items** feature.
- Add **geolocation filtering** based on user’s city.
- Enable **multi-image** and **video uploads**.
- Add **dark mode** and accessibility improvements.

## 📬 Contact

**Md Rakibul Hasan**

- Portfolio: [https://portfolio-rakibul.netlify.app](https://portfolio-rakibul.netlify.app)
- Email: [rakibul.rupom2001@gmail.com](mailto:rakibul.rupom2001@gmail.com)
