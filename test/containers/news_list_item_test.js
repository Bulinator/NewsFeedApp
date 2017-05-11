import { renderComponent, expect } from '../test_helper';
import NewsListItem from '../../src/containers/news_list_item';

describe('NewsListItem', () => {

    let component;

    // run before each test
    beforeEach(() => {
      component = renderComponent(NewsListItem);
    });

    it('has the correct class', () => {
      expect(component).to.have.class('news-list-item');
    });
});
