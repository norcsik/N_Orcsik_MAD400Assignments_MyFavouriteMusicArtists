import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  //Events for sending adding and updating
  @Output() newSongEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateSongEvent: EventEmitter<Content> = new EventEmitter<Content>();

  //Variable for new song
  newSong?: Content;

  //Input values
  id = "";
  title = "";
  desc = "";
  creator = "";
  img = "";
  type = "";
  tags = "";

  //Button name
  buttonName: string = "Add";

  constructor() {
  }

  ngOnInit(): void {
  }

  //Update button on page
  pageUpdate(){
    if(this.id!= null){
      this.buttonName = "Update";
    }
    else{
      this.buttonName = "Add";
    } 
  }

  //Method to create new song or update existing song
  addUpdateSong(id: string, title: string, description: string, creator: string, imageUrl: any, type: any, tags: any): void {
    
    //If these are empty, set to null
    if(imageUrl == ""){
      imageUrl = null;
    }
    if(type == ""){
      type = null;
    }
    if(tags == ""){
      tags = null;
    }

    //If id isn't empty, update
    if(id != ""){

      this.newSong = {
        id: parseInt(id),
        title: title,
        description: description,
        creator: creator,
        imgURL: imageUrl,
        type: type,
        tags: tags.split(", ")
      };
      this.updateSongEvent.emit(this.newSong);

      //Change button back
      this.buttonName = "Add";

    }
    //If id is empty, add
    else{

      this.newSong = {
        title: title,
        description: description,
        creator: creator,
        imgURL: imageUrl,
        type: type,
        tags: tags.split(", ")
      };
      this.newSongEvent.emit(this.newSong);

    }

    //Clear input fields
    let fields = document.getElementsByTagName("input");

    fields[1].value = "";
    fields[2].value = "";
    fields[3].value = "";
    fields[4].value = "";
    fields[5].value = "";
    fields[6].value = "";
    fields[7].value = "";
    
  }
  
  //Method to update existing song
  // updateSong(id: string, title: string, description: string, creator: string, imageUrl: any, type: any, tags: any): void {
    
  //   if(imageUrl == ""){
  //     imageUrl = null;
  //   }
  //   if(type == ""){
  //     type = null;
  //   }
  //   if(tags == ""){
  //     tags = null;
  //   }
    
  //   this.newSong = {
  //     id: parseInt(id),
  //     title: title,
  //     description: description,
  //     creator: creator,
  //     imgURL: imageUrl,
  //     type: type,
  //     tags: tags.split(", ")
  //   };
  //   this.updateSongEvent.emit(this.newSong);
  // }

}
