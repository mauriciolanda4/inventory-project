# Overview

This repository contains an application for managing personal inventory items. The application provides users with an intuitive way to track, manage, and categorize their personal items.

## Problem Definition

The goal of this application is to provide a solution for personal inventory management.

## Priorities

### Must have

- A user must be able to register and login.
- A user must be able to add items to their inventory with details such as name, category, and quantity.
- A user must be able to view their inventory items.

### Should have

- A user should be able to edit the details of their inventory items.
- A user should be able to delete items from their inventory.

### Could have

- The application could provide a search feature to search the inventory by item name.
- The application could provide a filter feature to filter items by category.

### Will not have

## Domain Model Diagram

```mermaid
erDiagram
  USER ||--|{ INVENTORY : has
  INVENTORY ||--|{ ITEM : contains
  ITEM ||--|| PRODUCT_DETAILS : has
  INVENTORY ||--|| CATEGORY : categorized_in
  ```

  ## Entity Relationship Diagram

```mermaid
  erDiagram
  USER ||--|{ INVENTORY : "has"
  INVENTORY ||--|{ ITEM : "contains"
  ITEM ||--|| ITEM_DETAILS : "has"
  INVENTORY ||--|| CATEGORY : "categorized_in"
  USER {
      int id
      text username
      text password
  }
  INVENTORY {
      int id
      int user_id
  }
  ITEM {
      int id
      text name
      int inventory_id
  }
  ITEM_DETAILS {
      int item_id
      text description
      int quantity
  }
  CATEGORY {
      int id
      text name
  }
  ```

## API Specification

(include the list of API endpoints, along with details about the request and response data for each endpoint.)
