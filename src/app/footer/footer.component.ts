import { Component, OnInit } from '@angular/core';
import { FaceSnapService } from '../services/face-snap-service';
import { SingleFaceSnapComponent } from '../single-face-snap/single-face-snap.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  liked_snaps!:number;
  constructor(private singlefaceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    SingleFaceSnapComponent.prototype.onclick = () =>{
      this.liked_snaps = this.singlefaceSnapService.liked_posts;
    } 
  }

}
