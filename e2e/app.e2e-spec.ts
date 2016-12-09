import { RestApiReactTemplatePage } from './app.po';

describe('rest-api-react-template App', function() {
  let page: RestApiReactTemplatePage;

  beforeEach(() => {
    page = new RestApiReactTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
