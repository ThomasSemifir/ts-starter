import { Arme } from "../implementations/Arme";

export interface IPersonnage {
    
    nom?: string;
    pointDeVie: number;
    arme: Arme;
    cible?: IPersonnage;

    attaquer() : void ;
    cibler(newCible:IPersonnage): void ;
    toString(): string ;
}