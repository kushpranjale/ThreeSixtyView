import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';

// import {PanoViewer} from '../assets/imgp.jpeg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  constructor() {
    // this.panoImage = document.querySelector('.pono-image');
    // this.img = '/assets/imgp.jpeg';
  }

  title = 'ImageDemo';

  async ngOnInit() {}
  ngOnChanges() {}
}
