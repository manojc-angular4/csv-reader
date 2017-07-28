import { AngularCsvConverterPage } from './app.po';

describe('angular-csv-converter App', () => {
  let page: AngularCsvConverterPage;

  beforeEach(() => {
    page = new AngularCsvConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
