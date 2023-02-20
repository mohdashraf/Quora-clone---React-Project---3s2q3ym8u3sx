import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});


// {
//   "name": "qoura-clone",
//   "version": "1.0.0",
//   "description": "",
//   "main": "server.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "client": "npm start --prefix frontend",
//     "server": "nodemon backend/server.js",
//     "start": "nodemon --watch backend --exec node backend/server.js"
//   },
