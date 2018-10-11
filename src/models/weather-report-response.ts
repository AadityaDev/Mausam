import { City } from './city';
import { Coordinates } from './coordinates';
import { WeatherReport } from './weather-report';

export class WeatherReportResponse{

  private cod:string;
  private message:number;
  private cnt:number;
  private list:WeatherReport[];
  private city:City;

  constructor() {
  	
  }

  public getCod():string{
    return this.cod;
  }

  public setCod(cod:string){
    this.cod = cod;
  }

  public getMessage():number{
    return this.message;
  }
 
  public setMessage(message:number){
    this.message = message;
  }

  public getCnt():number{
    return this.cnt;
  }

  public setCnt(cnt:number){
    this.cnt =cnt;
  }

  public getList():WeatherReport[]{
    return this.list;
  }
  
  public setList(list:WeatherReport[]){
    this.list = list;
  }

  public getCity():City {
    return this.city;
  } 

  public setCity(city:City) {
    this.city = city;
  } 


}

// export interface WeatherReport {
//   city:City;
//   coordinates:Coordinates;
//   [prop: string]: any;
// }
