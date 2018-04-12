export class BlogListDto {
  totalCount: number;
  items: BlogDto[];
  constructor() {
    this.items =[];
    this.totalCount = 0;
  }
}

export class BlogQuery {
  key: string;
  skipCount: number;
  maxResultCount: number;
  constructor () {
    this.skipCount = 0;
    this.maxResultCount = 10;
  }
}

export class BlogDto {
  collect;
  creationTime;
  id;
  isPublic;
  like;
  scan;
  title;
}
