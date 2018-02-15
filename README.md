# CollectionApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Insructions
## Angular 2 Marketplace application step by step

Build from scratch angular 2 application with two sections: collection and market.
The user will be able to add to his collection (cart) products from the market.
Start to setup development environment using the command-line interface:

- Install NodeJS and NPM using homebrew `brew install node`
- Install angular CLI
`sudo npm install -g angular-cli@latest`
 if you  have **permission** issues with _**Unable to save binary**_ the solution is to run
`sudo chown -R root /usr/local/lib/node_modules/`
and try to install again.

- create new application name *collection-app* `ng new collection-app`

- To serve the app run the command in the app directory   
`ng serve`
the app will run at **http://localhost:4200**
**If the browser return "app works" then the setup is finish.**

- Install bootstrap using NPM, this will add bootstrap as a dependency 
`npm install --save bootstrap@3.3.7`

Modify the angular-cli.json file:
```
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.css"
      ]
```

##### First component Market
create new component `ng g c market -is --spec false`
g - generate, c - component.
app.module.ts updates and import to the module market component.
- added to *market.component.html*
```
<div class="row">
  <div class="col-xs-12">
    <ul class="list-group">
      <li class="list-group-item">
        <span class="badge">Photo</span>
        <button class="btn btn-success">Add to Collection</button>&nbsp;
        Anything
      </li>
    </ul>
  </div>
</div>
```

##### Second component Collection
create new component `ng g c collection -is --spec false`
- added to *collection.component.html*
```
<div class="row">
  <div class="col-xs-12">
    <ul class="list-group">
      <li class="list-group-item">
        <span class="badge">Photo</span>
        <button class="btn btn-danger">Remove from Collection</button>&nbsp;
        Anything
      </li>
    </ul>
  </div>
</div>
```

when entering the initial state of the app it includes market and collection and looks like:
![alt text](https://github.com/VitaliAbramov/Angular2_Collection_App/blob/master/images/collection.png)
