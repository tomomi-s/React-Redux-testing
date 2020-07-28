import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../utils/index';;
import ListItem from './ListItem';

describe('ListItem Component', ()=>{

	describe('Checking PropTypes', ()=>{
		it('Should NOT throw a warning', ()=>{
			const expectedProps = {
				title: 'Title',
				desc: 'Some text'
			}

			const propsError = checkProps(ListItem, expectedProps);
			expect(propsError).toBeUndefined();
		})
	})

	describe('Component Renders', ()=>{
		let wrapper;
		beforeEach(()=>{
			const props = {
				title: 'Title',
				desc: 'Some text'
			}
			wrapper = shallow(<ListItem {...props}/>)
		})

		it('Should renders without errors', ()=>{
			const component = findByTestAttr(wrapper, 'listItemComponent');
			expect(component.length).toBe(1);
		})

		it('Should renders title', ()=>{
			const title = findByTestAttr(wrapper, 'listItemTitle');
			expect(title.length).toBe(1);
		})

		it('Should renders desc', ()=>{
			const desc = findByTestAttr(wrapper, 'listItemDesc');
			expect(desc.length).toBe(1);
		})
	})

	describe('Should not render components', ()=>{
		let wrapper;
		beforeEach(()=>{
			const props = {
				desc: 'Some text'
			}
			wrapper = shallow(<ListItem {...props}/>)
		})

		it('Should renders title', ()=>{
			const title = findByTestAttr(wrapper, 'listItemTitle');
			expect(title.length).toBe(0);
		})

	})
})