import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap-models';
import { FaceSnapService } from '../services/face-snap-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  my_snap!: FaceSnap;
  
  like_text!:string;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.like_text = "😆";
    const faceSnapId: number = +this.route.snapshot.params['id'];
    this.my_snap = this.faceSnapService.getFaceSnap(faceSnapId);
  }
  onAddLike(){
    if (this.like_text == "😆") {
      this.faceSnapService.actionFaceSnap(this.my_snap.id, "snap");
      this.like_text = "😒";
      this.faceSnapService.liked_posts++;
      console.log(this.faceSnapService.liked_posts);
    } else {
      this.faceSnapService.actionFaceSnap(this.my_snap.id, "unsnap");
      this.like_text = "😆";
      this.faceSnapService.liked_posts--;
      console.log(this.faceSnapService.liked_posts);
    } 
  }
  onclick(){}
}
