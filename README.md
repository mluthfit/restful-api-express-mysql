## RESTful API with Express and MySQL
This repository is the result of my exploration by creating RESTful API using Express and MySQL

# Contacts

| Route | HTTP | Body	 | Description	 |
| --- | --- | --- | --- |
| /api/contacts | `GET` | None | Get all contacts |
| /api/contacts/:id | `GET` | None | Get a contact |
| /api/contacts | `POST` | {'name': 'John Doe', 'email': 'johndoe@example.com', 'phone': '+1234567890'} | Create a new contact |
| /api/contacts/:id | `PUT` | {'name': 'John Doe', 'email': 'johndoe@example.com', 'phone': '+1234567890'} | Update a contact |
| /api/contacts/:id | `DELETE` | None | Delete a contact