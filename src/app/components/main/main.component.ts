import { Component, OnInit} from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public q: string;
  public locationKey: string;
  public locationValue: string;
  public currentWeather = new Array();
  public dailyForecasts = new Array();
  public favoritesLocation = new Array();

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.weather.getFiveDaysDailyForecast('215854').subscribe(result => {
      this.dailyForecasts = result.DailyForecasts;
    });
  }

  public addFavoriteLocation() {
    //this.locationKey -> save to localstorage like that:
    //Example: location Tel Aviv - key=favoritetelaviv; value=215854
    localStorage.setItem('favorite' + this.locationValue, this.locationKey);
    alert(this.locationValue + " Added to your Favorite Locations!")
  }
  public removeFromFavorites() {
    localStorage.removeItem('favorite' + this.locationValue);
    alert(this.locationValue + " Has been removed from your Favorite Locations!");
  }

  public searchAutoComplete(q: any) {
    this.q = q;
    this.weather.getLocationAutoComplete(q).subscribe(result => {
      this.locationKey = result[0].Key;
      this.locationValue = result[0].LocalizedName;
      this.weather.getFiveDaysDailyForecast(this.locationKey).subscribe(res => {
        this.dailyForecasts = res.DailyForecasts;
      })
      this.weather.getCurrentWeather(this.locationKey).subscribe(currentWeatherResult => {
        this.currentWeather = currentWeatherResult;
      })
    })
  }
}