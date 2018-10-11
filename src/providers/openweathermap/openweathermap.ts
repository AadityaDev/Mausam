import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../constant/constant';

import { WeatherReportResponse } from '../../models/weather-report-response';

import { Observable } from 'rxjs';

/*
  Generated class for the OpenweathermapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpenweathermapProvider {

  private apiKey = 'bacb0be049111d369c30de80db6bd99a';	
  private baseUrl = 'https://api.openweathermap.org/data/2.5/find';

  constructor(public http: HttpClient) {
    console.log('Hello OpenweathermapProvider Provider');
  }

  getWeatherForecastByCountryName(cityName:string):Observable<WeatherReportResponse>{
  	return this.http.get<WeatherReportResponse>(this.baseUrl+Constant.questioMark+Constant.query+Constant.equalsTo+cityName+"&appid"+Constant.equalsTo+this.apiKey);
  }

  getWeatherForecastByCountryNames(cityName:string){
    return this.http.get(this.baseUrl+Constant.questioMark+Constant.query+Constant.equalsTo+cityName+"&appid"+Constant.equalsTo+this.apiKey);
  }

}
