# 📇 Contact Management API

A RESTful API for managing user accounts and contacts, built with Node.js, Express, MongoDB, and JWT-based authentication using a custom header.

---

## 📁 Project Structure

```
├── Controllers/
│   ├── contact.js
│   └── user.js
├── Models/
│   ├── Contact.js
│   └── User.js
├── Routes/
│   ├── contact.js
│   └── user.js
├── middlewares/
│   └── Auth.js
├── server.js
├── package.json
├── .gitignore
└── .env
```

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- dotenv

---

## 🔐 Authentication

- JWT tokens are used to protect specific routes.
- Tokens must be sent in the **`Auth` header** for all protected endpoints.

### ✅ Example Header:
```
Auth: <your_jwt_token>
```

---

## 🌐 API Endpoints

### 👤 User Routes

| Method | Endpoint              | Description       |
|--------|-----------------------|-------------------|
| POST   | `/api/user/register`  | Register a new user |
| POST   | `/api/user/login`     | Login and receive a JWT token |

---

### 📇 Contact Routes

| Method | Endpoint                        | Description               | Auth Required |
|--------|----------------------------------|---------------------------|---------------|
| POST   | `/api/contact/new`              | Create a new contact      | ✅             |
| GET    | `/api/contact/`                 | Get all contacts          | ❌             |
| GET    | `/api/contact/:id`              | Get contact by ID         | ❌             |
| PUT    | `/api/contact/:id`              | Update contact by ID      | ✅             |
| DELETE | `/api/contact/:id`              | Delete contact by ID      | ✅             |
| GET    | `/api/contact/userid/:id`       | Get contacts by User ID   | ❌             |

---

## 🛠️ Environment Variables

Create a `.env` file at the root of your project with:

```env
PORT=port_no
MONGO_URI=your_mongodb_connection_string
JWT=your_jwt_secret_key
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/TheDevMonarch/Contact_API.git
cd Contact_API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```

---

## 📌 Usage Notes

- Use **Postman** or a frontend client to test the routes.
- For protected routes, pass your JWT token in the request header like this:
  
  ```
  Auth: <your_token>
  ```

- JWT tokens are issued during login and contain the user ID in the payload.

---

## ✍️ Author

**Aakash Rane**

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
