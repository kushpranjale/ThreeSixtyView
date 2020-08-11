import { Component, OnInit } from '@angular/core';
declare var PANOLENS: any;

@Component({
  selector: 'app-three-sixty-image',
  templateUrl: './three-sixty-image.component.html',
  styleUrls: ['./three-sixty-image.component.scss'],
})
export class ThreeSixtyImageComponent implements OnInit {
  viewer: any;
  panoImage: any;
  panorama: any;
  img: string;
  panorama2: any;
  infospot: any;
  constructor() {
    this.panorama = new PANOLENS.ImagePanorama('/assets/test.jpeg');
    this.panorama2 = new PANOLENS.ImagePanorama('/assets/test2.jpeg');
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    setTimeout(() => {
      this.infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
      this.infospot.position.set(-100, -500, -5000);
      this.infospot.addHoverText('test');
      this.infospot.addEventListener('click', () => {
        this.viewer.setPanorama(this.panorama2);
      });

      this.panorama.add(this.infospot);
      this.viewer = new PANOLENS.Viewer({
        container: document.querySelector('#pono-image'),
        output: 'console',
      });
      this.viewer.add(this.panorama, this.panorama2);
    }, 3000);
  }
}
