## Weather 

This is a simple weather application that returns a list of current weather details for 5 cities in Europe and also display a forecast of any of the city on demand.

I honestly hope you like the implementation and I look forward to discussing this solution with you

## Project Architecture

I used the container-presenter pattern to design the weather application. I had different great options before chosing the above pattern. But I wanted to increase the scope of my test and also implement other interesting features.

## Components

I have three components, the `app component` which I used as our entry point,
the `weather-list component` for displaying the list of the weather conditions in the selected 5 cities and also the `weather-forecast component` which displays the forecast for next few hours. The app component is the parent component while the others are the children component

# performance

Because of the size of the app, there was no need to import or use some of the provided angular features and files. 
Also, I implemented caching for the `forecast component` to reduce http calls.
I used the onPush strategy on the child component as well.
I removed reductant files, 
I used the container directive to reduce reductant elements 
I used `forkJoin` to ensure that the list component is rendered only when the 5 requests are   completed

# Testing

I Implemented both unit testing and interaction testing. This can be found in the `spec` file for the app component and also in the pipe located in the shared folder.

# Error Handling

I created and interceptor that appends the token to every request and also listen for errors. I used the alert function for the errors 

# Styles (UI/UX)

In order to improve performance as well and to keep the app as simple as it could be, there was no external libraries used. The colors where carefully picked and I made the app as simple as possible with minimal design.


# Off scope

I implemented a custom pipe to convert the temperature and also unit tested it.
Although I wanted to implement other interesting features and capabilities, like users ability to add new countries to the dashboard, change temperature unit and many more from the UI, but I had little time

# Angular info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).





