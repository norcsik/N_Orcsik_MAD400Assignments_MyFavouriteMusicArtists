import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { SONGLIST } from '../helper-files/ContentDb';
import { Observable, of } from 'rxjs';
import { ContentListComponent } from '../content-list/content-list.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private messageService: MessageService, private http: HttpClient) { 
    
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  getContent(): Content[] {
    return SONGLIST;
  }

  getContentObs(): Observable<Content[]>{
    this.messageService.add('Content loaded!');
    return this.http.get<Content[]>("api/content");
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
        //return this.http.get<Content[]>("api/content" + index); ???
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

  //Add content to database
  addContent(newContentItem: Content): Observable<Content>{
    this.messageService.add('New song successfully added!');
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  //Update content in database
  updateContent(contentItem: Content): Observable<any>{
    this.messageService.add('Song at index ' + (contentItem.id ?? 0) + ' updated!');
    return this.http.put("api/content", contentItem,  this.httpOptions);
  }
}
