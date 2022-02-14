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

  }

  infoDisplay(){
    //Put info into variables
    var id = this.songDisplay?.id;
    var title = this.songDisplay?.title;

    //Display info
    console.log("ID: " + id + "\nTitle: " + title);
  }

}
