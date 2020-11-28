import { Component, OnInit } from '@angular/core';

import { InicioService } from '../../../services/inicio.service';
import { IAbout } from '../../../models/About';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit {

  public abouts: [] = [];

  constructor( private inicioService: InicioService ) { }

  ngOnInit(): void {
    this.inicioService.getAbout()
        .subscribe(
          (resp: any) => {
            console.log(resp);
            this.abouts = resp;
          },
          err => {
            console.error(err);
          }
        )
  }

}
