"use strict";
// 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let vehicles = ["Honda motorcycle", "Honda civic", "Dala", "Hilux", "Rolls Royce"];
vehicles.map((items) => console.log(`I would like to own a ${items}.`));
