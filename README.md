# Auth-in-Nest

A backend authentication service built using **NestJS**. This project provides a scalable and modular authentication system that can be integrated into any application.

---

## 🚀 Features

* User Registration
* User Login
* JWT-based Authentication
* Password Hashing (bcrypt)
* Role-based structure (extendable)
* Modular architecture using NestJS

---

## 🛠️ Tech Stack

* **Framework:** NestJS
* **Language:** TypeScript
* **Authentication:** JWT (JSON Web Token)
* **Hashing:** bcrypt
* **Database:** (Add your DB, e.g., MongoDB / PostgreSQL)

---

## 📂 Project Structure

```
src/
 ├── auth/
 │   ├── dto/
 │   ├── auth.controller.ts
 │   ├── auth.service.ts
 │   ├── auth.module.ts
 │   └── auth.guards.ts
 ├── user/
 │   ├── user.service.ts
 │   ├── user.module.ts
 │   └── schemas/
 ├── config/
 │   ├── config.ts
 │   └── index.ts 
 ├── types/
 │   └── morgan.d.ts
 ├── course/
 ├── app.controller.ts
 ├── app.module.ts
 ├── app.service.ts
 └── main.ts
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd auth-in-nest

# Install dependencies
npm install
```

---

## ▶️ Running the App

```bash
# Development
npm run start:dev

# Production
npm run start:prod
```

---

## 🔐 Authentication Flow

1. **Register User**

   * User provides email and password
   * Password is hashed using bcrypt
   * User is stored in the database

2. **Login User**

   * Validate user credentials
   * Generate JWT token
   * Return token to client

3. **Protected Routes**

   * Use Auth Guards to protect endpoints
   * JWT is validated on each request

---

## 📡 API Endpoints

### Auth

* `POST /auth/register` → Register a new user
* `POST /auth/login` → Login and receive JWT

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=3600s
DATABASE_URL=your_database_url
```

---

## 🧪 Future Improvements

* Refresh Token Implementation
* Email Verification
* Password Reset Flow
* OAuth (Google, GitHub)
* Rate Limiting & Security Enhancements

---

## 📌 Notes

* Make sure to secure your JWT secret in production.
* Use environment variables for sensitive data.

---

## 👨‍💻 Author

**Praduman Jadon**

---

## 📜 License

This project is licensed under the MIT License.
