# :zap: Ionic API TechData

App to display json data from an [API json file](https://media.jscrambler.com/blog/data.json) using the [Ionic 5 framework](https://ionicframework.com/docs) and [Capacitor](https://capacitor.ionicframework.com/).

## :page_facing_up: Table of contents

* [:zap: Ionic API TechData](#zap-ionic-api-techdata)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* This is a Progressive Web App that make a call to an [external json file](https://media.jscrambler.com/blog/data.json) for technical data. This is displayed using Ionic cards with data-binding to the json content.
* There is a copy button that will copy the Ionic card contents using a Capacitor Clipboard plugin.

## :camera: Screenshots

![techData screen print](./img/techData.png)

## :signal_strength: Technologies

* [Ionic/angular v5](https://ionicframework.com/)
* [Ionic v5](https://ionicframework.com/)
* [Angular v10](https://angular.io/)
* [Progressive Web App PWA](https://ionicframework.com/docs/publishing/progressive-web-app) using a service worker for instant loading and offline support.
* [Capacitor v2](https://capacitor.ionicframework.com/) open source native container used to build the app to run on iOS, Android, Electron (Desktop).
* [CORS Chrome Plugin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es) to allow cross-domain reque  st to be sent, also overrides Request Origin and CORS headers.

## :floppy_disk: Setup

* Load dependencies using `npm i`,
* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

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

## :cool: Features

* Progressive Web App (PWA) with web manifest and service worker - added using the @angular/pwa package.
* Copy function copies to Clipboard.
* Updated to Angular 10, Ionic 5.
* Deployed on netlify. Not necessary to create build file before pushing to Github repo. This is done by Netlify Deployment.

## :clipboard: Status & To-do list

* Status: NOT working
* When working app shows API data.

* To-do: - recreate with new Ionic app and improve http get method.

## :clap: Inspiration

* [jscrambler blog by Ahmed Bouchefra: Create an Ionic 4 PWA with Capacitor](https://blog.jscrambler.com/create-an-ionic-4-pwa-with-capacitor/).
* [jscrambler blog](https://jscrambler.com/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
