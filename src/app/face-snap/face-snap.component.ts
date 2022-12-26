import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap-models';
import { FaceSnapService } from '../services/face-snap-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent implements OnInit{
  @Input() my_snap!: FaceSnap;
  
  like_text!:string;

  constructor(private faceSnapService: FaceSnapService,
              private router: Router,) { }

  ngOnInit(){
    this.like_text = "😆";
    console.log(this.faceSnapService.liked_posts);
}  
  onclick(){
  }
  
  onDisplay(){
    this.router.navigateByUrl("facesnaps/" + this.my_snap.id);
  }  
}
