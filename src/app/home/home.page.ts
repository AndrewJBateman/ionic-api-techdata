import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJsonFormData } from '../interfaces/form.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public formData: IJsonFormData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/data-form.json').subscribe((formData: IJsonFormData) => {
      this.formData = formData;
    });
  }

}
