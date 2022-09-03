## :hammer: Technologies & Tools

- NodeJs
- Express
- MongoDB
- Docker

## :open_file_folder: Project Structure (Backend)
```
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package-lock.json
├── package.json
└── src
    ├── controllers
    │   └── news.controller.js
    ├── db
    │   └── database.js
    ├── models
    │   └── news.model.js
    ├── mongo
    │   └── init-mongo.js
    ├── routes
    │   └── news.routes.js
    └── server.js
```

## :wrench: Project setup

```bash
# Clone repository
git clone 

# Inside the project go to client folder
cd backend

# Install project dependencies
npm install

# Run project
docker-compose build && docker-compose up
```