# CHALLENGE BACKEND - NodeJs
## Description
Let explore the disney world with this example API created with node, express, sequelize, postgress and a vanilla js frontend using bootstrap Sbadmin2 components.
## Installation

1. Download database
   ```sh
   docker run --name database -p 5432:5432 -d jtorrejonl/disney_db
   ```
3. Clone, Install packages and launch
   ```sh
   git clone https://github.com/jestorDev/NodeDisneyChallenge.git
   npm install
   npm start
   ```
4. Go to http://localhost:3000/
   


## Requeriments

| Requeriment  | Status |
| ------------- | ------------- |
| Database Modeling  | ✅ |
| User authentication JWT   | ✅ |
| Characters list   | ✅  |
| Characters CRUD  | 🚧 TODO:Create,Update form|
| Characters Details   | ✅ |
| Characters Search params   | ✅ |
| Movies list   | ✅  |
| Movies Details   | ✅ |
| Movies CRUD   | 🚧 TODO:Create,Update form|
| Movies Search params | ✅ |
| Welcome Email | ❌ |
| Postman documentation  | ❌ |
| Tests  | ❌ |
| Extras |
| Frontend  | ✅ |
| Database container | ✅ |
| Deploy | ❌ |


## Views 

![/view/character](screenshots/characters.png?raw=true "Characters list")
![/view/movies](screenshots/movies.png?raw=true "Movies list")


