import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { SONGLIST } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { ContentListComponent } from '../content-list/content-list.component';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return SONGLIST;
  }

  getContentObs(): Observable<Content[]>{
    this.messageService.add('Content array loaded!');
    return of(SONGLIST)
  }

  getSingleContent(index: string): Observable<any>{

    //Check for number value
    if(parseInt(index)){

      //Check if number is out of bounds
      if(parseInt(index) >= SONGLIST.length || parseInt(index) < 0){
        this.messageService.add('Error: Index outside array bounds');
        return of(null);
      }
      else{
        this.messageService.add('Content item at id: ' + index);
        return of(SONGLIST[parseInt(index)]);
      }
    }
    //0 doesn't pass parseInt() for some reason, set manually
    else if(index == "0"){
      this.messageService.add('Content item at id: ' + index);
      return of(SONGLIST[0]);
    }
    //Input is not a number
    else{
      this.messageService.add('Error: Invalid non number input');
      return of(null);
    }
  }
}
