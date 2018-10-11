import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Country } from '../../models/country';
import { Item } from '../../models/item';
import { CountriesProvider, Items, OpenweathermapProvider } from '../../providers/';

import { WeatherReportResponse } from '../../models/weather-report-response';

import {Observable} from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  
  country:Country;
  currentItems: Item[];
  weatherReport:any;
  countries:Country[];
  isLoaded:boolean = false;
  selectedCountry;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController ,private countriesProvider:CountriesProvider,
    private openweathermapProvider:OpenweathermapProvider) {
    this.currentItems = this.items.query();
    countriesProvider.getCountries().subscribe(
      response=>{
        this.countries = response;
      });

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  // onChange($event,country:Country){
  //  console.log($event.target.value);
  //      this.openweathermapProvider.getWeatherForecastByCountryName(country.getName())
  //   .subscribe(
  //     response=>{
  //       this.weatherReport = response;
  //     });
  // }

  onChange(country:Country){
    this.country = country;
    console.log(country.getName());
  }

  onSelectChange(selectedValue: any) {
    this.isLoaded = true;
    this.selectedCountry = this.country;
    for(let cou of this.countries){
      if(cou.name==selectedValue){
        this.selectedCountry = cou;
        this.getWeather(this.selectedCountry.name);
        break;
      }
    }
  }

  getWeather(countryName:string){
    this.openweathermapProvider.getWeatherForecastByCountryNames(countryName)
    .subscribe(
      response=>{
        console.log("weather forecast: "+JSON.stringify(response));
        this.weatherReport = response;
      });
  }

}
