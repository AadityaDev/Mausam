import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';

/*
  Generated class for the CountriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountriesProvider {

  public countries:Country[];
  public countriesUrl:string = "https://restcountries.eu/rest/v2/all";

  constructor(public http: HttpClient) {
  
  }

  public getCountries():Observable<Country[]>{
  	return this.http.get<Country[]>(this.countriesUrl);
    // return this.countries;
  }

}
