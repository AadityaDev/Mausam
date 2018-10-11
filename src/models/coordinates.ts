export class Coordinates{

  lat:number;
  long:number;

  constructor() {
    
  }

  public getLat(){
  	return this.lat;
  }

  public setLat(lat:number){
  	this.lat = lat;
  }

  public getLong(){
  	return this.long;
  }

  public setLong(long:number){
  	this.lat = long;
  }

}

export interface Coordinates {
  lat:number;
  long:number;
}
