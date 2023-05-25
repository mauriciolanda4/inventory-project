# Overview

This repository contains a website for managing personal inventory items. The website provides users with an intuitive way to track, manage, and categorize their personal items.

## Problem Definition

The goal of this website is to provide users with a solution for managing their personal inventory. By preventing disorganization, saving time, and minimizing potential losses, the website empowers users to maintain an organized inventory and make informed decisions regarding their personal items. bringing convenience and peace of mind.

## Priorities

### Must have

A user must be able to register and login.
A user must be able to add items to their inventory with details such as name, category, quantity, notes, and metadata.
A user must be able to view their inventory items.

### Should have

- A user should be able to edit the details of their inventory items.
- A user should be able to delete items from their inventory.
- A user should be able to mark items as missing or borrowed.
- A user should be able to add notes to an item.

### Could have

- The application could provide a search feature to search the inventory by item name.
- The application could provide a filter feature to filter items by category.

### Will not have

- Reminders: The application will not include a built-in reminder feature.
- Offline mode: The application will not have offline functionality.
- Other possible features: Any additional features beyond the scope of the defined requirements will not be implemented.

## Domain Model Diagram

```mermaid
erDiagram
  USER ||--|{ INVENTORY : has
  INVENTORY ||--|{ ITEM : contains
  ITEM ||--|| CATEGORY : categorized_in
  ```

  ## Entity Relationship Diagram

```mermaid
erDiagram
  USER ||--|{ INVENTORY : has
  INVENTORY ||--|{ ITEM : contains
  ITEM ||--|| ITEM_DETAILS : has
  ITEM ||--|| METADATA : has
  ITEM ||--|{ CATEGORY : belongs_to
 USER {
    int id PK
    text username
    text password
}

INVENTORY {
    int id PK
    int user_id FK
}

ITEM {
    int id PK
    text name
    int inventory_id FK
    text notes
    boolean isMissing
    boolean isBorrowed
}

ITEM_DETAILS {
    int id PK
    int item_id FK
    text description
    int quantity
}

METADATA {
    int id PK
    int item_id FK
    datetime created_at
    datetime updated_at
}

CATEGORY {
    int id PK
    text name
}
  ```

## API Specification

The API specification defines the endpoints and their corresponding request and response data.

### POST /register

Description: Register a new user.
Request:
```
{
  "username": "string",
  "password": "string"
}
```
Response:
Success: HTTP 200 OK
Error: HTTP 400 Bad Request

### POST /login

Description: User login.
Request:
```
{
  "username": "string",
  "password": "string"
}
```
Response:
Success: HTTP 200 OK with a JWT token
Error: HTTP 401 Unauthorized

### POST /inventory/items

Description: Add a new item to the user's inventory.
Request:
```
{
  "name": "string",
  "category_id": "integer",
  "quantity": "integer",
  "notes": "string",
  "isMissing": "boolean",
  "isBorrowed": "boolean",
}
```
Response:
Success: HTTP 201 Created with the created item object
Error: HTTP 400 Bad Request

### GET /inventory/items

Description: Get a list of all items in the user's inventory
Request:
```
No request parameters required
```
Response:

Success: HTTP 200 OK with an array of item objects
Error: HTTP 400 Bad Request

### GET /inventory/items/{item_id}

Description: Get details of a specific item in the user's inventory.
Request:
```
No request parameters required
```
Response:
Success: HTTP 200 OK with the item object
Error: HTTP 404 Not Found

### PUT /inventory/items/{item_id}

Description: Update details of a specific item in the user's inventory.
Request:

```
{
  "name": "string",
  "category_id": "integer",
  "quantity": "integer",
  "notes": "string",
  "isMissing": "boolean",
  "isBorrowed": "boolean",
}
```
Response:
Success: HTTP 200 OK with the updated item object
Error: HTTP 400 Bad Request or HTTP 404 Not Found

### DELETE /inventory/items/{item_id}

Description: Delete a specific item from the user's inventory.
Request:
```
No request parameters required
```
Response:
Success: HTTP 204 No Content
Error: HTTP 404 Not Found

### GET /inventory/categories

Description: Get a list of all available categories.
Request:
```
No request parameters required
```
Response:
Success: HTTP 200 OK with an array of category objects
Error: HTTP 400 Bad Request
