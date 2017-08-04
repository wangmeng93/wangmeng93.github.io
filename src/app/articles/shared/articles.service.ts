import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class ArticlesItems {
  constructor(public articleId: number,
              public articleTitle: string,
              public articleType: number) {
  }
}

export class ArticleItem {
  constructor(public articleId: number,
              public articleTitle: string,
              public articleType: number) {
  }
}

@Injectable()
export class ArticlesService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private journalUrl = '/api';

  constructor(private http: Http) {
  }

  getArticlesItems(): Promise<ArticlesItems[]> {
    let articles = [{
      articleId: 1,
      articleTitle: '文章标题-1',
      articleType: 1
    }, {
      articleId: 2,
      articleTitle: '文章标题-2',
      articleType: 1
    }];
    return Promise.resolve(articles);
  }

  getArticleItem(articleId: number): Promise<any> {
    let articles = [{
      articleId: 1,
      articleTitle: '文章标题-1',
      articleType: 1
    }, {
      articleId: 2,
      articleTitle: '文章标题-2',
      articleType: 1
    }];
    return Promise.resolve(articles);
  }

}
