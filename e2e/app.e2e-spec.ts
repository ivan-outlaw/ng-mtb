import { NgBootstrap4Page } from './app.po';

describe('ng-bootstrap4 App', () => {
  let page: NgBootstrap4Page;

  beforeEach(() => {
    page = new NgBootstrap4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
