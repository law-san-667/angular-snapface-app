import { Injectable } from "@angular/core";
import { FaceSnap } from "../model/face-snap-models";


@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {
    liked_posts : number = 0;

    facesnaps : FaceSnap[] = [

        { 
          id: 0,
          title: "Annie",
          description :  "Annie is finally here !",
          likes : 69,
          posted_date : new Date(),
          image_url : "assets/img/annie.png",
          location : "Anime City",
          author : "Jojo the creator",
          alternative: "Annie is back but hummm",
        },
            
        { 
          id: 1, 
          title: "The GOAAT !!",
          description : "To be continued...",
          likes : 100,
          posted_date : new Date(),
          image_url : "assets/img/messi.png",
          author : "The master Programer",
          alternative : "Those who know know",
        },
  
        { 
          id: 2,
          title: "Zucky thinking",
          description : "Now its about JS frameworks hehe",
          likes : 5000,
          posted_date : new Date(),
          image_url : "assets/img/mark.png",
          author : "Anonymous",
          location : "Aera 51",
          alternative : "Zucky remember how he became a billionaire",
        },
        { 
          id: 3,
          title: "The fucking Wall",
          description : "This guy block every shot but only against Bayern",
          likes : 666,
          posted_date : new Date(),
          image_url : "assets/img/sommer.png",
          author : "A frustrated guy",
          location : "A random place",
          alternative : "Yann Sommer...",
        },
      ]

      getAllFaceSnaps(): FaceSnap[] { 
        return this.facesnaps;
      }

      getFaceSnap(facesnap_id: number): FaceSnap {
        if(this.facesnaps[facesnap_id])
          return this.facesnaps[facesnap_id];
        else 
          throw new Error("No face snapshot found");
      }

      actionFaceSnap(facesnap_id: number, action: "snap" | "unsnap"): void {
        if (this.getFaceSnap(facesnap_id))
          action == "snap" ? this.getFaceSnap(facesnap_id).likes++ : this.getFaceSnap(facesnap_id).likes--; 
        else
          throw new Error("Undefined facesnap");
      }
}