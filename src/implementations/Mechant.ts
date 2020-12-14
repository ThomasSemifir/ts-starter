import { AbstractPersonnage } from "./AbstractPersonnage";
import { Arme } from "./Arme";

export class Mechant extends AbstractPersonnage {

    animaux: string[] = ['chat','chien','tortue','colombe','cheval','singe','loutre','chèvre','ornythorinque'];
    adjectifs: string[] = ['infernal','boiteuse','borgne','rempant', 'omnipotent', 'extravagant', 'emflammé', 'somnolent', 'doux', 'hargneux']; 

    constructor(arme:Arme, cible:string){
        super(arme,cible);
        this.nom = this.genererNom();
    }

    private genererNom(): string {
        const animal = this.animaux[ Math.floor(Math.random()*this.animaux.length) ] ;
        const adj = this.adjectifs[ Math.floor( Math.random()*this.adjectifs.length) ];
        return animal +" "+ adj;
    }

}