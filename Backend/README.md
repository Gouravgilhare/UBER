# User Endpoints Documentation

## POST `/users/register`

Registers a new user in the system.

### Request Body

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

#### Field Requirements

- `fullname.firstname` (string, required): At least 3 characters.
- `fullname.lastname` (string, required): At least 3 characters.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): At least 6 characters.

### Responses

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
          "msg": "Error message",
          "param": "field",
          "location": "body"
        }
      ]
    }
    ```

---

## POST `/users/login`

Authenticates a user and returns a JWT token.

### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): At least 6 characters.

### Responses

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

### Notes

- All fields are required.
- On success, a JWT token is returned for authentication.
- On error, an array of validation errors is returned.