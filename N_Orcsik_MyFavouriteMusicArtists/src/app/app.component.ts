import { Component } from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './services/log-update.service';
import { SongService } from './services/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'N_Orcsik_MyFavouriteMusicArtists';

  songList: Content[];
  singleSong: Content;

  constructor(private songService: SongService, private logService: LogUpdateService){
    this.songList = [];
    this.singleSong = this.songList[0];
  }

  ngOnInit(): void {
    this.logService.init();
  }

  //Send id through service
  setId(id: string){
    this.songService.getSingleContent(id).subscribe(singleSong => this.singleSong = singleSong)
  }
}


