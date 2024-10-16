import { Component } from '@angular/core';


@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent {
    countrylist:country[]=[
      new country(1,'india'),
      new country(2,'usa')

    ];

}
class country{
  id:number;
  name: string;
  constructor(id:number, name: string){
    this.id=id;
    this.name=name;
  }
}

