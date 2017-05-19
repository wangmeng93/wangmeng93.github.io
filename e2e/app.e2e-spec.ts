import { Wangmeng.Github.IoPage } from './app.po';

describe('wangmeng.github.io App', () => {
  let page: Wangmeng.Github.IoPage;

  beforeEach(() => {
    page = new Wangmeng.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
