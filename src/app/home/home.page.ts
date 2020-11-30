import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Plugins } from "@capacitor/core";
const { Clipboard } = Plugins;

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	// declare variables: address of JSON file and an array to hold the data
	API_URL = "https://www.techiediaries.com/api/data.json";
	entries: Array<any>;

	constructor(private httpClient: HttpClient) {}

	// add the event that is called when the ionic page is loaded then call getData() method
	ionViewDidEnter() {
		this.getData();
	}

	// method to call get() method of HttpClient and subscribe to the returned Observable
	// assign fetched data to the entries varaible.
	getData() {
		this.httpClient.get(this.API_URL).subscribe((entries: any[]) => {
			this.entries = entries;
			console.log(entries);
		});
	}

	// method to copy a term to the clipboard.
	async copy(name: string, text: string) {
		console.log("copy", text);
		Clipboard.write({
			string: name + " is " + text,
		});
	}
}
