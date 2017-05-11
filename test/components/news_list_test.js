import { renderComponent, expect } from '../test_helper';
import NewsList from '../../src/components/news_list';

describe('NewsList', () => {

  let component;

  // run before each test
  beforeEach(() => {
    component = renderComponent(NewsList);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('news-list');
  });
});
