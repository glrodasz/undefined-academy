// import fs from 'fs'; (ESM)
const fs = require("fs"); // Common.js

// Error first callback

function writeFileCallback(error) {
  if (error) {
    console.error("Error al escribir el archivo", error);
  } else {
    console.log("El archivo se escribió correctamente");
  }
}

fs.writeFile("logs.txt", "JaváScript", writeFileCallback);

function readFileCallback(error, data) {
  if (error) {
    console.error("Error al leer el archivo", error);
  } else {
    console.log(`El archivo se leyó correctamente "${data}"`, data);
  }
}

fs.readFile("logs.txt", "utf8", readFileCallback);