import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { SONGLIST } from '../helper-files/ContentDb';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
  // setting it to the value of our array of content
    const content : Content[] = SONGLIST;
    return {content};
  }

  genId(content: Content[]): number { 
    return content.length > 0 ? Math.max(...content.map(c => { return c.id ?? 0 })) + 1 : 2000;
  }
}
