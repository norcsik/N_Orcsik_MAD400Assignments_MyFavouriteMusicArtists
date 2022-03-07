import { Component, EventEmitter, Output, OnInit, ElementRef } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newSongEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() newMsg: EventEmitter<string> = new EventEmitter<string>();
  newSong?: Content;

  constructor(private elm: ElementRef) { 
  }

  ngOnInit(): void {
  }

  //Create song function
  createSong(id: string, title: string, desc: string, creator: string, imageUrl: any, type: any, tags: any): void {
    
    //If optional inputs are empty, make them null
    if(imageUrl == ''){
      imageUrl = null;
    }
    if(type == ''){
      type = null;
    }
    if(tags == ''){
      tags = null;
    }
    else{
      tags = tags.split(", ");
    }

    //Create new song
    this.newSong = {
      id: parseInt(id),
      title: title,
      description: desc,
      creator: creator,
      imgURL: imageUrl,
      type: type,
      tags: tags
    };

    //Get inputs
    var inputs = this.elm.nativeElement.getElementsByTagName('input');

    //Promise pattern
    let newPromise = new Promise((success, fail) =>{

      //Check to see if required fields are filled
      if(inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '' || inputs[3].value == ''){
        fail(
          "Song failed to be added. A required field may be empty."
        );
      }
      else{
        success(
          console.log("The addition is successful! \nTitle: ", this.newSong?.title)
        );
      }
    });

    //Success or fail
    newPromise.then(successResult =>{
      //Send the song via eventemitter
      this.newSongEvent.emit(this.newSong);

      //Send message
      this.newMsg.emit("");

      //Success console message
      successResult;

      //Clear inputs
      for(var input of inputs){
          input.value = '';
      }
      
    })
    .catch((failResult) => { 
      //Send fail message
      this.newMsg.emit(failResult);
    });

  }
}
