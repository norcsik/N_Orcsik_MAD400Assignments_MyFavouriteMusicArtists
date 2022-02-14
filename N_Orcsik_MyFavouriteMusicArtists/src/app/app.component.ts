import { Component } from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'N_Orcsik_MyFavouriteMusicArtists';

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
}


