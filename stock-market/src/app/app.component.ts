import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // CSS/DOM selector that gets translated into an instance of this component and looks for <app-root> elements in HTML
  templateUrl: './app.component.html', // Path to the HTML template used to render this component. Inline templates can be used instead of templateUrl
  styleUrls: ['./app.component.css'] // Any component-specific styling. Angular ensures that the styles are encapsulated, so CSS classes from one component won't affect another.
})
export class AppComponent { // The component class with its own members and functions
  title = 'Stock Market';
  status = 'running'
}
