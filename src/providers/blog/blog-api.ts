import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import {Observable} from "rxjs/Observable";
import {BlogListDto, BlogQuery} from "../../models/blog";
export * from "../../models/blog";

@Injectable()
export class BlogApi {
  url= {
    list: 'NoteServer/GetNoteList'
  };
  constructor(public api: Api) { }

  getBlogList(query: BlogQuery): Observable<BlogListDto> {
    return this.api.get(this.url.list, query);
  }

}
