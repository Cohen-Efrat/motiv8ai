## Prerequisites

- node js version 20+ https://nodejs.org/en/download/
- npm i && npm start

## API Endpoints

### Insert Number

- **URL**: `/number`
- **Method**: `POST`
- **Body**:
    ```json
    {
      "num": 123,
      "userID": "user1"
    }
    ```
- **Success Response**:
    - **Code**: `200 OK`
    - **Content**: `Number set successfully`
- **Error Responses**:
    - **Code**: `400 Bad Request`
    - **Content**: `{ "error": "error message" }`

### Insert Character

- **URL**: `/character`
- **Method**: `POST`
- **Body**:
    ```json
    {
      "char": "A",
      "userID": "user1"
    }
    ```
- **Success Response**:
    - **Code**: `200 OK`
    - **Content**: `Character set successfully`
- **Error Responses**:
    - **Code**: `400 Bad Request`
    - **Content**: `{ "error": "error message" }`

### Get Result

- **URL**: `/:userID`
- **Method**: `GET`

- **Success Response**:
    - **Code**: `200 OK`
    - **Content**: `{"result": "A_123"}`
- **Error Responses**:
    - **Code**: `400 Bad Request`
    - **Content**: `{ "error": "error message" }`

## Notes:

the env is uploaded for test purposes only
if not using mongoDB on localhost pleace change the MONGODB_URI in the .env file