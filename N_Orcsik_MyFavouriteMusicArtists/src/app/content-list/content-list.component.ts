
import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  //New Array
  songList: Content[];
  @Input() singleSong: Content;

  constructor(private songService: SongService) { 
    this.songList = [];
    this.singleSong = this.songList[1];
  }

  //Confirmation message
  confirmMsg: string = "";

  updatePage(search: string): void {

    //Get html element
    var text = document.getElementsByTagName('h3');

    //Go through each song and match the title
    for(var song of this.songList){
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
    //Create songs to store
    this.songService.getContentObs().subscribe(songList => this.songList = songList);
    //Get single song
    this.songService.getSingleContent("0").subscribe(singleSong => this.singleSong = singleSong)
  }

  

}
