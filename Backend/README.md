# User API Endpoints Documentation

This document describes the available endpoints for user registration, authentication, profile retrieval, and logout in the backend API.

---

## **POST `/users/register`**

Register a new user.

### **Request Body**

Send a JSON object:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**

- **fullname** (object, required): Contains the user's first and last name.
  - **firstname** (string, required): At least 3 characters, only letters.
  - **lastname** (string, required): At least 3 characters, only letters.
- **email** (string, required): Must be a valid, unique email address.
- **password** (string, required): At least 6 characters.

**All fields are mandatory. Requests missing any required field or containing invalid data will result in a 400 Bad Request response.**

### **Responses**

- **201 Created**
  - User registered successfully.
  - Example:
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "<user_id>",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```
- **400 Bad Request**
  - Validation failed.
    ```json
    {
      "error": [
        {
          "msg": "Validation error message",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```

---

## **POST `/users/login`**

Authenticate a user and receive a JWT token.

### **Request Body**

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**

- **email** (string, required): Must be a valid email address.
- **password** (string, required): At least 6 characters.

### **Responses**

- **200 OK**
  - Login successful.
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "<user_id>",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```
- **400 Bad Request**
  - Validation failed.
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "field",
          "location": "body"
        }
      ]
    }
    ```
- **401 Unauthorized**
  - Invalid email or password.
    ```json
    {
      "message": "Invalid Email or Password"
    }
    ```

---

## **GET `/users/profile`**

Retrieve the authenticated user's profile.

### **Authentication**

- Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

### **Responses**

- **200 OK**
  - Returns the user profile.
    ```json
    {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
    ```
- **401 Unauthorized**
  - Missing or invalid token.
    ```json
    {
      "message": "Authentication required"
    }
    ```

#### **Example Request**

```http
GET /users/profile
Authorization: Bearer <jwt_token>
```

---

## **GET `/users/logout`**

Logs out the authenticated user by blacklisting the current JWT token and clearing the authentication cookie.

### **Authentication**

- Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

### **Responses**

- **200 OK**
  - Logout successful.
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- **400 Bad Request**
  - Token not found in request.
    ```json
    {
      "message": "Token not found"
    }
    ```
- **500 Internal Server Error**
  - Server error during logout.
    ```json
    {
      "message": "Server error during logout"
    }
    ```

#### **Example Request**

```http
GET /users/logout
Authorization: Bearer <jwt_token>
```

---

## **General Notes**

- All endpoints requiring authentication expect a valid JWT token.
- On success, endpoints return user data and/or a JWT token.
- On error, endpoints return an array of validation errors or an error message.
- JWT tokens can be sent via the `Authorization` header or as a `token` cookie.
- The `/users/logout` endpoint blacklists the token, preventing its further use.

---
