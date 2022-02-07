import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ContentListComponent } from '../content-list/content-list.component';

//Import Content interface
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  //Get info from content card component
  @Input() songDisplay?: Content;

  constructor() {

  }

  ngOnInit(): void {

    //Get array of img tags
    let images = document.getElementsByTagName("img")

    //Go through array
    for(let i = 0; i < images.length; i++){
      
      //On click function
      images[i].onclick = function() {

        //Get instance of content list
        var content = new ContentListComponent;

        //Put info into variables
        var id = content.songList[i].id;
        var title = content.songList[i].title;

        //Display info
        console.log("ID: " + id + "\nTitle: " + title);
      };
    }
  }

}
