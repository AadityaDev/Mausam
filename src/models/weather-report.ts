import { WeatherTemp } from './weather-temp';
import { Weather } from './current-weather';
import { Clouds } from './clouds';
import { Wind } from './wind';
import { Sys } from './sys';

export class WeatherReport{

	public id:number;
	public dt:number;
	public main:WeatherTemp;
	public weather:Weather[];
	public sys:Sys;
	public dt_txt:string;

	constructor(){

	}

	public getDt():number{
		return this.dt;
	}

	public setDt():number{
		return this.dt;
	}

	public getMain():WeatherTemp{
		return this.main;
	}
	
	public setMain(main:WeatherTemp){
		this.main = main;
	}
		
	public getWeather(weather:Weather[]):Weather[]{
		return this.weather;
	}
	
	public setWeather(weather:Weather[]){
		this.weather = weather;
	}

	public getSys():Sys{
		return this.sys;
	}
	
	public setSys(sys:Sys){
		this.sys = sys ;
	}
	
	public getDtTxt():string{
		return this.dt_txt;
	}

	public setDtTxt(dt_txt:string){
		this.dt_txt = dt_txt;
	}

}