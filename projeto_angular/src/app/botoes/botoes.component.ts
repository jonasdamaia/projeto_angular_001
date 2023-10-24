import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss']
})
export class BotoesComponent implements OnInit {
  pt: boolean = false
  en: boolean = false
  es: boolean = false

  constructor() {}

  ngOnInit(): void {}

  showmessagept() : void {
    this.pt = true;
    this.en = false;
    this.es = false
  }

  showmessageen() : void {
    this.pt = false;
    this.en = true;
    this.es = false
  }

  showmessagees() : void {
    this.pt = false;
    this.en = false;
    this.es = true
  }
}