import { Arme } from "./Arme";
import { IPersonnage } from '../interfaces/IPersonnage';

export abstract class AbstractPersonnage implements IPersonnage{

    private _nom?: string;
    private _pointDeVie: number;
    private _arme: Arme;
    private _cible?: IPersonnage ;

    constructor(arme:Arme,nom?:string){
        if(nom) this._nom = nom;
        this._pointDeVie = this.genererPDV();
        this._arme = arme;
    }

    //getter setters
    
    public get nom() : string | undefined {
        return this._nom;
    }

    public set nom(newNom : string | undefined) {
        this._nom = newNom;
    }

    public get pointDeVie() : number {
        return this._pointDeVie;
    }

    public set pointDeVie(pdv : number) {
        this._pointDeVie = pdv;
    }
    
    public get arme() : Arme {
        return this._arme;
    }

    public set arme(newArme : Arme) {
        this._arme = newArme;
    }
    
    public get cible() : IPersonnage | undefined{
        return this._cible;
    }

    public set cible(newCible : IPersonnage |undefined) {
        this._cible = newCible;
    }
    
    genererPDV(): number {
        return Math.floor( ( Math.random() * 100 ) + 100);
    }

    attaquer(): void {
        if(this.cible) this.cible.pointDeVie -= this.arme.degats;
    }

    cibler(newCible:IPersonnage): void {
        this.cible = newCible ;
    }

    toString(): string {
        return ` ${this.nom} porte une ${this.arme.toString()} et a ${this.pointDeVie} points de vie`;
    }  
    
}
