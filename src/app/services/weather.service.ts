import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private client: HttpClient,  rout: Router) { }

   apikey = "1kM7eHDqpmOl7ob8y9WAq3XQL0S0ysDI";

  public getLocationAutoComplete(q: string): Observable<any>{
    return this.client.get<any>("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+this.apikey + "&q="+q);
  }

  public getCurrentWeather(locationKey): Observable<any>{
    return this.client.get<any>("http://dataservice.accuweather.com/currentconditions/v1/" + locationKey + "?apikey=" + this.apikey);
  }

  public getFiveDaysDailyForecast(locationKey): Observable<any>{
    return this.client.get<any>("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey + "?apikey=" + this.apikey);
  }
}