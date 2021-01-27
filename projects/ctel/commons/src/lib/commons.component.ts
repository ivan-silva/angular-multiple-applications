import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-cmp',
  template: `
    <p>
      Componente LIBRARY
    </p>
  `,
  styles: [
  ]
})
export class CommonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
