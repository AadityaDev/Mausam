export class WeatherTemp{
  private temp: number;
  private temp_min: number;
  private temp_max: number;
  private pressure: number;
  private sea_level: number;
  private grnd_level: number;
  private humidity: number;
  private temp_kf: number;	

  constructor(){

  }

  public getTemp():number{
  	return this.temp;
  }

  public setTemp(temp:number){
  	this.temp = temp;
  }

  public getTemp_min(): number{
	return this.temp_min;
  }

  public setTemp_min(temp_min:number){
	this.temp_min=temp_min;
  }

  public getTempMax(): number{
	return this.temp_max;
  }
  
  public setTempMax(temp_max:number){
	this.temp_max=temp_max;
  }

  public getPressure(): number{
	return this.pressure;
  }

  public setPressure(pressure:number){
	this.pressure = pressure;
  }

  public getSeaLevel(): number{
	return this.sea_level;
  }
  
  public setSeaLevel(sea_level:number){
	this.sea_level =sea_level;
  }

  public getGrndLevel(): number{
	return this.grnd_level;
  }

  public setGrndLevel(grnd_level:number){
	this.grnd_level = grnd_level;
  }
  
  public getHumidity(): number{
	return this.humidity;
  }
  
  public setHumidity(humidity:number){
	this.humidity = humidity;
  }

  public setTempKf(): number{
	return this.temp_kf;
  }

  public getTempKf(temp_kf:number){
	this.temp_kf = temp_kf;
  }

}