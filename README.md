# Ionic API TechData

App to display json data from an [API json file](https://media.jscrambler.com/blog/data.json) using the [Ionic 5 framework](https://ionicframework.com/docs) and [Capacitor](https://capacitor.ionicframework.com/).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* This is a Progressive Web App that make a call to an [external json file](https://media.jscrambler.com/blog/data.json) for technical data. This is displayed using Ionic cards with data-binding to the json content.
* There is a copy button that will copy the Ionic card contents using a Capacitor Clipboard plugin.

## Screenshots

![techData screen print](./img/techData.png)

## Technologies

* [Ionic/angular v5.0.4](https://ionicframework.com/)
* [Ionic v5.22.0](https://ionicframework.com/)
* [Angular v9.0.4](https://angular.io/)
* [Progressive Web App PWA](https://ionicframework.com/docs/publishing/progressive-web-app) using a service worker for instant loading and offline support.
* [Capacitor v1.5.0](https://capacitor.ionicframework.com/) open source native container used to build the app to run on iOS, Android, Electron (Desktop).
* [CORS Chrome Plugin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es) to allow cross-domain requestst to be sent, also overrides Request Origin and CORS headers.

## Setup

* Load dependencies using `npm i`,
* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* home.page.ts methods to get data once Ionic page loaded

```typescript
// add the event that is called when the ionic page is loaded then call getData() method
ionViewDidEnter() {
  this.getData();
}

// method to call get() method of HttpClient and subscribe to the returned Observable
// assign fetched data to the entries varaible.
getData() {
  this.httpClient.get(this.API_URL).subscribe((entries: any[]) => {
    this.entries = entries;
  });
}
```

## Features

* Progressive Web App (PWA) with web manifest and service worker - added using the @angular/pwa package.
* Copy function copies to Clipboard.
* Updated to Angular 9, Ionic 5.
* Deployed on netlify. Not necessary to create build file before pushing to Github repo. This is done by Netlify Deployment.

## Status & To-do list

* Status: NOT working - error `Refused to load the image 'http://localhost:8100/favicon.ico' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'img-src' was not explicitly set, so 'default-src' is used as a fallback.`
* When working app shows API data.

* To-do: fix error. Modify for electrical API data. Develop country json file to include electrical data. Add functionality. Ultimately publish as an app.

## Inspiration

* [jscrambler blog by Ahmed Bouchefra: Create an Ionic 4 PWA with Capacitor](https://blog.jscrambler.com/create-an-ionic-4-pwa-with-capacitor/).
* [jscrambler blog](https://jscrambler.com/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
