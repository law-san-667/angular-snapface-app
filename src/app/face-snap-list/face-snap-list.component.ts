import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap-models';  
import { FaceSnapService } from '../services/face-snap-service';

@Component({
  selector: 'app-list-snap',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {
  facesnaps !: FaceSnap[];

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.facesnaps = this.faceSnapService.getAllFaceSnaps();
  }
}
