
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  //New Array
  songList: Content[];

  constructor() { 
    //Create songs to store
    let song1: Content;
    song1 = {
      id: 0,
      title: "Get your Wish",
      description: "An emotional, electronic ballad about the struggles of creative ambition and success.", 
      creator: "Porter Robinson", 
      imgURL: "https://media.pitchfork.com/photos/5e3491ed0e7e92000921e0f4/1:1/w_500/Porter-Robinson.jpg",
      type: "Electronic",
      tags: ["nurture", "electronic", "2021"]
    };

    let song2: Content;
    song2 = {
      id: 1,
      title: "Hot Tea",
      description: "A contemplative indie song about love in its purest form.", 
      creator: "half•alive", 
      imgURL: "https://images.genius.com/d01e856954d02d85e71535b8ddd97bbf.1000x1000x1.png",
      type: "Pop"
    };

    let song3: Content;
    song3 = {
      id: 2,
      title: "Daybreak",
      description: "A fun, harmonically bold electronic-jazz hybrid.", 
      creator: "Anomalie", 
      type: "Jazz"
    };

    let song4: Content;
    song4 = {
      id: 3,
      title: "With The Love In My Heart",
      description: "An ambitious, genre-hopping musical journey.", 
      creator: "Jacob Collier", 
      imgURL: "https://upload.wikimedia.org/wikipedia/en/8/83/Djesse_Vol._1.jpg",
      type: "Jazz",
      tags: ["djesse", "vol1", "jc"]
    };

    let song5: Content;
    song5 = {
      id: 4,
      title: "Dream Dream Dream",
      description: "A lush, magical electronic anthem.", 
      creator: "Madeon", 
      imgURL: "https://static.wikia.nocookie.net/madeon/images/2/24/712ajqcqELL._SS500_.jpg",
      tags: ["madeon", "good-faith", "2019"]
    };

    let song6: Content;
    song6 = {
      id: 5,
      title: "Midnight Sun",
      description: "Electronic dnb track that starts dark and gloomy and builds up to a bright climax.", 
      creator: "Ekcle & Vorso", 
      imgURL: "https://i1.sndcdn.com/artworks-000337755537-c90d24-t500x500.jpg",
      tags: ["dnb", "electronic", "2018"]
    };

    let song7: Content;
    song7 = {
      id: 5,
      title: "Particle Arts",
      description: "Energetic trance song.", 
      creator: "Virtual Self", 
      imgURL: "https://i1.sndcdn.com/artworks-000262772639-4v6osk-t500x500.jpg",
      type: "Electronic",
      tags: ["virtual-self", "2017"]
    };

    this.songList = [song1, song2, song3, song4, song5, song6, song7];
    
  }

  //Confirmation message
  confirmMsg: string = "";

  updatePage(search: string): void {

    //Grab list of songs
    var list = new ContentListComponent;

    //Get html element
    var text = document.getElementsByTagName('h3');

    //Go through each song and match the title
    for(var song of list.songList){
      if(song.title == search){
        //Set message
        this.confirmMsg ="There is a song with that title.";
        text[0].className = "yes";
        //If it exists, break out of the loop
        break;
      }
      else{
        //Set message
        this.confirmMsg = "There isn't a song with that title.";
        text[0].className = "no";
      }
    }

  }

  ngOnInit(): void {
  }

}
