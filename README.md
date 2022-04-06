# Rate my gen-eds

### Commands to run locally

- make this file: server/config.env - put this in it and replace <password> with the password

```
ATLAS_URI=mongodb+srv://computationalscience:<password>@cluster0.5q16w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

- can do npm run install-all-deps instead of steps 2 and 4
- npm install in root directory
- cd client
- npm install in the client directory
- npm start (Runs the client)
- open 2nd terminal window:
- cd server
- nodemon server (Runs the server)
- localhost:3000 - web app
- http://localhost:5000/courses - database data
