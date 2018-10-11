import { Coordinates } from './coordinates';

export class City{

  id:number;
  name:string;
  coord:Coordinates;	
  country:string;

  constructor() {
   
  }

  public getID():number{
  	return this.id;
  }

  public setID(id:number){
  	this.id=id;
  }

  public getName():string{
  	return this.name;
  }

  public setName(name:string){
  	this.name=name;
  }

  public getCOORD():Coordinates{
  	return this.coord;
  }

  public setCOORD(coord:Coordinates){
  	this.coord=coord;
  }

  public getCountry():string{
  	return this.country;
  }

  public setCountry(country:string){
  	this.country=country;
  }

}

export interface City {
  id:number;
  name:string;
  coord:Coordinates;	
  country:string;
}
