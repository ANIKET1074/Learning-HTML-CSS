// Modules

import playGuitar from "./guitar.js";
import { shredding as shredd, plucking } from "./guitar.js";

// importing the class module
import user from "./user.js";

const user1 = new user("email@email.com", "Aniket");
console.log(user1);
console.log(user1.greetings());
console.log(playGuitar());
console.log(shredd());
console.log(plucking());
