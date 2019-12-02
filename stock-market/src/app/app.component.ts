import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root', // CSS/DOM selector that gets translated into an instance of this component and looks for <app-root> elements in HTML
  templateUrl: './app.component.html', // Path to the HTML template used to render this component. Inline templates can be used instead of templateUrl
  styleUrls: ['./app.component.css'] // Any component-specific styling. Angular ensures that the styles are encapsulated, so CSS classes from one component won't affect another.
})
export class AppComponent implements OnInit{ // The component class with its own members and functions
  title = 'Stock Market';
  status = 'running'

  public stockArray: Array<Stock>;

  ngOnInit(): void {
    this.stockArray = [
      new Stock('IBM', 'IBM', 100, 90),
      new Stock('Microsoft', 'MSFT', 120, 60),
      new Stock('APPLE', 'APPL', 70, 90),
    ];
  }

  public toggleFavorite(index) {
    console.log("Favorite item index: ", index);
    // let index = inputObj['index'];
    console.log(`We are toggling the favorite state for stock: ${this.stockArray[index].code} at position ${index}`, event);
    this.stockArray[index].favorite = !this.stockArray[index].favorite;
  }

}
