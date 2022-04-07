import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { SONGLIST } from '../helper-files/ContentDb';
import { MessageService } from '../services/message.service';

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
  @Input() newSong?: Content;

  //Button Text
  @Input() buttonText = "Add New Content"
  @Input() addUpdateButton = "Add"

  //Input values
  id: string = "";
  title = "";
  desc = "";
  creator = "";
  img = "";
  type = "";
  tags = "";

  constructor(private dialog: MatDialog, private messageService: MessageService) {
    this.newSong = {id: 0, title: "", description: "", creator: "", imgURL: "", type: "", tags: [""]}
  }

  ngOnInit(): void {
  }

  //Method to create new song or update existing song
  addUpdateSong(id: number, title: string, description: string, creator: string, imageUrl: any, type: any, tags: any): void {
    
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
    if(id >= SONGLIST.length || id < 0){

      this.messageService.add('Index out of bounds!');

    }
    //If id is empty, add
    else if (id == null){

      this.newSong = {
        title: title,
        description: description,
        creator: creator,
        imgURL: imageUrl,
        type: type,
        tags: tags.split(",")
      };
      this.newSongEvent.emit(this.newSong);

    }
    else{
      this.newSong = {
        id: id,
        title: title,
        description: description,
        creator: creator,
        imgURL: imageUrl,
        type: type,
        tags: tags.split(",")
      };
      this.updateSongEvent.emit(this.newSong);
    }
    
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


  //Add new content method
  addNewContentDialog(){

    const dialogRef = this.dialog.open(NewSongDialog, {
      width: '250px',
      data: this.newSong
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.addUpdateSong(result.id, result.title, result.description, result.creator, result.imgURL, result.type, result.tags);
    });
  }

}

@Component({
  selector: 'new-song-dialog',
  templateUrl: 'new-song-dialog.html'
})
export class NewSongDialog {

  temp_id: string;

  constructor(
    public dialogRef: MatDialogRef<NewSongDialog>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(MAT_DIALOG_DATA) public data: Content,
  ) {
    this.temp_id = "";
    if(this.data.id){
      this.temp_id = this.data.id.toString();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void{
    if(this.temp_id == ""){
      this.data.id = SONGLIST.length;
    }
    else{
      this.data.id = parseInt(this.temp_id);
    }

    //Clear input fields
    // let fields = document.getElementsByTagName("input");

    // console.log(fields[2].value);
    // console.log(fields[3].value);
    // console.log(fields[4].value);
    // fields[2].value = "";
    // fields[3].value = "";
    // fields[4].value = "";
    // fields[5].value = "";
    // fields[6].value = "";
    // fields[7].value = "";
    // fields[8].value = "";

    this.dialogRef.close(this.data);
  }
}
