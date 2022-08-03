import React from 'react';
import {shallow} from 'enzyme';
import recipes from 'src/data';
import Content from '../../src/components/Content';
import Card from '../../src/components/Card';

describe('content component', () => {
    const wrapper = shallow(
        <Content title="Test"
                 text="Hello World"
                 recipes={recipes}/>
    );

    it('should have a title', () => {
        const contentTitleText = wrapper.find('.content-title').text();
        expect(contentTitleText).toEqual('Test');
    });

    it('should have a text content', () => {
        expect(wrapper.find('.content-text')).toHaveLength(1);
    });

    it('should return as many Cards as recipes', () => {
        expect(wrapper.find(Card)).toHaveLength(recipes.length);
    });
});
