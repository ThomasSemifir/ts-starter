export class Arme {

    type:string[] = ['épee', 'masse','hache'];
    adj: string[] = ['long','tranchant','émoussé'];

    private _nom: string;
    private _degats: number;

    constructor(){
        this._nom = this.genererNomArme() ;
        this._degats = this.genererDegats();
    }

    public get nom() : string  {
        return this._nom;
    }

    public set nom(newNom : string ) {
        this._nom = newNom;
    }

    public get degats() : number  {
        return this._degats;
    }

    public set degats(newValue : number ) {
        this._degats = newValue;
    }

    private genererDegats(): number {
        return Math.floor( Math.random() * 10 ) ;
    }

    private genererNomArme(): string {
        return this.type[ Math.floor( Math.random() * this.type.length)] + " " + this.adj[ Math.floor( Math.random() * this.adj.length ) ];
    }

    toString(): string {
        return `${this.nom}`;
    }

}