# User & Captain API Endpoints Documentation

This document describes the available endpoints for user and captain registration, authentication, profile retrieval, and logout in the backend API.

---

## **User Endpoints**

### **POST `/users/register`**

Register a new user.

#### **Request Body**

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

#### **Responses**

- **201 Created**
  - User registered successfully.
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

### **POST `/users/login`**

Authenticate a user and receive a JWT token.

#### **Request Body**

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**

- **email** (string, required): Must be a valid email address.
- **password** (string, required): At least 6 characters.

#### **Responses**

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

### **GET `/users/profile`**

Retrieve the authenticated user's profile.

#### **Authentication**

- Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

#### **Responses**

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

### **GET `/users/logout`**

Logs out the authenticated user by blacklisting the current JWT token and clearing the authentication cookie.

#### **Authentication**

- Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

#### **Responses**

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

## **Captain Endpoints**

### **POST `/captains/register`**

Register a new captain (driver) with vehicle details.

#### **Request Body**

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### **Field Requirements**

- **fullname** (object, required): Captain's first and last name.
  - **firstname** (string, required): At least 3 characters.
  - **lastname** (string, required): At least 3 characters.
- **email** (string, required): Must be a valid, unique email address.
- **password** (string, required): At least 6 characters.
- **vehicle** (object, required): Vehicle details.
  - **color** (string, required): At least 3 characters.
  - **plate** (string, required): At least 3 characters.
  - **capacity** (integer, required): At least 1.
  - **vehicleType** (string, required): Must be one of `"car"`, `"motorcycle"`, or `"auto"`.

**All fields are mandatory. Requests missing any required field or containing invalid data will result in a 400 Bad Request response.**

#### **Responses**

- **201 Created**
  - Captain registered successfully.
    ```json
    {
      "token": "<jwt_token>",
      "captain": {
        "_id": "<captain_id>",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Smith"
        },
        "email": "jane.smith@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```
- **400 Bad Request**
  - Validation failed.
    ```json
    {
      "errors": [
        {
          "msg": "Validation error message",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```
  - Or if captain already exists:
    ```json
    {
      "message": "captain already registered"
    }
    ```

---

### **POST `/captains/login`**

Authenticate a captain and receive a JWT token.

#### **Request Body**

```json
{
  "email": "jane.smith@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**

- **email** (string, required): Must be a valid email address.
- **password** (string, required): At least 6 characters.

#### **Responses**

- **200 OK**
  - Login successful.
    ```json
    {
      "captain": {
        "_id": "<captain_id>",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Smith"
        },
        "email": "jane.smith@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      },
      "token": "<jwt_token>"
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

### **GET `/captains/profile`**

Retrieve the authenticated captain's profile.

#### **Authentication**

- Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

#### **Responses**

- **200 OK**
  - Returns the captain profile.
    ```json
    {
      "captain": {
        "_id": "<captain_id>",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Smith"
        },
        "email": "jane.smith@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```
- **401 Unauthorized**
  - Missing, invalid, or blacklisted token.
    ```json
    {
      "message": "Unauthorized - token missing"
    }
    ```
    or
    ```json
    {
      "message": "Unauthorized - token blacklisted"
    }
    ```
    or
    ```json
    {
      "message": "Unauthorized - JWT error"
    }
    ```

#### **Example Request**

```http
GET /captains/profile
Authorization: Bearer <jwt_token>
```

---

### **GET `/captains/logout`**

Logs out the authenticated captain by blacklisting the current JWT token and clearing the authentication cookie.

#### **Authentication**

- Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

#### **Responses**

- **200 OK**
  - Logout successful.
    ```json
    {
      "message": "Logout Successfully"
    }
    ```
- **401 Unauthorized**
  - Missing, invalid, or blacklisted token.
    ```json
    {
      "message": "Unauthorized - token missing"
    }
    ```
    or
    ```json
    {
      "message": "Unauthorized - token blacklisted"
    }
    ```
    or
    ```json
    {
      "message": "Unauthorized - JWT error"
    }
    ```

#### **Example Request**

```http
GET /captains/logout
Authorization: Bearer <jwt_token>
```

---

## **General Notes**

- All endpoints requiring authentication expect a valid JWT token.
- On success, endpoints return user or captain data and/or a JWT token.
- On error, endpoints return an array of validation errors or an error message.
- JWT tokens can be sent via the `Authorization` header or as a `token` cookie.
- The `/users/logout` and `/captains/logout` endpoints blacklist the token, preventing its further use.
