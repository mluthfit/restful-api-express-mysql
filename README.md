# RESTful API with Express and MySQL
This repository is the result of my exploration by creating RESTful API using Express and MySQL

## Getting Started
To start running this project locally, you must follow these steps:
First, clone there repository to the your folder.
```
> https://github.com/mluthfit/restful-api-express-mysql.git
```

Then, open the folder and **install** all packages with npm.
```
> npm install
```

Then, launch the XAMPP control panel and start `MySQL` service.

Then, open `http://localhost/phpmyadmin/` in your browser and create database.

Next, create table named `contacts` in your database (you can follow the table structure below).
| Name | Type | Size | Nullable | Extra |
| --- | --- | --- | --- | --- |
| id | big int | 20 | No | AUTO_INCREMENT
| name | varchar | 191 | No |
| email | varchar | 191 | No |
| phone | varchar | 191 | No |

Then, change `dbConfig.js` in `src > database > db.js` according to your database name.

Last, start `express` server.
```
node app.js
```

You can use `Postman` to use request details below.
| Route | HTTP | Body | Description |
| --- | --- | --- | --- |
| /api/contacts | `GET` | None | Get all contacts |
| /api/contacts/:id | `GET` | None | Get a contact |
| /api/contacts | `POST` | {'name': 'John Doe', 'email': 'johndoe@example.com', 'phone': '+1234567890'} | Create a new contact |
| /api/contacts/:id | `PUT` | {'name': 'John Doe', 'email': 'johndoe@example.com', 'phone': '+1234567890'} | Update a contact |
| /api/contacts/:id | `DELETE` | None | Delete a contact