import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ///////////////////////
  //  Styles
  ///////////////////////
  mainPrimaryColor: string = '#46D10C';
  marginTop: string = '50px';

  footer = {
    // 'position': 'absolute',
    // 'bottom': '0',
    'width': '100%',
    /* Set the fixed height of the footer here */
    /*height: 60px;*/
    /* Vertically center the text there */
    'color': '#000000',
    'background-color': this.mainPrimaryColor,
    'margin-top': this.marginTop
  };

  legalText = {
    'margin-top': '15px',
    'text-align': 'center'
  };

  social = {
  'font-size': '2.5rem',
  'margin-bottom': '10px',
  'text-align': 'center'
  };

  ngOnInit() {
  }

}
