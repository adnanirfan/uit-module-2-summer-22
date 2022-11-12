## https://github.com/remix-run/react-router/blob/dev/examples/auth/src/App.tsx

Register/Signup Page
Login Page
Home Page (List Todo items) -> Todo List connected with Firebase Realtime Database
Add Todo Page - Input, Add button -> Home
Authentication (Routing wali authentication + Firebase Authentication)

- Add Todos on Firebase realtime database
- Display todos on Home page from Firebase realtime database
- On page reload - check with firebase if user was already loggedin
    - if YES - then get user object from firebase and store it in Context API
    - else NO - Login per redirect
- Logout
