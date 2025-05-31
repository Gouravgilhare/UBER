# Uber Frontend (React + Vite)

This project is the frontend for the Uber clone, built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). It provides user and captain (driver) authentication and registration flows, as well as a simple home page.

## Features

- **React 19** with functional components and hooks
- **Vite** for fast development and HMR
- **React Router v7** for client-side routing
- **Tailwind CSS** for utility-first styling
- User and Captain (driver) login and signup pages
- Simple, mobile-friendly UI

## Folder Structure

```
src/
  ├── App.jsx
  ├── main.jsx
  ├── index.css
  ├── App.css
  └── pages/
        ├── Home.jsx
        ├── UserLogin.jsx
        ├── UserSignup.jsx
        ├── CaptainLogin.jsx
        └── CaptainSignup.jsx
```

## Available Pages

- `/` — Home page
- `/login` — User login
- `/signup` — User signup
- `/captain-login` — Captain (driver) login
- `/captain-signup` — Captain (driver) signup

## Routing

All routes are defined in [`src/App.jsx`](src/App.jsx):

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<UserLogin />} />
  <Route path="/signup" element={<UserSignup />} />
  <Route path="/captain-login" element={<CaptainLogin />} />
  <Route path="/captain-signup" element={<CaptainSignup />} />
</Routes>
```

## Styling

- Uses [Tailwind CSS](https://tailwindcss.com/) for rapid UI development.
- Tailwind is configured in [`tailwind.config.js`](tailwind.config.js) and imported in [`src/index.css`](src/index.css).

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview the production build:**

   ```bash
   npm run preview
   ```

## Notes

- This frontend is designed to work with the backend API for user and captain authentication.
- Update the API endpoints in your service calls as needed to match your backend routes.
- The forms currently log data to the console; you should connect them to your backend API for full functionality.

## License

MIT
