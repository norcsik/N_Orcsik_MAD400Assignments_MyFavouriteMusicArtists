
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  id?: string;
  songDisplay?: Content;

  constructor(private route: ActivatedRoute, private songService: SongService, private messageService: MessageService) { 
    this.songDisplay = {
      id: 0,
      title: "",
      description: "",
      creator: "",
      type: "", 
    }
  }

  ngOnInit(): void {

    //Getting id for route
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        console.error("ID NOT SET");
      }

      //Get the id of the content or set to 0
      this.id = params.get('id') ?? "0"; // uses the + unary operator

      //Use the id to get a single piece of content
      this.songService.getSingleContent(this.id).subscribe(singleSong => {
        this.songDisplay = singleSong;
      });
    });

    this.messageService.add('ID: ' + this.songDisplay?.id + " | Title: " + this.songDisplay?.title);
  }

}
