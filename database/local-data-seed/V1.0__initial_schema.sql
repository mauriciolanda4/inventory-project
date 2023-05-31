INSERT INTO USER (id, username, password)
VALUES (1, 'johnsmith', 'password123');

INSERT INTO INVENTORY (id, user_id)
VALUES (1, 1);

INSERT INTO CATEGORY (id, name)
VALUES (1, 'Electronics'),
       (2, 'Clothing'),
       (3, 'Books');

INSERT INTO ITEM (id, name, inventory_id, notes, isMissing, isBorrowed)
VALUES (1, 'Laptop', 1, 'MacBook Pro', 0, 0),
       (2, 'T-Shirt', 1, 'Blue, Size M', 0, 0),
       (3, 'Book', 1, 'The Great Gatsby', 0, 1);

INSERT INTO ITEM_DETAILS (id, item_id, description, quantity)
VALUES (1, 1, 'Silver color, 15-inch display', 1),
       (2, 2, 'Cotton material', 3),
       (3, 3, 'Paperback edition', 2);

INSERT INTO METADATA (id, item_id, created_at, updated_at)
VALUES (1, 1, '2023-05-26 09:00:00', '2023-05-26 09:30:00'),
       (2, 2, '2023-05-25 15:30:00', '2023-05-26 10:15:00'),
       (3, 3, '2023-05-24 18:45:00', '2023-05-26 11:00:00');
