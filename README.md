
Angular 8 Learning Exercises from O'Reilly book "Angular - Up & Running"

* Project: Stock-market
    * Component `stock-item` demonstrates data binding 
    * Component `stock-item2` demonstrates a model
    * Component `stock-item3` demonstrates `ngClass` directive
    * Component `stock-item4` demonstrates `ngStyle` directive
    * Component `stock-item5` demonstrates `ngIf` directive
    * Component `stock-item6` demonstrates `ngFor` directive
    * Component `stock-item7` demonstrates `@Input` and `@Output`
    * Component `create-stock` demonstrates template-driven forms using value and data binding
    * Component `create-stock2` demonstrates template-driven forms using ngModel directive
    * Component `create-stock3` demonstrates template-driven forms complete example
    * Component `create-stock4` demonstrates template-driven formgroup example
    * Component `stock-item8` demonstrates reactive-forms using form controls
    * Component `stock-item9` demonstrates reactive-forms using form group
    * Component `stock-item10` demonstrates reactive-forms using form builder
    * Component `stock-item11` demonstrates reactive-forms using validation
    * Component `stock-item12` demonstrates reactive-forms copying data from component to UI
    * Component `stock-item13` demonstrates reactive-forms with form arrays
* Project: Stock-market2
    * Components `stock-item` and `stock-list` demonstrates services and observables
    * Service `Stock-Service2` demonstrates `HttpClient2`


* Start the Ng server `ng serve` and access it via http://localhost:4200
* Start the Stock API server following the instructions:
    * `cd server`
    * `npm i` - installs all the dependencies for the Node.js server
    * `node index.js` - starts the server on port 3000

## Angular CLI Reference

* `ng serve` to start the server
* `ng serve --proxy-config proxy.conf.json` to start server with proxy configs for CORS
* `ng new <project>` create new project
* `ng generate component <dir/name>` create new component
* `ng g class <dir/name>` create new model class
* `ng g service <dir/name>` create new service. 