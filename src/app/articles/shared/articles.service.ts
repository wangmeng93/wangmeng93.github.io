import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class ArticlesItems {
  constructor(public title: string,
              public url: string) {
  }
}

export class ArticleItem {
  constructor(public title: string,
              public url: string) {
  }
}
export class Items {
  constructor(public title: string,
              public url: string) {
  }
}

@Injectable()
export class ArticlesService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private journalUrl = '/api';

  constructor(private http: Http) {
  }

  getArticlesItems(): Promise<ArticlesItems[]> {

    let articles = [
      {
        title: 'bootstrap弹出的模态框水平垂直居中的实现',
        url: 'http://www.cnblogs.com/web-wangmeng/p/5616174.html'
      },
      {
        title: 'angular简单的ui-view嵌套及传参',
        url: 'http://www.cnblogs.com/web-wangmeng/p/6610827.html'
      },
      {
        title: 'javascript 移动端h5页面自适应',
        url: 'http://www.cnblogs.com/web-wangmeng/p/5641397.html'
      },
      {
        title: 'angular组件component无法传递数据的坑',
        url: 'http://www.cnblogs.com/web-wangmeng/p/6065202.html'
      },
      {
        title: 'angular2 --开发环境搭建及项目创建',
        url: 'http://www.cnblogs.com/web-wangmeng/p/6773911.html'
      }
    ];
    return Promise.resolve(articles);
  }

  getArticles(): Observable<Items> {
    let url= 'http://www.cnblogs.com/mvc/Blog/GetBlogSideBlocks.aspx?blogApp=web-wangmeng&showFlag=ShowRecentComment%2CShowTopViewPosts%2CShowTopFeedbackPosts%2CShowTopDiggPosts'

    return this.http
      .get(url)
      .map(res => res.json() as Items)
      .catch(this.handleError);

  }

  private handleError(error: any): Observable<any> {
    console.log('error :', error);
    return Observable.throw(error.message || error);
  }

}
