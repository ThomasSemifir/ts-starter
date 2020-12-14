import { Arme } from "./implementations/Arme";
import { Gentil } from "./implementations/Gentil";
import { Mechant } from "./implementations/Mechant";
import { Partie } from "./implementations/Partie";




let arme1 = new Arme();
let arme2 = new Arme();

let gentil: Gentil = new Gentil(arme1, "gentil gars");
console.log(gentil.toString());

let mechant:Mechant = new Mechant(arme2,'gentil gars');
console.log(mechant.toString());

let partie = new Partie(gentil,mechant);
partie.lancerPartie();