import { Component, OnInit } from '@angular/core';

//Import Content interface
import { Content } from '../helper-files/content-interface';

//Import ContentList object type
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  //Create new list
  songList = new ContentList;

  constructor() {
    
    //Create songs to store
    let song1: Content;
    song1 = {
      id: 0,
      title: "Get your Wish",
      description: "An emotional, electronic ballad about the struggles of creative ambition and success.", 
      creator: "Porter Robinson", 
      imgURL: "https://media.pitchfork.com/photos/5e3491ed0e7e92000921e0f4/1:1/w_500/Porter-Robinson.jpg",
      type: "Electronic"
    };

    let song2: Content;
    song2 = {
      id: 1,
      title: "hot tea",
      description: "A contemplative indie song about love in its purest form.", 
      creator: "half•alive", 
      imgURL: "https://images.genius.com/d01e856954d02d85e71535b8ddd97bbf.1000x1000x1.png",
      type: "Indie Pop"
    };

    let song3: Content;
    song3 = {
      id: 2,
      title: "Daybreak",
      description: "A fun, harmonically bold electronic-jazz hybrid.", 
      creator: "Anomalie", 
      imgURL: "https://f4.bcbits.com/img/a0734284541_10.jpg",
      type: "Nu Jazz"
    };

    let song4: Content;
    song4 = {
      id: 2,
      title: "With The Love In My Heart",
      description: "An ambitious, genre-hopping musical journey.", 
      creator: "Jacob Collier", 
      imgURL: "https://upload.wikimedia.org/wikipedia/en/8/83/Djesse_Vol._1.jpg",
      type: "Jazz Fusion"
    };

    //Add songs to list
    this.songList.add(song1);
    this.songList.add(song2);
    this.songList.add(song3);
    this.songList.add(song4);
   }

  ngOnInit(): void {
  }

}
