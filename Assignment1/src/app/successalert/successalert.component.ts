import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-successalert]',
  template: `<h1>Congratulation!!!<h1>
  <test></test>`,
  styles: [`h1{color: green;
    text-align: center`]
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
