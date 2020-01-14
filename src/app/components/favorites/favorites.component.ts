import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  
  public q: string;
  public favoritesLocation = new Array();
  public locationKey: string;

  constructor(private weather: WeatherService, private router: Router) { }

  ngOnInit() {
    var list = new Array<any>();
    var keyList = new Array<any>();
    var anotherList;

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      if (key.startsWith('favorite')) {
        list.push(value);
        keyList.push(key);
        this.weather.getCurrentWeather(value).subscribe(result => {
          anotherList = result;
          this.favoritesLocation.push(anotherList);
        });
      }
    }
  }

  public showFavoriteLocationOnMain(favoritesLocation) {
    if (this.favoritesLocation = favoritesLocation) {
      this.router.navigate(["main", { q: favoritesLocation.LocalSource.Name, foo: 'foo' }]);
    }
  }
}