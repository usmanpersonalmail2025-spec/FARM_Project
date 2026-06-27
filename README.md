# 🌾 Node Farm

A simple Node.js application that serves a farm products website using only Node.js core modules. The project demonstrates how to build a basic web server, handle routing, read files from the filesystem, and generate dynamic HTML pages without using any external frameworks.

## Features

* Display an overview page with all farm products
* View detailed information for each product
* Dynamic HTML generation using template replacement
* Basic URL routing
* Read product data from a JSON file
* No external dependencies

## Built With

* Node.js
* HTTP Module
* File System (fs) Module
* URL Module
* HTML Templates
* JSON

## Project Structure

```
Node Farm/
│
├── dev-data/
│   └── data.json
│
├── templates/
│   ├── template-card.html
│   ├── template-overview.html
│   └── template-product.html
│
├── index.js
└── README.md
```

## Routes

| Route           | Description                            |
| --------------- | -------------------------------------- |
| `/`             | Displays the overview page             |
| `/overview`     | Displays the overview page             |
| `/product?id=0` | Displays details of a specific product |
| `/api`          | API placeholder                        |
| Any other route | Returns "Page Not Found"               |

## How It Works

1. The server starts using Node.js' `http` module.
2. HTML templates are loaded from the `templates` folder.
3. Product data is read from `dev-data/data.json`.
4. Incoming requests are parsed using the `url` module.
5. Template placeholders are replaced with product data.
6. The generated HTML is sent back to the client.

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project

```bash
cd Node\ Farm
```

### Start the server

```bash
node index.js
```

### Open in your browser

```
http://127.0.0.1:8000
```

## Learning Objectives

This project helped practice:

* Creating an HTTP server
* Working with Node.js core modules
* Reading files synchronously
* Parsing JSON data
* URL routing
* Dynamic HTML generation
* Template replacement
* Serving multiple pages

## Future Improvements

* Add Express.js
* Build a REST API
* Add search and filtering
* Use asynchronous file operations
* Connect to a database
* Improve error handling
* Add CSS styling
* Deploy the application

## Author

**Usman Khan**

---

This project was built as part of learning Node.js and backend development.
