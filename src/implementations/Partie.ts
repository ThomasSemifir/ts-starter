import { IPersonnage } from "../interfaces/IPersonnage";
import { Gentil } from "./Gentil";
import { Mechant } from "./Mechant";

export class Partie {
    
    private _gentil: IPersonnage;
    private _mechant: IPersonnage;

    constructor(aventurier:IPersonnage,adversaire:IPersonnage){
        this._gentil = aventurier;
        this._mechant = adversaire;
    }

    // getters setters
    public get gentil() : IPersonnage {
        return this._gentil;
    }

    public set gentil(hero : IPersonnage) {
        this._gentil = hero;
    }

    public get mechant() : IPersonnage {
        return this._mechant;
    }

    public set mechant(adversaire : IPersonnage) {
        this._mechant = adversaire;
    }
    
    lancerPartie():void{
        let tour : boolean = true;
        let attaquant: IPersonnage;
        let defenseur: IPersonnage;


        while( this.gentil.pointDeVie > 0 && this.mechant.pointDeVie > 0) {
            if (tour === true){
                attaquant = this.gentil;
                defenseur = this.mechant;
            } else {
                attaquant = this.mechant;
                defenseur = this.gentil;
            }
            attaquant.cibler(defenseur);
            attaquant.attaquer();
            console.log(`${attaquant.nom} attaque ${defenseur.nom} et lui inflige ${attaquant.arme.degats}! Il lui reste ${defenseur.pointDeVie} points de vie!`)
            tour = !tour;
        }
    }

}