// Demo 1 (run node on terminal)
// console.log("Hello World");

// ------------------------------------

// Demo 2 (Global Variables)
// global.foo = 3;

// ------------------------------------

//  Demo 3: Common Js Module
// const name = "Marvin";
// module.exports = { name };

// ------------------------------------

// Demo 4: ES Modules
// Task: convert name variable to ESM (You learn this in React Lessons)
// export const name = "Marvin";

// ------------------------------------
// Demo 5: Working with Files

// const fs = require("fs/promises");
import fs from "fs/promises";

// Read File
fs.readFile("readme.txt")
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err.message));

// Write File
fs.writeFile("readme.txt", "Hello, I will write a new text ");
