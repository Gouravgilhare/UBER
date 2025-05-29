# /users/register Endpoint Documentation

This document describes the `/users/register` endpoint used to register a new user.

## Endpoint

**POST** `/users/register`

> Note: If this endpoint is mounted on a route prefix (e.g., `/users`), the full URL would be `/users/register`.

## Request Body

The request body must be in JSON format with the following structure:

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

### Field Requirements

- **fullname** (object, required): Contains the user's first and last name.
  - **firstname** (string, required): Must be at least 3 characters long. Cannot contain numbers or special characters.
  - **lastname** (string, required): Must be at least 3 characters long. Cannot contain numbers or special characters.
- **email** (string, required): Must be a valid email address format (e.g., `user@example.com`). The email must be unique and not already registered.
- **password** (string, required): Must be at least 6 characters long. Should contain a mix of letters and numbers for better security.
- **token** (string, response only): A JWT token returned upon successful registration. Used for authenticating subsequent requests.

**All fields are mandatory. Requests missing any required field or containing invalid data will result in a 400 Bad Request response.**

## Responses

### 201 Created

- **Description:** User registered successfully.
- **Response Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      //User object details (e.g., _id, fullname, email, socketId)
    }
  }
  ```

### 400 Bad Request

- **Description:** The request failed validation. One or more fields are missing or invalid.
- **Response Body:**
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

## Example Request

```http
POST /users/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securePassword123"
}
```

## Additional Notes

- The endpoint validates:
  - Email format.
  - Minimum length for `fullname.firstname` and `fullname.lastname`.
  - Minimum length for `password`.
- On success, a JWT token is generated and returned in the response along with the user object.
- The error response contains an array of validation error details provided by `express-validator`.
